import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { getAllProjects } from "@/lib/projects";

export default async function Home() {
  const projects = await getAllProjects();

  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects projects={projects} />
      <Contact />
    </main>
  );
}
