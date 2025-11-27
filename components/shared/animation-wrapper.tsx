"use client"

import { motion, Variants } from "framer-motion"

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
}

export function AnimationWrapper({ children, className, variants }: { children: React.ReactNode, className?: string, variants?: Variants }) {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants || containerVariants}
        >
            {children}
        </motion.div>
    )
}

export function AnimatedItem({ children, className, variants }: { children: React.ReactNode, className?: string, variants?: Variants }) {
    return (
        <motion.div className={className} variants={variants || itemVariants}>
            {children}
        </motion.div>
    )
}
