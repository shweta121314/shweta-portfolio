import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ABOUT_ME, PERSONAL_INFO } from "@/config/constants";
import type { Easing } from "framer-motion";

const About = () => {
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

  const highlightedTerms = [
    "React",
    "JavaScript",
    "SCSS",
    "REST APIs",
    "production-level applications",
  ];

  const highlightText = (text: string) => {
    let result = text;
    highlightedTerms.forEach((term) => {
      result = result.replace(
        new RegExp(`(${term})`, "gi"),
        '<span class="text-primary">$1</span>'
      );
    });
    return result;
  };

  return (
    <section id="about" className="section-padding" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container-custom"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-12">
          <span className="text-primary mono-text">01.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            About Me
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          <motion.div variants={itemVariants} className="md:col-span-2 space-y-6">
            {ABOUT_ME.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: highlightText(paragraph) }}
              />
            ))}

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              <div className="glass-card p-4 rounded-lg text-center hover-lift">
                <p className="text-3xl font-bold text-gradient">
                  {PERSONAL_INFO.experience}
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  Years Experience
                </p>
              </div>
              <div className="glass-card p-4 rounded-lg text-center hover-lift">
                <p className="text-3xl font-bold text-gradient">4+</p>
                <p className="text-muted-foreground text-sm mt-1">
                  Projects Completed
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            <div className="relative">
              {/* Profile Image Placeholder */}
              <div className="aspect-square rounded-lg overflow-hidden glass-card">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/30">
                    {PERSONAL_INFO.firstName[0]}
                  </div>
                </div>
              </div>
              {/* Border Effect */}
              <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
