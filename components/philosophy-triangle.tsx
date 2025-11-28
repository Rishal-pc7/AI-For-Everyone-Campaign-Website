"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, Hammer, HeartHandshake, Sparkles } from "lucide-react";

const DATA = [
    {
        id: "head",
        title: "HEAD",
        subtitle: "Understand",
        description: "Grasp the logic behind AI & why it matters.",
        icon: BrainCircuit,
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/20",
        position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2", // Top Center
    },
    {
        id: "hand",
        title: "HAND",
        subtitle: "Build",
        description: "Create tools using GenAI & solve local problems.",
        icon: Hammer,
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        position: "bottom-10 right-0 translate-x-1/3", // Bottom Right
    },
    {
        id: "heart",
        title: "HEART",
        subtitle: "Mentor",
        description: "Share knowledge & shape an inclusive future.",
        icon: HeartHandshake,
        color: "text-amber-400",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20",
        position: "bottom-10 left-0 -translate-x-1/3", // Bottom Left
    },
];

export default function HeadHandHeart() {
    const [activeNode, setActiveNode] = useState("head");
    const [isTouched, setIsTouched] = useState(false);

    // Autoplay effect
    React.useEffect(() => {
        if (isTouched) return;
        const interval = setInterval(() => {
            setActiveNode((prev) => {
                const currentIndex = DATA.findIndex((item) => item.id === prev);
                const nextIndex = (currentIndex + 1) % DATA.length;
                return DATA[nextIndex].id;
            });
        }, 4000);
        return () => clearInterval(interval);
    }, [isTouched]);

    const activeItem = DATA.find((item) => item.id === activeNode) || DATA[0];
    const CurrentIcon = activeItem.icon;

    return (
        <section className="relative w-full py-24 overflow-hidden flex flex-col items-center justify-center">

            {/* Section Header */}
            <div className="text-center md:mb-44 relative z-10 px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 pb-2 bg-linear-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                    Our Approach
                </h2>
                <p className="text-gray-400 max-w-lg mx-auto">
                    True learning isn't just theory. We engage the whole person.
                </p>
            </div>

            {/* --- DESKTOP CIRCULAR LAYOUT --- */}
            <div className="relative w-[600px] h-[600px] hidden md:flex items-center justify-center">

                {/* 1. The Orbit Rings (Background) */}
                <div className="absolute inset-0 rounded-full border border-white/5 animate-spin-slow-reverse" />
                <div className="absolute inset-10 rounded-full border border-teal-500/10 animate-spin-slow" />

                {/* 2. The Connecting SVG Lines (Triangle) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                    <motion.path
                        d="M300 50 L500 500 L100 500 Z"
                        fill="none"
                        stroke="#2dd4bf"
                        strokeWidth="1"
                        strokeDasharray="8 8"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    {/* Floating Line Effect */}
                    <motion.path
                        d="M300 50 L500 500 L100 500 Z"
                        fill="none"
                        stroke="#2dd4bf"
                        strokeWidth="2"
                        strokeLinecap="round"
                        filter="drop-shadow(0 0 4px #2dd4bf)"
                        initial={{ strokeDasharray: "100 1500", strokeDashoffset: 0, opacity: 0 }}
                        animate={{ strokeDashoffset: -1600, opacity: [0, 1, 1, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </svg>

                {/* 3. The Central Core */}
                <div className="relative z-20 flex flex-col items-center justify-center w-40 h-40 bg-black/50 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_0_50px_rgba(45,212,191,0.2)]">
                    <Sparkles className="w-8 h-8 text-white mb-2 animate-pulse" />
                    <span className="text-xs font-mono text-teal-200 tracking-widest">CORE</span>
                    <span className="text-sm font-bold text-white">RESPONSIBLE</span>
                </div>

                {/* 4. The 3 Orbiting Nodes */}
                {DATA.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                        className={`absolute ${item.position} w-80 p-6 rounded-2xl border backdrop-blur-md ${item.bg} ${item.border} flex flex-col items-center text-center group cursor-pointer transition-all duration-300 z-30`}
                    >
                        <div className={`p-3 rounded-full bg-black/50 mb-3 ${item.color} group-hover:bg-white/10 transition-colors`} onTouchStart={() => setIsTouched(true)} onTouchEnd={() => setIsTouched(false)}>
                            <item.icon size={32} />
                        </div>
                        <h3 className={`text-2xl font-bold mb-1 ${item.color}`}>{item.title}</h3>
                        <span className="text-white font-medium text-base mb-2 block">{item.subtitle}</span>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                ))}
            </div>

            {/* --- MOBILE INTERACTIVE LAYOUT --- */}
            <div className="flex flex-col md:hidden items-center w-full">

                {/* TOP: Mini Solar System */}
                <div className="h-96 w-full flex items-center justify-center relative my-8">
                    {/* Orbit Rings */}
                    <div className="absolute w-72 h-72 rounded-full border border-white/5 animate-spin-slow-reverse" />
                    <div className="absolute w-48 h-48 rounded-full border border-teal-500/10 animate-spin-slow" />

                    {/* Core */}
                    <div className="absolute z-10 flex flex-col items-center justify-center w-24 h-24 bg-black/50 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_0_30px_rgba(45,212,191,0.3)]">
                        <Sparkles className="w-8 h-8 text-white animate-pulse" />
                    </div>

                    {/* Orbiting Icons */}
                    <OrbitingIcons
                        active={activeNode}
                        onSelect={setActiveNode}
                        onInteractionStart={() => setIsTouched(true)}
                        onInteractionEnd={() => setIsTouched(false)}
                    />
                </div>

                {/* BOTTOM: Dynamic Data Card */}
                <div
                    className="w-full px-6 min-h-[250px]"
                    onTouchStart={() => setIsTouched(true)}
                    onTouchEnd={() => setIsTouched(false)}
                    onTouchCancel={() => setIsTouched(false)}
                    onMouseEnter={() => setIsTouched(true)}
                    onMouseLeave={() => setIsTouched(false)}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeNode} // This forces the re-animation when state changes
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className={`p-8 rounded-3xl border bg-black/50 backdrop-blur-xl ${activeItem.border}`}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                {/* Dynamic Icon */}
                                <div className={`p-4 rounded-full bg-black/40 ${activeItem.color}`}>
                                    <CurrentIcon className="w-12 h-12" />
                                </div>
                                <h3 className={`text-3xl font-bold ${activeItem.color}`}>
                                    {activeItem.title}
                                </h3>
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                {activeItem.description}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>

        </section>
    );
}

function OrbitingIcons({ active, onSelect, onInteractionStart, onInteractionEnd }: { active: string, onSelect: (id: string) => void, onInteractionStart: () => void, onInteractionEnd: () => void }) {
    // Simple circular positioning for 3 items
    // 0 deg (top), 120 deg (bottom right), 240 deg (bottom left)
    // Adjusting to match the visual triangle: Top, Bottom Right, Bottom Left

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none">
            {DATA.map((item, index) => {
                // Calculate position on a circle of radius 140px (approx half of h-72 container)
                // -90 deg is top. 
                // Index 0 (Head) -> -90 deg
                // Index 1 (Hand) -> 30 deg (120 deg from top)
                // Index 2 (Heart) -> 150 deg (240 deg from top)

                const angleDeg = -90 + (index * 120);
                const angleRad = (angleDeg * Math.PI) / 180;
                const radius = 140; // Distance from center

                // Center of container is 50%, 50%
                // x = r * cos(theta)
                // y = r * sin(theta)

                const x = radius * Math.cos(angleRad);
                const y = radius * Math.sin(angleRad);

                const isActive = active === item.id;

                return (
                    <div
                        key={item.id}
                        className="absolute top-1/2 left-1/2 pointer-events-auto"
                        style={{
                            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                        }}
                    >
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => onSelect(item.id)}
                            onTouchStart={onInteractionStart}
                            onFocus={onInteractionStart}
                            onBlur={onInteractionEnd}
                            onTouchEnd={onInteractionEnd}
                            onTouchCancel={onInteractionEnd}
                            onMouseEnter={onInteractionStart}
                            onMouseLeave={onInteractionEnd}
                            className={`p-4 rounded-full border backdrop-blur-md transition-all duration-300 ${isActive
                                ? `bg-white/10 ${item.border} scale-125 shadow-[0_0_20px_rgba(255,255,255,0.3)]`
                                : `bg-black/40 border-white/5 opacity-70 hover:opacity-100`
                                }`}
                        >
                            <item.icon size={40} className={item.color} />
                        </motion.button>
                    </div>
                );
            })}
        </div>
    );
}
