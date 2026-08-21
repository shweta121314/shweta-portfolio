import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SKILLS } from "@/config/constants";
import { FiCode, FiPackage, FiTool } from "react-icons/fi";
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
    className="space-y-2"
  >
    <div className="flex justify-between text-sm">
      <span className="text-foreground font-medium">{name}</span>
      <span className="text-primary mono-text">{level}%</span>
    </div>
    <div className="h-2 bg-secondary rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{ background: "var(--gradient-primary)" }}
      />
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
        staggerChildren: 0.1,
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

  const skillCategories = [
    { title: "Frontend", icon: FiCode, skills: SKILLS.frontend },
    { title: "Libraries", icon: FiPackage, skills: SKILLS.libraries },
    { title: "Tools", icon: FiTool, skills: SKILLS.tools },
  ];

  return (
    <section id="skills" className="section-padding bg-card/30" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container-custom"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-12">
          <span className="text-primary mono-text">02.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Skills & Technologies
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass-card p-6 rounded-xl hover-lift"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className="text-primary" size={20} />
                </div>
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
                    delay={categoryIndex * 0.1 + skillIndex * 0.05}
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
