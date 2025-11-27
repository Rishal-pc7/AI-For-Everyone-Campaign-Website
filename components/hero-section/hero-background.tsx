"use client"

import { useEffect, useState } from "react"

export default function HeroBackground() {
    const [particles, setParticles] = useState<Array<{ id: number; top: number; left: number; delay: number; colorClass: string }>>([])

    useEffect(() => {
        const generatedParticles = Array.from({ length: 50 }).map((_, i) => {
            const colorOptions = ["bg-secondary/60 w-1 h-1", "bg-primary/40 w-1.5 h-1.5", "bg-accent/50 w-0.5 h-0.5"]
            const selectedColor = colorOptions[i % 3]

            return {
                id: i,
                top: Math.random() * 100,
                left: Math.random() * 100,
                delay: Math.random() * 4,
                colorClass: selectedColor,
            }
        })
        setParticles(generatedParticles)
    }, [])

    return (
        <div className="absolute inset-0 -z-10">
            {/* Animated gradient orbs */}
            <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse-glow animation-delay-1000" />
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow animation-delay-3000" />
            <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-drift animation-delay-2000" />

            <div className="absolute inset-0 overflow-hidden">
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className={`absolute rounded-full animate-float ${particle.colorClass}`}
                        style={{
                            top: `${particle.top}%`,
                            left: `${particle.left}%`,
                            animationDelay: `${particle.delay}s`,
                        }}
                    />
                ))}
            </div>
        </div>
    )
}
