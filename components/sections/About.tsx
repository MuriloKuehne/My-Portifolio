"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/lib/config";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="space-y-8 lg:space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {personalInfo.aboutParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
              <p className="text-base text-muted-foreground mt-6">
                {personalInfo.birthYear}, {personalInfo.citizenship}
              </p>
            </motion.div>

            {/* Right Column - Skills and Languages Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border border-border rounded-lg p-6 bg-card space-y-8"
            >
              {/* Skills Section */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {personalInfo.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium border border-primary/20 cursor-pointer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      whileHover={{
                        textShadow: "0 0 12px hsl(var(--primary) / 0.8), 0 0 24px hsl(var(--primary) / 0.5)",
                        transition: { duration: 0.15, ease: "easeOut" },
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Languages Section */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">Languages</h3>
                <div className="flex flex-wrap gap-4">
                  {personalInfo.languages.map((lang, index) => (
                    <motion.div
                      key={lang.name}
                      className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-lg cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: -20 }
                      }
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--accent))" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-2xl">{lang.flag}</span>
                      <span className="font-medium">{lang.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Certifications Section - Full Width Rectangle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border border-border rounded-lg p-6 bg-card"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">Certifications</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Left Column Certifications */}
              <div className="space-y-3">
                {personalInfo.certifications
                  .slice(0, Math.ceil(personalInfo.certifications.length / 2))
                  .map((cert, index) => (
                    <motion.div
                      key={`${cert.name}-${index}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: -20 }
                      }
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                    >
                      <Link
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 bg-background border border-border rounded-lg hover:border-primary hover:bg-accent transition-all group"
                      >
                        <div className="flex-1">
                          <p className="font-medium text-sm">{cert.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {cert.issuer}
                            {cert.hours && ` • ${cert.hours}h`}
                          </p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors ml-2" />
                      </Link>
                    </motion.div>
                  ))}
              </div>

              {/* Right Column Certifications */}
              <div className="space-y-3">
                {personalInfo.certifications
                  .slice(Math.ceil(personalInfo.certifications.length / 2))
                  .map((cert, index) => (
                    <motion.div
                      key={`${cert.name}-${index + Math.ceil(personalInfo.certifications.length / 2)}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={
                        isInView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: 20 }
                      }
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                    >
                      <Link
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 bg-background border border-border rounded-lg hover:border-primary hover:bg-accent transition-all group"
                      >
                        <div className="flex-1">
                          <p className="font-medium text-sm">{cert.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {cert.issuer}
                            {cert.hours && ` • ${cert.hours}h`}
                          </p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors ml-2" />
                      </Link>
                    </motion.div>
                  ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

