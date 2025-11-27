"use client"

import { useLanguage } from "@/context/language-context"

export default function NavLinks() {
    const { t } = useLanguage()

    const navLinks = [
        { label: t("nav.about"), href: "#about" },
        { label: t("nav.programs"), href: "#programs" },
        { label: t("nav.partners"), href: "#partners" },
    ]

    return (
        <nav className="fixed top-3 z-50 px-4 pt-4 left-1/2 -translate-x-1/2">
            <div className="max-w-7xl mx-auto">
                {/* Dynamic Island - Fixed Navigation Bar */}
                <div className="hidden md:flex mx-auto w-fit items-center gap-8 px-8 py-3 bg-background/40 backdrop-blur-lg border border-secondary/30 rounded-3xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-muted-foreground hover:text-secondary transition-colors text-sm font-medium"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}
