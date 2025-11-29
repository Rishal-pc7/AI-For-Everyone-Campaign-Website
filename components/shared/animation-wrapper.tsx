"use client"
import { useId } from 'react';
import { motion, MotionStyle, TargetAndTransition, Transition, VariantLabels, Variants, ViewportOptions } from "framer-motion"
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
export function AnimatedItem({ children, className, variants, layout, layoutId }: { children: React.ReactNode, className?: string, variants?: Variants, layout?: boolean | "position" | "size" | "preserve-aspect", layoutId?: string }) {
    return (
        <motion.div className={className} variants={variants || itemVariants} layout={layout} layoutId={layoutId}>
            {children}
        </motion.div>
    )
}
export function AnimatedDiv({ children, className, initial, animate, whileInView, viewport, transition, whileHover, style }: { children: React.ReactNode, className?: string, initial?: TargetAndTransition | boolean | VariantLabels, animate?: TargetAndTransition | boolean | VariantLabels, whileInView?: TargetAndTransition | undefined | VariantLabels, viewport?: ViewportOptions | undefined, transition?: Transition<any> | undefined, whileHover?: TargetAndTransition | VariantLabels | undefined, style?: MotionStyle | undefined }) {
    return (
        <motion.div
            className={className}
            initial={initial}
            animate={animate}
            whileInView={whileInView}
            viewport={viewport}
            transition={transition}
            whileHover={whileHover}
            style={style}
        >
            {children}
        </motion.div>
    )
}
export function AnimatedHeading({ children, className, variants, initial, animate, whileInView, transition }: { children: React.ReactNode, className?: string, variants?: Variants, initial?: TargetAndTransition | boolean | VariantLabels, animate?: TargetAndTransition | boolean | VariantLabels, whileInView?: TargetAndTransition | undefined | VariantLabels, transition?: Transition<any> | undefined }) {
    return (
        <motion.h1 className={className} variants={variants || itemVariants} initial={initial} animate={animate} whileInView={whileInView} transition={transition}>
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
export function AnimatedSvg({ d, initial, animate, whileInView, transition, stroke, strokeWidth, strokeDasharray, strokeLinecap, filter }: { d: string, initial?: TargetAndTransition | boolean | VariantLabels, animate?: TargetAndTransition | boolean | VariantLabels, whileInView?: TargetAndTransition | undefined | VariantLabels, transition?: Transition<any> | undefined, stroke?: string, strokeWidth?: number | string | undefined, strokeDasharray?: number | string | undefined, strokeLinecap?: "inherit" | "butt" | "round" | "square" | undefined, filter?: string | undefined }) {
    return (
        <motion.path
            d={d}
            fill={"none"}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap={strokeLinecap}
            strokeDasharray={strokeDasharray}
            filter={filter}
            initial={initial}
            animate={animate}
            whileInView={whileInView}
            transition={transition}

        />
    )
}

export function AnimatedButton({ children, className, initial, animate, whileInView, transition, onClick, whileTap, onTouchEnd, onTouchStart, onFocus, onBlur }: { children: React.ReactNode, className?: string, initial?: TargetAndTransition | boolean | VariantLabels, animate?: TargetAndTransition | boolean | VariantLabels, whileInView?: TargetAndTransition | undefined | VariantLabels, transition?: Transition<any> | undefined, whileTap?: TargetAndTransition | VariantLabels, onTouchEnd?: React.TouchEventHandler<HTMLButtonElement> | undefined, onTouchStart?: React.TouchEventHandler<HTMLButtonElement> | undefined, onFocus?: React.FocusEventHandler<HTMLButtonElement> | undefined, onBlur?: React.FocusEventHandler<HTMLButtonElement> | undefined, onClick: (id: string) => void | React.MouseEventHandler<HTMLButtonElement> }) {
    return (
        <motion.button className={className} initial={initial} animate={animate} whileInView={whileInView} transition={transition}
            whileTap={whileTap}
            suppressHydrationWarning
            onClick={() => onClick("")}
            onTouchStart={onTouchStart}
            onFocus={onFocus}
            onBlur={onBlur}
            onTouchEnd={onTouchEnd}
        >
            {children}
        </motion.button>
    )
}
