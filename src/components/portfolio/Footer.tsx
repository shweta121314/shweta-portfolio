import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import { PERSONAL_INFO } from "@/config/constants";

const Footer = () => {
  const socialLinks = [
    { icon: FiGithub, href: PERSONAL_INFO.github, label: "GitHub" },
    { icon: FiLinkedin, href: PERSONAL_INFO.linkedin, label: "LinkedIn" },
    { icon: FiMail, href: `mailto:${PERSONAL_INFO.email}`, label: "Email" },
  ];

  return (
    <footer className="py-8 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Credit */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <p className="text-muted-foreground text-sm mono-text">
              Designed & Built by{" "}
              <span className="text-primary">{PERSONAL_INFO.firstName}</span>
            </p>
            <p className="text-muted-foreground/60 text-xs mt-2 flex items-center justify-center gap-1">
              Made with <FiHeart className="text-primary" size={12} /> using React
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
