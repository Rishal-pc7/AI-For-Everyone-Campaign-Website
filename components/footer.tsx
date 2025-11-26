"use client"

import { useLanguage } from "@/context/language-context"
import { Mail, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <motion.footer
      className="bg-card/50 border-t border-border py-12 px-4 mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
        >
          {/* Brand */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <div className="text-2xl font-bold bg-linear-to-r from-secondary to-primary bg-clip-text text-transparent mb-4">
              AI 4 All
            </div>
            <p className="text-muted-foreground text-sm">Making AI accessible for everyone in Kerala.</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <h4 className="text-foreground font-semibold mb-4">{t("footer.company")}</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a href="#" className="hover:text-secondary transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition">
                  Careers
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <h4 className="text-foreground font-semibold mb-4">{t("footer.resources")}</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <a href="#" className="hover:text-secondary transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition">
                  FAQ
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <h4 className="text-foreground font-semibold mb-4">{t("footer.contact")}</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-secondary transition">
                <Mail size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition">
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
          }}
        >
          <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>{t("footer.tagline")}</motion.p>
          <motion.p className="mt-4 md:mt-0" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            © 2025 AI for Everyone. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
