import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";
import { PROJECTS } from "@/config/constants";
import type { Easing } from "framer-motion";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const easeOut: Easing = [0.25, 0.46, 0.45, 0.94];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const otherProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container-custom"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-12">
          <span className="text-primary mono-text">03.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Featured Projects
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-16 md:space-y-24 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className={`grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 1 ? "md:text-right" : ""
              }`}
            >
              {/* Project Image */}
              <div
                className={`md:col-span-7 ${
                  index % 2 === 1 ? "md:order-2 md:col-start-6" : ""
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative group rounded-lg overflow-hidden"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 via-primary/10 to-transparent glass-card flex items-center justify-center">
                    <FiFolder className="text-primary/40" size={64} />
                  </div>
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
                </motion.div>
              </div>

              {/* Project Content */}
              <div
                className={`md:col-span-6 md:row-start-1 ${
                  index % 2 === 1
                    ? "md:col-start-1 md:text-left"
                    : "md:col-start-6 md:text-right"
                }`}
              >
                <p className="text-primary mono-text text-sm mb-1">
                  Featured Project
                </p>
                <p className="text-muted-foreground text-xs mb-2">
                  {project.company}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>

                <div className="glass-card p-5 md:p-6 rounded-lg mb-4 text-left">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <ul
                  className={`flex flex-wrap gap-3 mb-6 text-sm mono-text text-muted-foreground ${
                    index % 2 === 1 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {project.techStack.map((tech) => (
                    <li key={tech} className="text-xs">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div
                  className={`flex gap-4 ${
                    index % 2 === 1 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    <FiGithub size={20} />
                  </motion.a>
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      <FiExternalLink size={20} />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <motion.h3
              variants={itemVariants}
              className="text-xl font-semibold text-foreground text-center mb-8"
            >
              Other Noteworthy Projects
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 rounded-xl hover-lift"
                >
                  <div className="flex items-start justify-between mb-4">
                    <FiFolder className="text-primary" size={40} />
                    <div className="flex gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <FiGithub size={20} />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <FiExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-xs mb-1">{project.company}</p>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-2 text-xs mono-text text-muted-foreground">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </motion.div>
    </section>
  );
};

export default Projects;
