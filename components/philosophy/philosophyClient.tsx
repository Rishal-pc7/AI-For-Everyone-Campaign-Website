"use client"

import { AnimatePresence, motion, MotionValue, TargetAndTransition, Transition, VariantLabels } from "framer-motion";
import { BrainCircuit, Hammer, HeartHandshake, Sparkles } from "lucide-react";
import React, { useState } from "react";
import { OrbitingIcons } from "./philosophyServer";
type DataProps={
    id:string,
    title:string,
    subtitle:string,
    description:string,
    color:string,
    bg:string,
    border:string,
    position:string
}
export default function PhilosophyMobile({DATA}: {DATA: DataProps[]}) {
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
    const CurrentIcon = activeItem.id === "head" ? BrainCircuit : activeItem.id === "hand" ? Hammer : HeartHandshake ;

    return (
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
                        DATA={DATA}
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

    );
}
