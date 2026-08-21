import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SectionDivider = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="flex items-center justify-center py-4">
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: "100%" } : { width: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-md h-px relative overflow-visible"
      >
        {/* Main line */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        {/* Center dot */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_hsl(187_80%_48%/0.6)]"
        />

        {/* Side dots */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-primary/50"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-primary/50"
        />
      </motion.div>
    </div>
  );
};

export default SectionDivider;
