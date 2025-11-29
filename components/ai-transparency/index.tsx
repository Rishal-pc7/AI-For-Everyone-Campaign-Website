"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, X, Github, BrainCircuit, LayoutTemplate, Sparkles, TerminalSquare } from "lucide-react";

export default function AITransparency() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* TRIGGER BUTTON */}
            <button
                onClick={() => setIsOpen(true)}
                suppressHydrationWarning
                className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-md border border-teal-500/30 rounded-full text-teal-400 hover:bg-teal-500/10 hover:scale-105 transition-all shadow-[0_0_15px_rgba(45,212,191,0.2)] group"
            >
                <Zap size={16} className="group-hover:text-yellow-400 transition-colors" />
                <span className="text-xs font-mono font-bold tracking-wide">HOW THIS WAS MADE</span>
            </button>

            {/* MODAL */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-2xl bg-[#0a0514] border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden"
                        >
                            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                                <X size={20} />
                            </button>

                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                    <Zap className="text-teal-400" /> The AI Stack
                                </h2>
                                <p className="text-gray-400 text-sm">
                                    This project was not just coded; it was engineered using a multi-agent AI workflow.
                                </p>
                            </div>

                            {/* --- YOUR SPECIFIC WORKFLOW --- */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                {/* 1. PLANNING */}
                                <TechSpec
                                    icon={BrainCircuit}
                                    tool="Google Gemini"
                                    role="Product Strategy (PRD)"
                                    desc="Generated the Product Requirements Document (PRD), User Personas, and all written content/copy based on the campaign PDF."
                                    color="text-blue-400"
                                />

                                {/* 2. DRAFTING */}
                                <TechSpec
                                    icon={LayoutTemplate}
                                    tool="v0.dev"
                                    role="MVP Generation"
                                    desc="Generated the initial Minimum Viable Product (MVP) layouts and Hero Section structures."
                                    color="text-white"
                                />

                                {/* 3. REFINING */}
                                <TechSpec
                                    icon={Sparkles}
                                    tool="Lovable"
                                    role="Component Polish"
                                    desc="Refined individual UI components (Tabs, Bento Grids) for high-fidelity aesthetics and responsiveness."
                                    color="text-pink-400"
                                />

                                {/* 4. ASSEMBLY */}
                                <TechSpec
                                    icon={TerminalSquare}
                                    tool="Antigravity IDE"
                                    role="Logic & Assembly"
                                    desc="Used for organizing the codebase, stitching components together, and handling React logic/state management."
                                    color="text-green-400"
                                />

                            </div>

                            <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                                <span className="text-xs text-gray-500 font-mono">Workflow: PRD &rarr; MVP &rarr; Refine &rarr; Build</span>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}

// Reusable Card Component
function TechSpec({ icon: Icon, tool, role, desc, color }: any) {
    return (
        <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex items-center gap-3 mb-2">
                <Icon size={18} className={color} />
                <span className="font-bold text-white text-sm">{tool}</span>
            </div>
            <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-1">{role}</div>
            <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
        </div>
    )
}
