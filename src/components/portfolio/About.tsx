import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ABOUT_ME, PERSONAL_INFO } from "@/config/constants";
import type { Easing } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  isInView: boolean;
}

const AnimatedCounter = ({ target, suffix = "", isInView }: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, target, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.round(latest));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, target, motionValue]);

  return (
    <span className="text-3xl font-bold text-gradient">
      {displayValue}{suffix}
    </span>
  );
};

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
        <motion.div variants={itemVariants} className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
          <span className="text-primary mono-text">01.</span>
          <h2 className="text-xl md:text-3xl font-bold text-foreground">
            About Me
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <motion.div variants={itemVariants} className="md:col-span-2 space-y-4 md:space-y-6 order-2 md:order-1">
            {ABOUT_ME.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                className="text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: highlightText(paragraph) }}
              />
            ))}

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 0 25px hsl(187 80% 48% / 0.12)" }}
                className="glass-card p-4 rounded-lg text-center group hover:border-primary/30 transition-all duration-300"
              >
                <AnimatedCounter target={2} suffix="+" isInView={isInView} />
                <p className="text-muted-foreground text-sm mt-1 group-hover:text-foreground transition-colors">
                  Years Experience
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 0 25px hsl(187 80% 48% / 0.12)" }}
                className="glass-card p-4 rounded-lg text-center group hover:border-primary/30 transition-all duration-300"
              >
                <AnimatedCounter target={4} suffix="+" isInView={isInView} />
                <p className="text-muted-foreground text-sm mt-1 group-hover:text-foreground transition-colors">
                  Projects Completed
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Profile Image with reveal animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
            animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.8, rotateY: 15 }}
            transition={{ duration: 0.8, delay: 0.4, ease: easeOut }}
            className="relative group flex items-center justify-center order-1 md:order-2"
          >
            <div className="relative">
              <motion.div
                className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-primary/30 shadow-[0_0_30px_hsl(187_80%_48%/0.15)]"
              >
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt={`${PERSONAL_INFO.name} - ${PERSONAL_INFO.role}`}
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border-2 border-dashed border-primary/20 animate-[spin_20s_linear_infinite]" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
