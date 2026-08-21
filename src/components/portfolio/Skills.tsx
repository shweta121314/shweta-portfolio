import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SKILLS } from "@/config/constants";
import { FiCode, FiPackage, FiTool, FiCpu } from "react-icons/fi";
import type { Easing } from "framer-motion";

interface SkillBarProps {
  name: string;
  level: number;
  delay: number;
  isInView: boolean;
}

const SkillBar = ({ name, level, delay, isInView }: SkillBarProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
    transition={{ duration: 0.5, delay }}
    className="space-y-2 group/skill"
  >
    <div className="flex justify-between text-sm">
      <span className="text-foreground font-medium group-hover/skill:text-primary transition-colors">
        {name}
      </span>
      <motion.span
        className="text-primary mono-text"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: delay + 0.5 }}
      >
        {level}%
      </motion.span>
    </div>
    <div className="h-2 bg-secondary rounded-full overflow-hidden relative">
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1.2, delay: delay + 0.2, ease: "easeOut" }}
        className="h-full rounded-full relative overflow-hidden"
        style={{ background: "var(--gradient-primary)" }}
      >
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          animate={isInView ? { x: "200%" } : { x: "-100%" }}
          transition={{ duration: 1.5, delay: delay + 1, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  </motion.div>
);

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const easeOut: Easing = [0.25, 0.46, 0.45, 0.94];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        ease: easeOut,
      },
    }),
  };

  const skillCategories = [
    { title: "Frontend", icon: FiCode, skills: SKILLS.frontend },
    { title: "Libraries", icon: FiPackage, skills: SKILLS.libraries },
    { title: "Tools", icon: FiTool, skills: SKILLS.tools },
    { title: "AI & DevOps", icon: FiCpu, skills: SKILLS.aiAndDevOps },
  ];

  return (
    <section id="skills" className="section-padding bg-card/30" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container-custom"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="text-primary mono-text">02.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Skills & Technologies
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              custom={categoryIndex}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{
                y: -8,
                boxShadow: "0 0 30px hsl(187 80% 48% / 0.15), 0 8px 32px hsl(222 47% 4% / 0.5)",
              }}
              className="glass-card p-6 rounded-xl transition-colors duration-300 hover:border-primary/40 relative group overflow-hidden"
            >
              {/* Hover glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <category.icon className="text-primary" size={20} />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={categoryIndex * 0.15 + skillIndex * 0.06}
                      isInView={isInView}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
