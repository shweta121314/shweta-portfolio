import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiDownload, FiArrowDown } from "react-icons/fi";
import { PERSONAL_INFO } from "@/config/constants";
import type { Easing } from "framer-motion";

const Hero = () => {
  const easeOut: Easing = [0.25, 0.46, 0.45, 0.94];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-custom relative z-10 pt-20"
      >
        <motion.p
          variants={itemVariants}
          className="text-primary mono-text text-sm md:text-base mb-4"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-2"
        >
          {PERSONAL_INFO.name}.
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6"
        >
          I build things for the web.
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-muted-foreground text-base md:text-lg max-w-xl mb-10 leading-relaxed"
        >
          I'm a{" "}
          <span className="text-primary font-medium">{PERSONAL_INFO.role}</span>{" "}
          with {PERSONAL_INFO.experience} years of experience specializing in
          building exceptional digital experiences. Currently focused on
          creating responsive, user-friendly applications with React and modern
          web technologies.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors glow-effect"
          >
            View Projects
            <FiArrowDown className="animate-bounce" />
          </motion.a>

          <motion.a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-primary text-primary rounded-md font-medium flex items-center gap-2 hover:bg-primary/10 transition-colors"
          >
            <FiDownload />
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-6">
          <motion.a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, color: "hsl(187 80% 48%)" }}
            className="text-muted-foreground transition-colors"
          >
            <FiGithub size={22} />
          </motion.a>
          <motion.a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, color: "hsl(187 80% 48%)" }}
            className="text-muted-foreground transition-colors"
          >
            <FiLinkedin size={22} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
