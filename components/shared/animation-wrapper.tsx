"use client"

import { motion, TargetAndTransition, Transition, VariantLabels, Variants, ViewportOptions } from "framer-motion"
import React from "react"

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

export function AnimatedDiv({ children, className, initial, animate,whileInView,viewport,transition,whileHover }: { children: React.ReactNode, className?: string, initial: TargetAndTransition | boolean | VariantLabels, animate?: TargetAndTransition | boolean | VariantLabels,whileInView?: TargetAndTransition | undefined | VariantLabels,viewport?: ViewportOptions | undefined,transition?: Transition<any>|undefined,whileHover?: TargetAndTransition |  VariantLabels|undefined  }) {
    return (
        <motion.div
            className={className}
            initial={initial}
            animate={animate}
            whileInView={whileInView}
            viewport={viewport}
            transition={transition}
            whileHover={whileHover}
        >
            {children}
        </motion.div>
    )
}


export function AnimatedHeading({ children, className, variants }: { children: React.ReactNode, className?: string, variants?: Variants }) {
    return (
        <motion.h1 className={className} variants={variants || itemVariants}>
            {children}
        </motion.h1>
    )
}
export function AnimatedText({ children, className, variants }: { children: React.ReactNode, className?: string, variants?: Variants }) {
    return (
        <motion.p className={className} variants={variants || itemVariants}>
            {children}
        </motion.p>
    )
}