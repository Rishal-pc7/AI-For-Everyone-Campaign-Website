"use client"

import { AnimatedItem } from "@/components/shared/animation-wrapper"
import { motion } from "framer-motion"

export default function HeroContent() {
    return (
        <AnimatedItem className="space-y-3 order-2 lg:order-1">
            <motion.h1
                className="text-4xl md:text-6xl font-bold font-heading leading-tight"
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.1 } },
                }}
            >
                <span className="bg-linear-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                    From Digital Literacy to AI Fluency
                </span>
            </motion.h1>

            <motion.p
                className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
                }}
            >
                We are demystifying Artificial Intelligence for 35 million people, turning consumers into creators and observers into innovators.
            </motion.p>
        </AnimatedItem>
    )
}
