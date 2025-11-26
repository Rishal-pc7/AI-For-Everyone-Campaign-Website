"use client"

import { motion, Variants } from "framer-motion"
import { Brain, Hand, Heart } from "lucide-react"

interface PhilosophyCardProps {
    variants: Variants
}

export function PhilosophyCard({ variants }: PhilosophyCardProps) {
    return (
        <motion.div
            variants={variants}
            className="md:col-span-2 glass-card glow-hover rounded-3xl p-6 md:p-8 relative overflow-hidden border border-white/10 hover:border-purple-500/50 transition-colors duration-300"
        >
            <div className="absolute inset-0 bg-linear-to-r from-purple-500/5 via-transparent to-purple-500/5" />
            <div className="relative z-10 flex justify-around items-center h-full">
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="flex flex-col items-center gap-3"
                >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl glass-card flex items-center justify-center shadow-[0_0_30px_rgba(147,51,234,0.4)]">
                        <Brain className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />
                    </div>
                    <span className="text-sm md:text-base text-muted-foreground font-medium">Understand</span>
                </motion.div>

                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.3,
                    }}
                    className="flex flex-col items-center gap-3"
                >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl glass-card flex items-center justify-center shadow-[0_0_30px_rgba(147,51,234,0.4)]">
                        <Hand className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />
                    </div>
                    <span className="text-sm md:text-base text-muted-foreground font-medium">Build</span>
                </motion.div>

                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.6,
                    }}
                    className="flex flex-col items-center gap-3"
                >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl glass-card flex items-center justify-center shadow-[0_0_30px_rgba(147,51,234,0.4)]">
                        <Heart className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />
                    </div>
                    <span className="text-sm md:text-base text-muted-foreground font-medium">Create</span>
                </motion.div>
            </div>
        </motion.div>
    )
}
