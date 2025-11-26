"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"

interface KeralaMapCardProps {
    keralaMapUrl: string
    variants: Variants
}

export function KeralaMapCard({ keralaMapUrl, variants }: KeralaMapCardProps) {
    return (
        <motion.div
            variants={variants}
            className="md:col-span-2 md:row-span-2 glass-card glow-hover rounded-3xl p-8 md:p-12 relative overflow-hidden group border border-white/10 hover:border-purple-500/50 transition-colors duration-300"
        >
            <div className="absolute inset-0 opacity-30">
                <Image
                    src={keralaMapUrl}
                    alt="Kerala Map"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 via-transparent to-transparent" />

            {/* Glowing connection nodes */}

            <div className="relative z-10">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                    Future Makers
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                    Empowering Kerala's next generation of innovators, creators, and changemakers
                </p>
            </div>
        </motion.div>
    )
}
