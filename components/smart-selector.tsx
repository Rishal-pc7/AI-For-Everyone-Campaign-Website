"use client"

import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import { Users, Briefcase, Heart } from "lucide-react"
import { motion, Variants } from "framer-motion"

type TabType = "kutty" | "young" | "friends"

export default function SmartSelector() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState<TabType>("kutty")

  const tabs = [
    { id: "kutty", label: t("selector.kutty"), icon: Users },
    { id: "young", label: t("selector.young"), icon: Briefcase },
    { id: "friends", label: t("selector.friends"), icon: Heart },
  ] as const

  const content: Record<TabType, { desc: string; detail: string }> = {
    kutty: {
      desc: t("selector.kutty.desc"),
      detail: t("selector.kutty.detail"),
    },
    young: {
      desc: t("selector.young.desc"),
      detail: t("selector.young.detail"),
    },
    friends: {
      desc: t("selector.friends.desc"),
      detail: t("selector.friends.detail"),
    },
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <motion.section
      id="programs"
      className="py-20 px-4 max-w-6xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div
        className="text-center mb-16"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } },
        }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-linear-to-r from-secondary to-primary bg-clip-text text-transparent">Who Are You?</span>
        </h2>
        <p className="text-muted-foreground text-lg">Choose your path and unlock personalized learning</p>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        className="flex flex-col md:flex-row gap-4 justify-center mb-12"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
        }}
      >
        {tabs.map((tab, idx) => {
          const Icon = tab.icon
          return (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 rounded-lg border-2 transition-all flex items-center gap-2 font-semibold ${activeTab === tab.id
                ? "bg-linear-to-r from-secondary to-primary border-transparent text-background shadow-lg shadow-secondary/50"
                : "border-border text-muted-foreground hover:border-secondary/50"
                }`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <Icon size={20} />
              {tab.label}
            </motion.button>
          )
        })}
      </motion.div>

      {/* Content Card */}
      <motion.div
        className="relative"
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.3 } },
        }}
      >
        {Object.entries(content).map(([tabId, data]) => (
          <div
            key={tabId}
            className={`transition-all duration-500 transform ${activeTab === tabId ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute inset-0 pointer-events-none"
              }`}
          >
            <div className="bg-card border border-secondary/20 rounded-xl p-8 md:p-12 backdrop-blur">
              <h3 className="text-3xl font-bold mb-2 text-secondary">{data.desc}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">{data.detail}</p>
              <button className="px-6 py-3 bg-linear-to-r from-secondary to-primary text-background rounded-lg font-semibold hover:shadow-lg hover:shadow-secondary/50 transition-all">
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.section>
  )
}
