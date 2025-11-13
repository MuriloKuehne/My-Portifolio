export interface Certification {
  name: string;
  issuer: string;
  url: string;
  issueDate?: string;
  hours?: number;
}

export interface ContactLink {
  name: string;
  href: string;
  label: string;
}

export interface Language {
  name: string;
  flag: string;
}

export const personalInfo = {
  name: "Murilo Kühne",
  title: "Software Engineer / Fullstack Developer",
  birthYear: 2006,
  citizenship: "Brazilian and German citizen",
  location: null, // Not displayed
  heroDescription: "Specializing in JavaScript and modern web technologies",
  aboutParagraphs: [
    "I'm a fullstack developer with a strong focus on JavaScript and modern web technologies. I build scalable applications that combine elegant frontend experiences with robust backend solutions.",
    "My expertise spans the entire development stack, allowing me to take projects from concept to deployment with a comprehensive understanding of both client and server-side technologies.",
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Next.js",
    "Fullstack Development",
  ],
  languages: [
    { name: "Portuguese", flag: "🇧🇷" },
    { name: "Spanish", flag: "🇪🇸" },
    { name: "English", flag: "🇺🇸" },
    { name: "German", flag: "🇩🇪" },
  ],
  certifications: [
    {
      name: "Fullstack",
      issuer: "Rocketseat",
      url: "https://app.rocketseat.com.br/certificates/24e32ba6-fce5-4b07-ac67-1daf1b46c0ae",
      issueDate: "03/08/2025",
      hours: 181,
    },
    {
      name: "Fundamentos do Next.js",
      issuer: "Rocketseat",
      url: "https://app.rocketseat.com.br/certificates/85915dd3-801d-4f67-8276-65f60a8f0ea6",
      issueDate: "01/06/2025",
      hours: 15,
    },
    {
      name: "Fundamentos do Node.js",
      issuer: "Rocketseat",
      url: "https://app.rocketseat.com.br/certificates/b69f10f9-5fb7-4167-9442-689f392b7252",
      issueDate: "01/06/2025",
      hours: 3,
    },
    {
      name: "Introdução ao Node.js",
      issuer: "Rocketseat",
      url: "https://app.rocketseat.com.br/certificates/766a5004-b127-4a37-8eeb-09746195f9fc",
      issueDate: "27/06/2025",
      hours: 50,
    },
    {
      name: "Fundamentos do React",
      issuer: "Rocketseat",
      url: "https://app.rocketseat.com.br/certificates/f3f5116a-d178-41ec-bc10-ab67481d562d",
      issueDate: "08/06/2025",
      hours: 6,
    },
    {
      name: "Fundamentos do React",
      issuer: "Rocketseat",
      url: "https://app.rocketseat.com.br/certificates/47e42a41-e5fe-453d-a855-f4275a67e40e",
      issueDate: "15/04/2025",
      hours: 6,
    },
    {
      name: "JavaScript",
      issuer: "Rocketseat",
      url: "https://app.rocketseat.com.br/certificates/b3d2d802-2689-4ce9-8e0f-6f5b623d36ee",
    },
    {
      name: "Discover",
      issuer: "Rocketseat",
      url: "https://app.rocketseat.com.br/certificates/2bfce701-65d8-4cea-a426-a7eae04cceea",
    },
  ],
  contactLinks: [
    {
      name: "Email",
      href: "mailto:mkuehne26@icloud.com",
      label: "Get in touch via email",
    },
    {
      name: "GitHub",
      href: "https://github.com/MuriloKuehne",
      label: "View my code on GitHub",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/murilo-kuehne/?locale=pt_BR",
      label: "Connect on LinkedIn",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/murilo.kuehne/",
      label: "Follow on Instagram",
    },
  ],
} as const;

