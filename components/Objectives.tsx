"use client"

import { motion } from "framer-motion"
import { KeralaMapCard } from "./objectives/kerala-map-card"
import { CodeTypingCard } from "./objectives/code-typing-card"
import { StatCard } from "./objectives/stat-card"
import { PhilosophyCard } from "./objectives/philosophy-card"

interface ObjectivesProps {
  keralaMapUrl?: string
}

export default function Objectives({ keralaMapUrl = "/images/kerala-map.png" }: ObjectivesProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="py-20">
      <h1 className="text-center text-4xl md:text-6xl lg:text-7xl font-bold mb-4 pb-3 bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
        Our Objectives
      </h1>
      <div className="min-h-screen bg-background flex items-center justify-center p-4 md:p-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          <KeralaMapCard keralaMapUrl={keralaMapUrl} variants={itemVariants} />
          <CodeTypingCard variants={itemVariants} />
          <StatCard variants={itemVariants} />
          <PhilosophyCard variants={itemVariants} />
        </motion.div>
      </div>
    </section>
  )
}
