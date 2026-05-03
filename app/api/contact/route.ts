// app/api/contact/route.ts
import { Redis } from "@upstash/redis";
import nodemailer from "nodemailer";

const redis = Redis.fromEnv();

// Returns cooldown in seconds for the Nth send (1-indexed): 2min → 4min → 8min …
function getCooldownSeconds(sendCount: number): number {
  return 2 * Math.pow(2, sendCount - 1) * 60;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "anonymous";

  const countKey = `contact:count:${ip}`;
  const lockKey = `contact:lock:${ip}`;

  // Check if currently locked
  const locked = await redis.get<number>(lockKey);
  if (locked !== null) {
    const ttl = await redis.ttl(lockKey); // seconds remaining
    const retryAfter = Date.now() + ttl * 1000;
    return Response.json(
      { error: "Rate limited", retryAfter },
      { status: 429 },
    );
  }

  // Parse body
  let body: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, subject, message } = body;
  if (!name || !email || !subject || !message) {
    return Response.json({ error: "All fields are required" }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER!,
        pass: process.env.GMAIL_APP_PASSWORD!,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      replyTo: `"${name}" <${email}>`,
      to: "shafwanulhaquechowdhury@gmail.com",
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}\n\n---\nReply to: ${email}`,
      html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px;">
      <p>New message from your portfolio contact form:</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      <hr/>
      <p style="color: #666; font-size: 12px;">Reply to: <a href="mailto:${email}">${email}</a></p>
    </div>
  `,
    });
  } catch (err) {
    console.error("Email send failed:", err);
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
