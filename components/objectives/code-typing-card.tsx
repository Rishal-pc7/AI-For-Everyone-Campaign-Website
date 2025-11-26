"use client"

import { motion, Variants } from "framer-motion"
import { useEffect, useState } from "react"

interface CodeTypingCardProps {
    variants: Variants
}

export function CodeTypingCard({ variants }: CodeTypingCardProps) {
    const [typedCode, setTypedCode] = useState("")
    const codeSnippet = `const FutureMaker = () => {
  return (
    <Innovation>
      <Passion />
      <Skills />
      <Impact />
    </Innovation>
  );
};`

    useEffect(() => {
        let index = 0
        const interval = setInterval(() => {
            if (index < codeSnippet.length) {
                setTypedCode(codeSnippet.slice(0, index + 1))
                index++
            } else {
                clearInterval(interval)
            }
        }, 50)

        return () => clearInterval(interval)
    }, [])

    return (
        <motion.div
            variants={variants}
            className="md:row-span-2 glass-card glow-hover rounded-3xl p-6 md:p-8 relative overflow-hidden border border-white/10 hover:border-purple-500/50 transition-colors duration-300"
        >
            <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 via-transparent to-transparent" />
            <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <pre className="text-xs md:text-sm text-purple-400 font-mono flex-1 overflow-auto">
                    <code>{typedCode}</code>
                    <span className="inline-block w-2 h-4 bg-purple-400 animate-pulse ml-1" />
                </pre>
            </div>
        </motion.div>
    )
}
