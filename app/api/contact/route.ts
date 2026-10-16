// app/api/contact/route.ts
import { Redis } from "@upstash/redis";
import nodemailer from "nodemailer";

const redis = Redis.fromEnv();
const RESERVATION_SECONDS = 60;
const MAX_LENGTHS = { name: 100, email: 254, subject: 200, message: 5000 };

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[char]!);
}

// Returns cooldown in seconds for the Nth send (1-indexed): 2min → 4min → 8min …
function getCooldownSeconds(sendCount: number): number {
  return 2 * Math.pow(2, sendCount - 1) * 60;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "anonymous";

  const countKey = `contact:count:${ip}`;
  const lockKey = `contact:lock:${ip}`;

  // Parse body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const fields = body as Record<string, unknown>;
  const name = typeof fields.name === "string" ? fields.name.trim() : "";
  const email = typeof fields.email === "string" ? fields.email.trim() : "";
  const subject = typeof fields.subject === "string" ? fields.subject.trim() : "";
  const message = typeof fields.message === "string" ? fields.message.trim() : "";
  if (!name || !email || !subject || !message) {
    return Response.json({ error: "All fields are required" }, { status: 400 });
  }
  if (
    name.length > MAX_LENGTHS.name ||
    email.length > MAX_LENGTHS.email ||
    subject.length > MAX_LENGTHS.subject ||
    message.length > MAX_LENGTHS.message ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    /[\r\n]/.test(subject)
  ) {
    return Response.json({ error: "Invalid form fields" }, { status: 400 });
  }

  // Reserve the lock atomically before sending so concurrent requests cannot
  // all pass the check. A short reservation is extended after a successful send.
  const reservation = crypto.randomUUID();
  const reserved = await redis.set(lockKey, reservation, {
    ex: RESERVATION_SECONDS,
    nx: true,
  });
  if (reserved !== "OK") {
    const ttl = await redis.ttl(lockKey);
    return Response.json(
      { error: "Rate limited", retryAfter: Date.now() + Math.max(ttl, 1) * 1000 },
      { status: 429 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      replyTo: email,
      to: "shafwanulhaquechowdhury@gmail.com",
      subject: `[Portfolio] ${subject.replace(/[\r\n]/g, " ")}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}\n\n---\nReply to: ${email}`,
      html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px;">
      <p>New message from your portfolio contact form:</p>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      <hr/>
      <p style="color: #666; font-size: 12px;">Reply to: <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
    </div>
  `,
    });
  } catch (err) {
    console.error("Email send failed:", err);
    await redis.eval(
      "if redis.call('get', KEYS[1]) == ARGV[1] then return redis.call('del', KEYS[1]) else return 0 end",
      [lockKey],
      [reservation],
    );
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }

  // Increment send count and apply exponential lock
  const newCount = await redis.incr(countKey);
  await redis.expire(countKey, 60 * 60 * 24); // expire count after 24h of inactivity

  const cooldown = getCooldownSeconds(newCount);
  await redis.set(lockKey, newCount, { ex: cooldown });

  const retryAfter = Date.now() + cooldown * 1000;
  return Response.json({ success: true, retryAfter }, { status: 200 });
}

export async function GET(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "anonymous";

  const lockKey = `contact:lock:${ip}`;
  const locked = await redis.get<number>(lockKey);

  if (locked !== null) {
    const ttl = await redis.ttl(lockKey);
    const retryAfter = Date.now() + ttl * 1000;
    return Response.json({ rateLimited: true, retryAfter });
  }

  return Response.json({ rateLimited: false });
}
