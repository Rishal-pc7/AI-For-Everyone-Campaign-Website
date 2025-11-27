"use client"

import { useLanguage } from "@/context/language-context"
import { AnimatedItem } from "@/components/shared/animation-wrapper"
import { motion } from "framer-motion"

export default function HeroContent() {
    const { t } = useLanguage()

    return (
        <AnimatedItem className="space-y-3 order-2 lg:order-1">
            <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.1 } },
                }}
            >
                <span className="bg-linear-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                    AI For Everyone
                </span>
            </motion.h1>

            <motion.p
                className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
                }}
            >
                {t("hero.subtext")}
            </motion.p>
        </AnimatedItem>
    )
}
