"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/projects";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const tagColors = [
  { bg: "bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/20" },
  { bg: "bg-purple-500/10", text: "text-purple-600 dark:text-purple-400", border: "border-purple-500/20" },
  { bg: "bg-green-500/10", text: "text-green-600 dark:text-green-400", border: "border-green-500/20" },
  { bg: "bg-orange-500/10", text: "text-orange-600 dark:text-orange-400", border: "border-orange-500/20" },
  { bg: "bg-pink-500/10", text: "text-pink-600 dark:text-pink-400", border: "border-pink-500/20" },
  { bg: "bg-cyan-500/10", text: "text-cyan-600 dark:text-cyan-400", border: "border-cyan-500/20" },
  { bg: "bg-yellow-500/10", text: "text-yellow-600 dark:text-yellow-400", border: "border-yellow-500/20" },
  { bg: "bg-red-500/10", text: "text-red-600 dark:text-red-400", border: "border-red-500/20" },
  { bg: "bg-indigo-500/10", text: "text-indigo-600 dark:text-indigo-400", border: "border-indigo-500/20" },
  { bg: "bg-teal-500/10", text: "text-teal-600 dark:text-teal-400", border: "border-teal-500/20" },
  { bg: "bg-amber-500/10", text: "text-amber-600 dark:text-amber-400", border: "border-amber-500/20" },
  { bg: "bg-emerald-500/10", text: "text-emerald-600 dark:text-emerald-400", border: "border-emerald-500/20" },
];

const getTagColor = (tag: string): typeof tagColors[0] => {
  // Technology tag uses primary color (dark gold)
  if (tag.toLowerCase() === "technology") {
    return {
      bg: "bg-primary/10",
      text: "text-primary",
      border: "border-primary/20",
    };
  }
  
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = tag.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % tagColors.length;
  return tagColors[index];
};

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <Card className="h-full flex flex-col hover:border-primary/50 transition-smooth hover:shadow-xl hover:shadow-primary/10">
        <CardHeader className="pb-3 flex-shrink-0">
          <CardTitle className="text-lg mb-2 line-clamp-1">{project.title}</CardTitle>
          <CardDescription className="text-sm line-clamp-2">{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="pt-0 flex-1 flex flex-col space-y-3">
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 flex-shrink-0">
              {project.tags.map((tag) => {
                const color = getTagColor(tag);
                return (
                  <motion.div
                    key={tag}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Badge
                      variant="outline"
                      className={`text-xs ${color.bg} ${color.text} ${color.border} transition-smooth cursor-default`}
                    >
                      {tag}
                    </Badge>
                  </motion.div>
                );
              })}
            </div>
          )}
          <div className="flex gap-4 pt-1 mt-auto flex-shrink-0">
            {project.link && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-primary hover:underline transition-smooth group"
                >
                  <ExternalLink className="h-3.5 w-3.5 group-hover:rotate-12 transition-transform" />
                  Live
                </Link>
              </motion.div>
            )}
            {project.github && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-smooth group"
                >
                  <Github className="h-3.5 w-3.5 group-hover:rotate-12 transition-transform" />
                  Code
                </Link>
              </motion.div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

