"use client"

import { motion, Variants } from "framer-motion"

interface StatCardProps {
    variants: Variants
}

export function StatCard({ variants }: StatCardProps) {
    return (
        <motion.div
            variants={variants}
            className="glass-card glow-hover rounded-3xl p-6 md:p-8 relative overflow-hidden group border border-white/10 hover:border-purple-500/50 transition-colors duration-300"
        >
            <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-bold bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(147,51,234,0.6)] mb-2">
                    100,000+
                </div>
                <p className="text-lg md:text-xl text-muted-foreground">Learners Across Kerala</p>
            </div>
        </motion.div>
    )
}
