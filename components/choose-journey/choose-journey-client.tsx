"use client"

import { useState, type ComponentType } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Gamepad2, Code2, ShieldCheck, ArrowRight } from "lucide-react"
import { AnimationWrapper, AnimatedItem } from "@/components/shared/animation-wrapper"

interface Journey {
    id: string
    icon: ComponentType<any>
    label: string
    headline: string
    body: string
    badge: string
}

const journeys: Journey[] = [
    {
        id: "kuttymakers",
        icon: Gamepad2,
        label: "KuttyMakers",
        headline: "Curiosity to Creation.",
        body: "You are already growing up in a world full of AI, but you don't have to be just a consumer. We help you take control of this technology by using fun, hands-on tools like Scratch and Teachable Machine. Through simple pattern recognition games and storybooks, you will turn your natural curiosity into creative power—no complex coding required.",
        badge: "Ages 10-17",
    },
    {
        id: "youngmakers",
        icon: Code2,
        label: "Young Makers",
        headline: "Build the Future.",
        body: "The workforce is shifting rapidly towards automation, and the best way to future-proof your career is to become a creator. We provide the platform for you to build real-world applications using Gen AI and LLMs. By joining our Hackathons and Study Jams, you will solve local problems and contribute to Kerala's own AI datasets, positioning yourself as an innovator in the new economy.",
        badge: "College Students & Early Professionals",
    },
    {
        id: "friends",
        icon: ShieldCheck,
        label: "Friends of the Movement",
        headline: "Safety & Awareness.",
        body: "AI offers exciting opportunities, but it also brings risks like deepfakes and scams that target our community. We empower you to pause, question, and protect yourself by hosting Learning Circles right in your neighborhood. These simple discussions help you understand privacy and misinformation, ensuring you can guide the next generation safely through the AI era.",
        badge: "Educators, Professionals, Parents & Community Leaders",
    },
]

export default function ChooseJourneyClient() {
    const [activeTab, setActiveTab] = useState(journeys[0].id)
    const activeJourney = journeys.find((j) => j.id === activeTab) || journeys[0]
    const Icon = activeJourney.icon

    return (
        <AnimationWrapper className="relative max-w-6xl mx-auto">
            {/* Header */}
            <AnimatedItem className="text-center mb-16">
                <h2 className="text-2xl md:text-5xl font-bold tracking-tight bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent pb-2">
                    Find Your Place in the Movement.
                </h2>
                <p className="text-xl text-muted-foreground">
                    Whether you are 10 or 60, there is a role for you.
                </p>
            </AnimatedItem>

            {/* Desktop: Tabs */}
            <div className="hidden md:block">
                {/* Tab Navigation */}
                <AnimatedItem className="flex gap-4 mb-8">
                    {journeys.map((journey) => {
                        const TabIcon = journey.icon
                        const isActive = activeTab === journey.id

                        return (
                            <button
                                key={journey.id}
                                onClick={() => setActiveTab(journey.id)}
                                className={`
                    relative flex-1 py-4 px-6 rounded-2xl
                    transition-all duration-300
                    ${isActive
                                        ? "bg-glass-bg/10 backdrop-blur-xl border-2 border-neon-purple shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                                        : "bg-glass-bg/5 backdrop-blur-sm border border-border/20 hover:bg-glass-bg/10"
                                    }
                  `}
                            >
                                <div className="flex items-center gap-3">
                                    <TabIcon
                                        className={`w-6 h-6 ${isActive ? "text-neon-purple" : "text-muted-foreground"
                                            }`}
                                    />
                                    <span
                                        className={`font-semibold ${isActive ? "text-foreground" : "text-muted-foreground"
                                            }`}
                                    >
                                        {journey.label}
                                    </span>
                                </div>

                                {/* Glow effect on active tab */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTabGlow"
                                        className="absolute inset-0 rounded-2xl bg-linear-to-r from-neon-purple/20 to-neon-teal/20 -z-10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </button>
                        )
                    })}
                </AnimatedItem>

                {/* Tab Content */}
                <AnimatedItem>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="relative p-8 rounded-3xl bg-glass-bg/5 backdrop-blur-xl border border-border/30 shadow-2xl"
                        >
                            <div className="flex items-start gap-6">
                                <div className="p-4 rounded-2xl bg-linear-to-br from-neon-purple/20 to-neon-teal/20 border border-neon-purple/30">
                                    <Icon className="w-12 h-12 text-neon-purple" />
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-3xl font-bold mb-4 text-foreground">
                                        {activeJourney.headline}
                                    </h3>
                                    <div className="inline-block mb-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-neon-purple">
                                        {activeJourney.badge}
                                    </div>
                                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                        {activeJourney.body}
                                    </p>

                                </div>
                            </div>

                            {/* Decorative corner elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-neon-purple/10 to-transparent rounded-full blur-2xl" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-linear-to-tr from-neon-teal/10 to-transparent rounded-full blur-2xl" />
                        </motion.div>
                    </AnimatePresence>
                </AnimatedItem>
            </div>

            {/* Mobile: Accordion */}
            <div className="md:hidden space-y-4">
                {journeys.map((journey) => {
                    const JourneyIcon = journey.icon
                    const isActive = activeTab === journey.id

                    return (
                        <AnimatedItem
                            key={journey.id}
                            className={`
                  rounded-3xl border transition-all duration-300
                  ${isActive
                                    ? "bg-glass-bg/10 backdrop-blur-xl border-neon-purple shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                                    : "bg-glass-bg/5 backdrop-blur-sm border-border/20"
                                }
                `}
                        >
                            <button
                                onClick={() => setActiveTab(isActive ? "" : journey.id)}
                                className="w-full p-6 flex items-center gap-4 text-left"
                            >
                                <JourneyIcon
                                    className={`w-8 h-8 shrink-0 ${isActive ? "text-neon-purple" : "text-muted-foreground"
                                        }`}
                                />
                                <span
                                    className={`font-semibold text-lg ${isActive ? "text-foreground" : "text-muted-foreground"
                                        }`}
                                >
                                    {journey.label}
                                </span>
                            </button>

                            <AnimatePresence>
                                {isActive && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 pt-2 space-y-4">
                                            <h3 className="text-2xl font-bold text-foreground">
                                                {journey.headline}
                                            </h3>
                                            <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-neon-purple">
                                                {journey.badge}
                                            </div>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {journey.body}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </AnimatedItem>
                    )
                })}
            </div>
        </AnimationWrapper>
    )
}
