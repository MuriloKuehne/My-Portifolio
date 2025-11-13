import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export interface Project {
  slug: string;
  title: string;
  description: string;
  status: "completed" | "in-progress" | "planned";
  tags: string[];
  image?: string;
  link?: string;
  github?: string;
  content: string;
  contentHtml: string;
}

export function getProjectSlugs(): string[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }
  return fs.readdirSync(projectsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export async function getProjectBySlug(slug: string): Promise<Project> {
  const fullPath = path.join(projectsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || "",
    description: data.description || "",
    status: data.status || "planned",
    tags: data.tags || [],
    image: data.image,
    link: data.link,
    github: data.github,
    content,
    contentHtml,
  };
}

export async function getAllProjects(): Promise<Project[]> {
  const slugs = getProjectSlugs();
  const projects = await Promise.all(
    slugs.map((slug) => getProjectBySlug(slug))
  );
  
  return projects.sort((a, b) => {
    const statusOrder = { completed: 0, "in-progress": 1, planned: 2 };
    return statusOrder[a.status] - statusOrder[b.status];
  });
}

