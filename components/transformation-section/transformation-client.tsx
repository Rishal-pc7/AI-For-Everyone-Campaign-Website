"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TransformationSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Transform values based on scroll
    const problemOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
    const solutionOpacity = useTransform(scrollYProgress, [0.4, 0.8], [0, 1]);
    const solutionScale = useTransform(scrollYProgress, [0.4, 0.8], [0.9, 1]);
    const scanLineY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div ref={containerRef} className="relative h-[250vh] md:h-[300vh]">
            {/* Sticky Container */}
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
                {/* Background Grid Effect */}
                <div className="absolute inset-0 bg-background">
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: `
                linear-gradient(hsl(270 70% 40% / 0.3) 1px, transparent 1px),
                linear-gradient(90deg, hsl(270 70% 40% / 0.3) 1px, transparent 1px)
              `,
                            backgroundSize: '50px 50px'
                        }}
                    />
                </div>

                {/* Scanning Line */}
                <motion.div
                    className="absolute left-0 right-0 h-[2px] z-20 pointer-events-none"
                    style={{
                        top: scanLineY,
                        background: `linear-gradient(90deg, 
              transparent, 
              hsl(180 80% 50%) 50%, 
              transparent
            )`,
                        boxShadow: '0 0 20px hsl(180 80% 50% / 0.8)'
                    }}
                />

                {/* Section Heading - Always Visible initially */}
                <div className="absolute top-8 left-0 right-0 z-30 text-center px-4">
                    <h3 className="text-base md:text-lg font-semibold tracking-widest text-accent  opacity-70">
                        From Digital Literacy to AI Fluency
                    </h3>
                </div>

                {/* Content Container */}
                <div className="relative z-10 h-full flex items-center justify-center px-4 md:px-6 w-full">
                    {/* Problem State (Glitch) */}
                    <motion.div
                        style={{ opacity: problemOpacity }}
                        className="absolute max-w-4xl text-center w-full"
                    >
                        <h2 className="text-4xl md:text-7xl font-bold mb-6 md:mb-8 glitch leading-tight" data-text="The Next Great Leap.">
                            The Next Great Leap.
                        </h2>
                        <div className="space-y-4 md:space-y-6 text-lg md:text-2xl text-muted-foreground px-4">
                            <p className="glitch" data-text="Students graduating with outdated skills.">
                                Students graduating with outdated skills.
                            </p>
                            <p className="glitch" data-text="Elders facing deepfakes.">
                                Elders facing deepfakes.
                            </p>
                            <p className="glitch" data-text="A workforce at risk of automation.">
                                A workforce at risk of automation.
                            </p>
                        </div>
                        <div className="mt-8 md:mt-12 p-4 md:p-6 border border-red-500/50 rounded-lg bg-red-500/10 mx-4 md:mx-0">
                            <p className="text-base md:text-lg text-red-100">
                                Critical skill gaps in AI literacy and digital safety leave our communities vulnerable
                                to misinformation and economic displacement.
                            </p>
                        </div>
                    </motion.div>

                    {/* Solution State (Clean) */}
                    <motion.div
                        style={{
                            opacity: solutionOpacity,
                            scale: solutionScale
                        }}
                        className="absolute max-w-6xl text-center w-full px-4"
                    >
                        <h2 className="text-3xl md:text-7xl font-bold mb-6 md:mb-8 text-accent text-glow leading-tight">
                            A Global Model for Responsible AI.
                        </h2>
                        <div className="space-y-6 text-foreground w-full">
                            <p className="font-semibold text-accent text-lg md:text-2xl">
                                We are building a framework where every Keralite is a Creator, not just a Consumer.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12 text-left">
                                <div className="p-4 md:p-6 border border-accent/30 rounded-lg bg-accent/5 backdrop-blur-sm">
                                    <h3 className="text-xl md:text-2xl font-bold text-accent mb-2 md:mb-3">Empowered Citizens</h3>
                                    <p className="text-sm md:text-base text-foreground/80">
                                        Every individual equipped with AI literacy and digital safety skills
                                    </p>
                                </div>
                                <div className="p-4 md:p-6 border border-accent/30 rounded-lg bg-accent/5 backdrop-blur-sm">
                                    <h3 className="text-xl md:text-2xl font-bold text-accent mb-2 md:mb-3">Future-Ready Workforce</h3>
                                    <p className="text-sm md:text-base text-foreground/80">
                                        Students and professionals trained in cutting-edge AI technologies
                                    </p>
                                </div>
                                <div className="p-4 md:p-6 border border-accent/30 rounded-lg bg-accent/5 backdrop-blur-sm">
                                    <h3 className="text-xl md:text-2xl font-bold text-accent mb-2 md:mb-3">Protected Communities</h3>
                                    <p className="text-sm md:text-base text-foreground/80">
                                        Elders safeguarded against deepfakes and digital manipulation
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-16 h-16 md:w-32 md:h-32 border-l-2 border-t-2 border-primary/50" />
                <div className="absolute top-0 right-0 w-16 h-16 md:w-32 md:h-32 border-r-2 border-t-2 border-primary/50" />
                <div className="absolute bottom-0 left-0 w-16 h-16 md:w-32 md:h-32 border-l-2 border-b-2 border-primary/50" />
                <div className="absolute bottom-0 right-0 w-16 h-16 md:w-32 md:h-32 border-r-2 border-b-2 border-primary/50" />
            </div>
        </div>
    );
};

export default TransformationSection;

