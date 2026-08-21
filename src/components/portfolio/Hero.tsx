import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiGithub, FiLinkedin, FiDownload, FiArrowDown } from "react-icons/fi";
import { PERSONAL_INFO } from "@/config/constants";
import ParticleBackground from "./ParticleBackground";
import type { Easing } from "framer-motion";

const useTypingEffect = (texts: string[], typingSpeed = 80, deletingSpeed = 50, pauseDuration = 2000) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentFullText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
};

const Hero = () => {
  const easeOut: Easing = [0.25, 0.46, 0.45, 0.94];

  const typingTexts = [
    "I build things for the web.",
    "I create responsive UIs.",
    "I craft digital experiences.",
  ];
  const typedText = useTypingEffect(typingTexts);

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
      {/* Particle Canvas Background */}
      <ParticleBackground />

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl"
        />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
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
          {typedText}
          <span className="inline-block w-[3px] h-[0.8em] bg-primary ml-1 animate-blink align-middle" />
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
            whileHover={{ y: -5, scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
          >
            <FiGithub size={22} />
          </motion.a>
          <motion.a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
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
