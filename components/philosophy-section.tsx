"use client"

import { useLanguage } from "@/context/language-context"
import { Brain, Wrench, Heart } from "lucide-react"
import { motion } from "framer-motion"

export default function PhilosophySection() {
  const { t } = useLanguage()

  const philosophies = [
    {
      icon: Brain,
      title: t("philosophy.head"),
      desc: t("philosophy.head.desc"),
      gradient: "from-secondary to-primary",
    },
    {
      icon: Wrench,
      title: t("philosophy.hand"),
      desc: t("philosophy.hand.desc"),
      gradient: "from-primary to-accent",
    },
    {
      icon: Heart,
      title: t("philosophy.heart"),
      desc: t("philosophy.heart.desc"),
      gradient: "from-accent to-secondary",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <motion.section
      className="py-20 px-4 max-w-6xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div
        className="text-center mb-16"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } },
        }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-linear-to-r from-secondary to-primary bg-clip-text text-transparent">
            Head, Hand & Heart
          </span>
        </h2>
        <p className="text-muted-foreground text-lg">Our three pillars of learning</p>
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={containerVariants}>
        {philosophies.map((item, idx) => {
          const Icon = item.icon
          return (
            <motion.div
              key={idx}
              className="group relative"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: idx * 0.15 } },
              }}
            >
              <div
                className={`absolute inset-0 rounded-xl bg-linear-to-r ${item.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300`}
              />
              <div className="relative bg-card border border-border rounded-xl p-8 backdrop-blur hover:border-secondary/50 transition-all h-full">
                <div
                  className={`w-16 h-16 rounded-lg bg-linear-to-r ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon size={32} className="text-background" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </motion.section>
  )
}
