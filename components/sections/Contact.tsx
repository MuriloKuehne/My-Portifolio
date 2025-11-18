"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Instagram, ExternalLink } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/lib/config";

const iconMap = {
  Email: Mail,
  GitHub: Github,
  LinkedIn: Linkedin,
  Instagram: Instagram,
};

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Interested in working together? Let's connect.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {personalInfo.contactLinks.map((link, index) => {
            const Icon = iconMap[link.name as keyof typeof iconMap] || ExternalLink;
            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-3 px-5 sm:px-6 py-3 sm:py-4 bg-card border-2 border-border rounded-lg hover:border-primary hover:bg-accent transition-smooth group shadow-sm hover:shadow-lg"
                  aria-label={link.label}
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="h-5 w-5 text-primary transition-smooth" />
                  </motion.div>
                  <span className="font-medium text-sm sm:text-base">{link.name}</span>
                  {link.href.startsWith("http") && (
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:rotate-12 transition-smooth" />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

