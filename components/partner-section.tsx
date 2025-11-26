"use client"

import { useLanguage } from "@/context/language-context"
import { BookOpen, Banknote, Radio, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function PartnerSection() {
  const { t } = useLanguage()

  const partnerTypes = [
    {
      icon: BookOpen,
      title: t("partners.knowledge"),
      description: "Universities, Research Institutes",
    },
    {
      icon: Banknote,
      title: t("partners.financial"),
      description: "Funds, Grants, Investments",
    },
    {
      icon: Radio,
      title: t("partners.media"),
      description: "News, Broadcasting, Digital",
    },
    {
      icon: Users,
      title: t("partners.community"),
      description: "Local Organizations, NGOs",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.section
      id="partners"
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
          <span className="bg-linear-to-r from-secondary to-primary bg-clip-text text-transparent">Our Partners</span>
        </h2>
        <p className="text-muted-foreground text-lg">Building the future together</p>
      </motion.div>

      {/* Bento Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-max"
        variants={containerVariants}
      >
        {partnerTypes.map((partner, idx) => {
          const Icon = partner.icon
          return (
            <motion.div
              key={idx}
              className={`group relative rounded-xl border border-border bg-card backdrop-blur p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 ${idx === 0 ? "lg:col-span-1 lg:row-span-2" : ""
                }`}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: idx * 0.1 } },
              }}
            >
              <div className="w-12 h-12 rounded-lg bg-linear-to-r from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon size={24} className="text-background" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{partner.title}</h3>
              <p className="text-muted-foreground text-sm">{partner.description}</p>
            </motion.div>
          )
        })}
      </motion.div>
    </motion.section>
  )
}
