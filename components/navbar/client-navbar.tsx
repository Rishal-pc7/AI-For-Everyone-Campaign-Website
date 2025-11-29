"use client"

import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import {  Menu, X } from "lucide-react"

export default function ClientNavbar({ children }: { children: React.ReactNode }) {
    const { language, setLanguage, t } = useLanguage()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navLinks = [
        { label: t("nav.about"), href: "#about" },
        { label: t("nav.programs"), href: "#programs" },
        { label: t("nav.partners"), href: "#partners" },
    ]

    return (
        <>
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Slot */}
                    <div className="shrink-0">
                        {children}
                    </div>

                    {/* Language Toggle & CTA - Right side */}
                    <div className="hidden md:flex items-center gap-4 ml-auto">
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

                        <a href="#partners"  className="px-6 py-2 rounded-lg border-2 border-transparent bg-linear-to-r from-secondary to-primary text-background font-semibold hover:shadow-lg hover:shadow-secondary/50 transition-all">
                            {t("nav.cta")}
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-background border-b border-border pb-4 space-y-4 pt-4 rounded-lg mt-2">
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
                    </div>
                )}
            </div>

            
        </>
    )
}
