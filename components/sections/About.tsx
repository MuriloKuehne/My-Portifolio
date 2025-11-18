"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { personalInfo } from "@/lib/config";
import { ExternalLink, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.onerror = () => setImageError(true);
    img.src = "/profile-photo.jpg";
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          About Me
        </motion.h2>

        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Left Column - Photo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start justify-center lg:justify-start w-full"
            >
              <motion.div
                className="relative w-full max-w-xs mx-auto lg:max-w-full lg:mx-0 aspect-[2/3] min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden border-4 border-border shadow-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 transition-smooth"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {!imageError ? (
                  <Image
                    src="/profile-photo.jpg"
                    alt={personalInfo.name}
                    fill
                    className="object-cover object-center object-top"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5">
                    <User className="w-24 h-24 text-primary/40" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
              </motion.div>
            </motion.div>

            {/* Middle Column - Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4 sm:space-y-5"
            >
              {personalInfo.aboutParagraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-base sm:text-lg text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
              <motion.p
                className="text-sm sm:text-base text-muted-foreground mt-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {personalInfo.birthYear}, {personalInfo.citizenship}
              </motion.p>
            </motion.div>

            {/* Right Column - Skills and Languages Box */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="border border-border rounded-lg p-4 sm:p-6 bg-card space-y-6 sm:space-y-8 transition-smooth hover:border-primary/50 hover:shadow-lg"
            >
              {/* Skills Section */}
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {personalInfo.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-lg text-sm sm:text-base font-medium border border-primary/20 cursor-pointer transition-smooth"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "hsl(var(--primary) / 0.2)",
                        borderColor: "hsl(var(--primary) / 0.4)",
                        boxShadow: "0 0 12px hsl(var(--primary) / 0.3)",
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Languages Section */}
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Languages</h3>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {personalInfo.languages.map((lang, index) => (
                    <motion.div
                      key={lang.name}
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-background border border-border rounded-lg cursor-pointer transition-smooth"
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: -20 }
                      }
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--accent))", borderColor: "hsl(var(--primary) / 0.5)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-xl sm:text-2xl">{lang.flag}</span>
                      <span className="font-medium text-sm sm:text-base">{lang.name}</span>
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
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="border border-border rounded-lg p-4 sm:p-6 bg-card transition-smooth hover:border-primary/50 hover:shadow-lg"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center">Certifications</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
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
                        className="flex items-center justify-between p-3 bg-background border border-border rounded-lg hover:border-primary hover:bg-accent transition-smooth group"
                      >
                        <div className="flex-1">
                          <p className="font-medium text-sm">{cert.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {cert.issuer}
                            {"hours" in cert && cert.hours ? ` • ${cert.hours}h` : ""}
                          </p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:scale-110 transition-smooth ml-2" />
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
                        className="flex items-center justify-between p-3 bg-background border border-border rounded-lg hover:border-primary hover:bg-accent transition-smooth group"
                      >
                        <div className="flex-1">
                          <p className="font-medium text-sm">{cert.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {cert.issuer}
                            {"hours" in cert && cert.hours ? ` • ${cert.hours}h` : ""}
                          </p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:scale-110 transition-smooth ml-2" />
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

