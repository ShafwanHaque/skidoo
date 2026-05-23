// assets/assets.ts
import user_image from "./user-image.jpg";
import code_icon from "./code-icon.png";
import framework_icon from "./framework-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.jpg";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import sun_icon from "./sun_icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";

// ==================== ASSETS ====================
export const assets = {
  user_image,
  code_icon,
  framework_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  sun_icon,
  arrow_icon_dark,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

// ==================== PERSONAL INFO ====================
export const personalInfo = {
  name: "Shafwanul Haque Chowdhury",
  title: "Software Engineer",
  location: "Dhaka, Bangladesh",
  email: "shafwanulhaquechowdhury@gmail.com",
  linkedin: "https://www.linkedin.com/in/shafwanul-haque-chowdhury",
  github: "https://github.com/shafwanHaque",
  resume: "https://drive.google.com/file/d/1DOJdSbtlrDF6homrM1hDRjPuZXI2Sd0m/view?usp=sharing",
};

// ==================== HOME SECTION ====================
export const homeData = {
  greeting: "Hi! I'm Shafwanul Haque Chowdhury",
  title: "Software Engineer based in Bangladesh.",
  description: "Full-stack developer from Dhaka, Bangladesh — building scalable real-world solutions since June 2024 at",
  company: " CodeLab FZC LLC"
};

// ==================== ABOUT SECTION ====================
export const aboutData = {
  description: "I'm a passionate Software Engineer with hands-on industry experience, working alongside senior engineers to deliver scalable, real-world applications. I enjoy solving complex problems in collaborative environments while focusing on clean, efficient, and maintainable code.",
  infoCards: [
    {
      icon: "fa fa-graduation-cap",
      title: "Education",
      description: "Bachelor of Science in Computer Science & Engineering from American International University-Bangladesh (AIUB).",
    },
    {
      icon: "fa fa-briefcase",
      title: "Current Role",
      description: "Software Engineer at CodeLab FZC LLC (UAE-based) in Dhaka, Bangladesh, working primarily on systems for Japanese markets.",
    },
    {
      icon: "fa fa-person-hiking",
      title: "Hobbies & Interests",
      description: "Passionate about cycling and solo adventure travel — my ultimate ways to reset, disconnect, and find new technical inspiration.",
    },
  ],
};

// ==================== SKILLS SECTION ====================
export const skillsData = {
  description: "Throughout my engineering journey, I've developed deep technical expertise in modern architecture, backend logic orchestration, database tuning, and slick frontend frameworks.",
  skills: [
    {
      icon: "fa fa-code",
      title: "Programming Languages",
      description: "JavaScript, TypeScript, PHP, Java, C#, C++, Go",
      brief: "My programming journey began with C++ during my bachelor's degree, where I mastered fundamental algorithmic concepts. Java followed, helping me build my first collaborative Payroll Management System. Later, I adopted C# for a desktop-driven Travellers Management System. As I moved fully into modern web environments, TypeScript, JavaScript, and PHP became my primary tools for engineering enterprise-level software infrastructure.",
    },
    {
      icon: "fa-brands fa-react",
      title: "Frameworks & Libraries",
      description: "NestJS, Next.js, ASP.NET Core, Vue.js, Laravel, Bootstrap, Tailwind CSS, Shadcn",
      brief: "Next.js and NestJS form my sweet-spot for building high-performance full-stack systems. For enterprise logic, ASP.NET Core introduced me to structured, reliable backend patterns. On the frontend, I utilize Tailwind CSS, modern CSS, and component systems like Shadcn UI to construct pixel-perfect, accessible, and clean user interfaces. In my day-to-day engineering at CodeLab, Laravel and Vue.js are core drivers for our production microservices."
    },
    {
      icon: "fa fa-database",
      title: "Database Management",
      description: "MySQL, PostgreSQL, MS SQL Server, Oracle, MongoDB, SQLite",
      brief: "Experienced with relational schema design and flexible dynamic documents. PostgreSQL and MySQL are my defaults for strict data mapping, whereas MongoDB handles quick-evolving records. My database workflows focus heavily on query runtime optimization, handling transactional integrity, managing indexing setups, and implementing bulletproof structural relationship design.",
    },
    {
      icon: "fa fa-screwdriver-wrench",
      title: "Development Tools",
      description: "Git, GitHub, Docker, Figma, WordPress, Nginx, Apache, Ubuntu 24.04",
      brief: "Proficient in orchestrating reliable dev environments and deploy workflows. I leverage Git paired with GitHub/Bitbucket for streamlined collaboration. Docker allows me to bundle deterministic microservices safely, while Nginx web proxies serve my production builds across Linux/Ubuntu server distribution instances smoothly.",
    },
  ],
};

// ==================== PROJECTS SECTION ====================
export const projectsData = {
  description: "Throughout my academic and professional journey, I have built a wide range of web and system applications across different production tech stacks.",
  projects: [
    {
      title: "ChainNative (Merchant)",
      description: "Full-Stack Payment Gateway System",
      bgImage: "/work-1.WebP",
      technologies: ["ASP.NET Core", "PostgreSQL"],
      liveUrl: "/projects/chainnative/merchant",
    },
    {
      title: "ChainNative (Admin)",
      description: "Full-Stack Payment Gateway System Admin Dashboard",
      bgImage: "/work-2.WebP",
      technologies: ["NestJS", "Next.js", "PostgreSQL"],
      liveUrl: "/projects/chainnative/admin",
    },
    {
      title: "RESMO",
      description: "A Multi-School Japanese School Management Cloud Platform",
      bgImage: "/work-3.WebP",
      technologies: ["Laravel", "Vue.js", "MySQL"],
      liveUrl: "/projects/resmo",
      githubUrl: "#",
    },
    {
      title: "RoamEase",
      description: "Desktop application for Travelers Management Management Systems",
      bgImage: "/work-4.WebP",
      technologies: ["C#", "MS SQL Server"],
      liveUrl: "/projects/roamease",
      githubUrl: "#",
    },
  ],
};

// ==================== EXPERIENCE SECTION ====================
export const experienceData = {
  description: "My professional journey in software development, building impactful solutions and growing as an engineer.",
  experiences: [
    {
      id: 1,
      company: "CodeLab FZC LLC",
      position: "Software Engineer",
      location: "UAE (Remote / Hybrid from Dhaka, Bangladesh)",
      duration: "June 2024 - Present",
      type: "Full-time",
      responsibilities: [
        "Architected and developed enterprise-grade full-stack applications using NestJS, Next.js, ASP.NET Core, Vue.js, and Laravel, serving clients across Japan and UAE markets",
        "Collaborated closely with senior engineers and cross-functional teams in an Agile environment to deliver scalable, production-ready solutions meeting strict business requirements and deadlines",
        "Implemented robust backend systems with TypeScript, integrating MySQL and PostgreSQL databases with Prisma ORM, ensuring data integrity and optimal query performance",
        "Orchestrated CI/CD pipelines and production deployments using Docker containerization, Nginx reverse proxy, and Ubuntu servers for seamless version releases",
        "Integrated message queuing systems using RabbitMQ for asynchronous processing, improving application scalability and handling high-traffic scenarios efficiently",
        "Leveraged modern UI component libraries including Shadcn and Bootstrap to accelerate development while maintaining consistent, accessible design systems",
      ],
      technologies: [
        "Next.js",
        "NestJS",
        "ASP.NET Core",
        "Vue.js",
        "Laravel",
        "TypeScript",
        "Bootstrap",
        "Tailwind CSS",
        "MySQL",
        "PostgreSQL",
        "Docker",
        "Git",
        "GitHub",
        "Bitbucket",
        "Nginx",
        "Prisma",
        "RabbitMQ",
        "Shadcn",
      ],
    },
  ],
};

// ==================== CONTACT SECTION ====================
export const contactData = {
  description: "Have a project in mind or just want to chat? Feel free to reach out. I'm always open to discussing new opportunities and software engineering collaborations.",
};

// ==================== TOOLS/TECHNOLOGIES ====================
export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];

// ==================== NAVIGATION ====================
export const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];