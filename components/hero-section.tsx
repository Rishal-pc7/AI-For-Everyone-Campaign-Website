"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/context/language-context"

import { motion, Variants } from "framer-motion"
import AiSearchBar from "./ai-search-bar"

export default function HeroSection() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
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

      <motion.div
        className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div className="space-y-3 order-2 lg:order-1" variants={itemVariants}>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.1 } },
            }}
          >
            <span className="bg-linear-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              AI For Everyone
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
            }}
          >
            {t("hero.subtext")}
          </motion.p>


        </motion.div>

        <motion.div
          className="relative h-96 flex items-center justify-center order-1 lg:order-2"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.3 } },
          }}
        >
          {/* Holographic glow background */}
          <div className="absolute inset-0 bg-gradient-radial from-accent/40 via-transparent to-transparent blur-3xl -z-10 rounded-full" />

          {/* Blended image */}
          <AiSearchBar />

        </motion.div>
      </motion.div>
    </section>
  )
}
