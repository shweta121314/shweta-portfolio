import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiMail, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import { PERSONAL_INFO } from "@/config/constants";
import type { Easing } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
    window.location.href = mailtoLink;
  };

  const socialLinks = [
    {
      name: "Email",
      icon: FiMail,
      href: `mailto:${PERSONAL_INFO.email}`,
      label: PERSONAL_INFO.email,
    },
    {
      name: "GitHub",
      icon: FiGithub,
      href: PERSONAL_INFO.github,
      label: "github.com/shweta121314",
    },
    {
      name: "LinkedIn",
      icon: FiLinkedin,
      href: PERSONAL_INFO.linkedin,
      label: "linkedin.com/in/shweta-pallewar",
    },
  ];

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container-custom"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <span className="text-primary mono-text text-sm">04. What's Next?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, my inbox is always open!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="glass-card p-6 md:p-8 rounded-xl space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground resize-none"
                placeholder="Your message..."
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors glow-effect"
            >
              <FiSend size={18} />
              Send Message
            </motion.button>
          </motion.form>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Connect With Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <link.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-foreground font-medium text-sm">
                        {link.name}
                      </p>
                      <p className="text-muted-foreground text-xs truncate max-w-[200px]">
                        {link.label}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl text-center">
              <p className="text-muted-foreground text-sm mb-4">
                Prefer email?
              </p>
              <motion.a
                href={`mailto:${PERSONAL_INFO.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
              >
                Say Hello
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
