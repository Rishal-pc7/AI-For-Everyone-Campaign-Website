"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useVelocity } from "framer-motion";
import WhyNow from "./why-now";
export const WhyNowScrollClient = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });
    // Track scroll velocity for reactive glitch
    const scrollVelocity = useVelocity(scrollYProgress);
    const glitchIntensity = useTransform(scrollVelocity, [-1.5, 0, 1.5], [6, 0, 6]); // Reduced intensity for better readability
    // Check for reduced motion preference (this should ideally be a hook or context, but inline for now is fine)
    // We'll assume standard behavior for now to keep it simple, or use a safe default if window is undefined (SSR)
    const prefersReducedMotion = false; // Simplified for this step, can be enhanced later
    // Stage 1: The Legacy (0.0 - 0.3)
    const legacyOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3, 0.35], [1, 1, 1, 0]);
    // Stage 2: The Disruption (0.3 - 0.75) - Extended duration
    const disruptionOpacity = useTransform(scrollYProgress, [0.3, 0.4, 0.7, 0.8], [0, 1, 1, 0]);
    const glitchOffsetX = useTransform(glitchIntensity, (v) => Math.abs(v));
    // Stage 3: The Clarity (0.75 - 1.0) - Pushed back slightly
    const clarityOpacity = useTransform(scrollYProgress, [0.75, 0.85, 1], [0, 1, 1]);
    const glowIntensity = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 0.8]);
    return (
        <div ref={containerRef} className="h-[200vh] md:h-[300vh] relative bg-background">
            <WhyNow legacyOpacity={legacyOpacity}>
                {/* Stage 2: The Disruption - Heavy Glitch */}
                <motion.div
                    style={{
                        opacity: disruptionOpacity,
                        willChange: "transform, opacity, filter",
                    }}
                    className="absolute inset-0 flex items-center justify-center px-6 md:px-8"
                >
                    <div className="relative">
                        {/* Base text */}
                        <h1 className="text-4xl md:text-8xl font-black font-heading text-destructive text-center leading-tight select-none">
                            BUT THE WORLD SHIFTED.<br />
                            AUTOMATION, DEEPFAKES,<br />
                            OBSOLESCENCE.
                        </h1>
                        {/* Red channel glitch - using destructive color */}
                        <motion.div
                            style={{
                                x: glitchOffsetX,
                                filter: useTransform(glitchIntensity, (v) => `blur(${Math.abs(v) * 0.2}px)`),
                            }}
                            className="absolute inset-0 text-4xl md:text-8xl font-black font-heading text-destructive mix-blend-exclusion text-center leading-tight select-none pointer-events-none"
                        >
                            BUT THE WORLD SHIFTED.<br />
                            AUTOMATION, DEEPFAKES,<br />
                            OBSOLESCENCE.
                        </motion.div>
                        {/* Cyan channel glitch - using accent color */}
                        <motion.div
                            style={{
                                x: useTransform(glitchOffsetX, (v) => -v),
                                filter: useTransform(glitchIntensity, (v) => `blur(${Math.abs(v) * 0.2}px)`),
                            }}
                            className="absolute inset-0 text-4xl md:text-8xl font-black font-heading text-accent mix-blend-exclusion text-center leading-tight select-none pointer-events-none"
                        >
                            BUT THE WORLD SHIFTED.<br />
                            AUTOMATION, DEEPFAKES,<br />
                            OBSOLESCENCE.
                        </motion.div>
                    </div>
                </motion.div>
                {/* Stage 3: The Clarity - God Ray Glow */}
                <motion.div
                    style={{
                        opacity: clarityOpacity,
                        willChange: "transform, opacity",
                    }}
                    className="absolute inset-0 flex items-center justify-center px-6 md:px-8"
                >
                    <div className="relative">
                        {/* God ray glow background */}
                        <motion.div
                            style={{
                                opacity: glowIntensity,
                                scale: useTransform(glowIntensity, [0, 1], [0.8, 1.2]),
                            }}
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.5, 0.8, 0.5]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute inset-0 blur-3xl bg-primary/30 -z-10"
                        />
                        <h1 className="text-4xl md:text-8xl font-black font-heading text-primary text-center leading-tight relative z-10">
                            NOW: WE DEFINE<br />
                            RESPONSIBLE AI.
                        </h1>
                    </div>
                </motion.div>
                {/* Stage indicator */}
                <motion.div
                    className="fixed bottom-8 left-8 text-muted-foreground text-sm font-mono opacity-30"
                    style={{ opacity: useTransform(scrollYProgress, [0.9, 1], [0.3, 0]) }}
                >
                    <motion.span style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]) }}>
                        THE LEGACY
                    </motion.span>
                    <motion.span style={{ opacity: useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]) }}>
                        THE DISRUPTION
                    </motion.span>
                    <motion.span style={{ opacity: useTransform(scrollYProgress, [0.7, 1], [0, 1]) }}>
                        THE CLARITY
                    </motion.span>
                </motion.div>
            </WhyNow>
        </div>
    );
};
export default WhyNowScrollClient;
