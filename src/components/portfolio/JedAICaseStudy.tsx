import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiCpu, FiLayers, FiServer, FiShield, FiActivity, FiDatabase } from "react-icons/fi";
import { JEDAI } from "@/config/constants";
import type { Easing } from "framer-motion";

const JedAICaseStudy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const easeOut: Easing = [0.25, 0.46, 0.45, 0.94];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
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

  const layerIcons: Record<string, typeof FiCpu> = {
    Frontend: FiLayers,
    Backend: FiServer,
    "AI / ML": FiCpu,
    Infrastructure: FiDatabase,
    Security: FiShield,
  };

  return (
    <section id="jedai" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.03] rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container-custom relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
          <span className="text-primary mono-text">05.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Case Study
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        {/* Title Card */}
        <motion.div
          variants={itemVariants}
          className="glass-card rounded-2xl p-8 md:p-10 mb-10 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-fuchsia-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <motion.span
                className="text-4xl"
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                🧠
              </motion.span>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  {JEDAI.title}
                </h3>
                <p className="text-primary mono-text text-sm">{JEDAI.subtitle}</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4 max-w-3xl">
              {JEDAI.description}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full">
              <FiActivity className="text-primary" size={14} />
              <span className="text-primary text-xs mono-text">Currently in active development</span>
            </div>
          </div>
        </motion.div>

        {/* Architecture */}
        <motion.div variants={itemVariants} className="mb-10">
          <h4 className="text-lg font-semibold text-foreground mb-5 flex items-center gap-2">
            <FiServer className="text-primary" />
            Microservices Architecture
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {JEDAI.architecture.map((service, i) => (
              <motion.div
                key={service.service}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -4, boxShadow: "0 0 20px hsl(187 80% 48% / 0.1)" }}
                className="glass-card p-4 rounded-xl border border-border hover:border-primary/30 transition-all duration-300"
              >
                <p className="text-primary mono-text text-xs font-medium mb-1">
                  {service.service}
                </p>
                <p className="text-foreground text-sm font-medium mb-2">
                  {service.role}
                </p>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {service.stack}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Layers */}
        <motion.div variants={itemVariants} className="mb-10">
          <h4 className="text-lg font-semibold text-foreground mb-5 flex items-center gap-2">
            <FiLayers className="text-primary" />
            Tech Stack
          </h4>
          <div className="space-y-4">
            {JEDAI.techLayers.map((layer, i) => {
              const Icon = layerIcons[layer.layer] || FiCpu;
              return (
                <motion.div
                  key={layer.layer}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="glass-card p-4 rounded-xl flex flex-col md:flex-row md:items-center gap-3"
                >
                  <div className="flex items-center gap-2 min-w-[140px]">
                    <div className="p-1.5 rounded-md bg-primary/10">
                      <Icon className="text-primary" size={16} />
                    </div>
                    <span className="text-foreground font-medium text-sm">{layer.layer}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {layer.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs mono-text bg-secondary/80 text-foreground/80 rounded-md border border-border/50 hover:border-primary/40 hover:text-primary transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div variants={itemVariants} className="mb-10">
          <h4 className="text-lg font-semibold text-foreground mb-5 flex items-center gap-2">
            <FiActivity className="text-primary" />
            Key Features
          </h4>
          <div className="grid md:grid-cols-2 gap-3">
            {JEDAI.keyFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ delay: 0.5 + i * 0.06 }}
                whileHover={{ x: 4 }}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/30 transition-colors duration-200"
              >
                <span className="text-primary mt-0.5 text-lg">▹</span>
                <span className="text-muted-foreground text-sm leading-relaxed">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ML Models */}
        <motion.div variants={itemVariants}>
          <h4 className="text-lg font-semibold text-foreground mb-5 flex items-center gap-2">
            <FiCpu className="text-primary" />
            ML Models Trained & Deployed
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {JEDAI.mlModels.map((model, i) => (
              <motion.div
                key={model.model}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                whileHover={{ y: -4, boxShadow: "0 0 25px hsl(187 80% 48% / 0.12)" }}
                className="glass-card p-4 rounded-xl text-center hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <FiCpu className="text-primary" size={18} />
                </div>
                <p className="text-foreground font-medium text-sm mb-1">{model.model}</p>
                <p className="text-primary mono-text text-xs mb-2">{model.architecture}</p>
                <p className="text-muted-foreground text-xs">{model.purpose}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default JedAICaseStudy;
