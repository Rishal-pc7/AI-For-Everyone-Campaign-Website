"use client"

import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.programs"), href: "#programs" },
    { label: t("nav.partners"), href: "#partners" },
  ]

  return (
    <>
      {/* Static Header */}
      <header className="pt-4 px-4 relative z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              className="shrink-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-2xl font-bold bg-linear-to-r from-secondary to-primary bg-clip-text text-transparent">
                AI For Everyone
              </div>
            </motion.div>

            {/* Language Toggle & CTA - Right side */}
            <motion.div
              className="hidden md:flex items-center gap-4 ml-auto"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 bg-muted/50 rounded-full p-1 border border-border">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1 rounded-full transition-all ${language === "en"
                    ? "bg-secondary text-background font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("ml")}
                  className={`px-3 py-1 rounded-full transition-all ${language === "ml"
                    ? "bg-primary text-background font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  ML
                </button>
              </div>

              <button className="px-6 py-2 rounded-lg border-2 border-transparent bg-linear-to-r from-secondary to-primary text-background font-semibold hover:shadow-lg hover:shadow-secondary/50 transition-all">
                {t("nav.cta")}
              </button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden bg-background border-b border-border pb-4 space-y-4 pt-4 rounded-lg mt-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="block text-muted-foreground hover:text-secondary">
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-2 bg-muted/50 rounded-full p-1 border border-border w-fit">
                <button
                  onClick={() => {
                    setLanguage("en")
                    setMobileMenuOpen(false)
                  }}
                  className={`px-3 py-1 rounded-full transition-all ${language === "en" ? "bg-secondary text-background font-semibold" : "text-muted-foreground"
                    }`}
                >
                  EN
                </button>
                <button
                  onClick={() => {
                    setLanguage("ml")
                    setMobileMenuOpen(false)
                  }}
                  className={`px-3 py-1 rounded-full transition-all ${language === "ml" ? "bg-primary text-background font-semibold" : "text-muted-foreground"
                    }`}
                >
                  ML
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </header>

      <nav className="fixed top-0 z-50 px-4 pt-4 left-1/2 -translate-x-1/2">
        <div className="max-w-7xl mx-auto">
          {/* Dynamic Island - Fixed Navigation Bar */}
          <motion.div
            className="hidden md:flex mx-auto w-fit items-center gap-8 px-8 py-3 bg-background/40 backdrop-blur-lg border border-secondary/30 rounded-3xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-secondary transition-colors text-sm font-medium"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </nav>
    </>
  )
}
