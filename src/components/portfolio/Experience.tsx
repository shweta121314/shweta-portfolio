import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiBriefcase, FiBook, FiMapPin } from "react-icons/fi";
import { EXPERIENCE, EDUCATION } from "@/config/constants";
import type { Easing } from "framer-motion";

const Experience = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container-custom"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
          <span className="text-primary mono-text">04.</span>
          <h2 className="text-xl md:text-3xl font-bold text-foreground">
            Experience & Education
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Work Experience */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base md:text-lg font-semibold text-foreground mb-5 md:mb-8 flex items-center gap-2">
              <FiBriefcase className="text-primary" />
              Work Experience
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-8">
                {EXPERIENCE.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative pl-12"
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-2.5 top-1.5 w-3 h-3 rounded-full border-2 ${
                        exp.current
                          ? "bg-primary border-primary shadow-[0_0_8px_hsl(187_80%_48%/0.6)]"
                          : "bg-background border-muted-foreground/40"
                      }`}
                    />

                    <div className="glass-card p-5 rounded-xl hover-lift">
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {exp.role}
                          </h4>
                          <p className="text-primary text-sm font-medium">
                            {exp.company}
                          </p>
                        </div>
                        {exp.current && (
                          <span className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full border border-primary/30 mono-text">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 mt-3 text-muted-foreground text-xs mono-text">
                        <span>{exp.period}</span>
                        <span className="flex items-center gap-1">
                          <FiMapPin size={12} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base md:text-lg font-semibold text-foreground mb-5 md:mb-8 flex items-center gap-2">
              <FiBook className="text-primary" />
              Education
            </h3>

            <div className="relative pl-12">
              {/* Timeline dot */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
              <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full border-2 bg-background border-muted-foreground/40" />

              <div className="glass-card p-5 rounded-xl hover-lift">
                <h4 className="font-semibold text-foreground">
                  {EDUCATION.degree}
                </h4>
                <p className="text-primary text-sm font-medium mt-1">
                  {EDUCATION.institution}
                </p>
                <p className="text-muted-foreground text-xs mono-text mt-3">
                  {EDUCATION.period}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
