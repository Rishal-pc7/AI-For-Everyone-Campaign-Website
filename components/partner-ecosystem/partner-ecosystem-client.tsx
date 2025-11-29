"use client"

import { BrainCircuit, Coins, Megaphone, Cpu, Users } from "lucide-react"
import { AnimationWrapper, AnimatedItem } from "@/components/shared/animation-wrapper"

const partners = [
    {
        icon: BrainCircuit,
        title: "Knowledge Partners",
        details: "Tech companies sharing expertise, Educators designing curriculum.",
    },
    {
        icon: Coins,
        title: "Financial Partners",
        details: "Funding facilitator training, venue costs, and kit distribution.",
    },
    {
        icon: Megaphone,
        title: "Outreach Partners",
        details: "Amplifying stories via newspapers, TV, and social media.",
    },
    {
        icon: Cpu,
        title: "Resource Partners",
        details: "Providing hardware (laptops), software tools, and learning materials.",
    },
    {
        icon: Users,
        title: "Community Partners",
        details: "Schools, NGOs, and Libraries hosting learning circles.",
    },
]

export default function PartnerEcosystemClient() {
    return (
        <AnimationWrapper className="py-24 px-6 max-w-7xl mx-auto">
            <AnimatedItem className="text-center mb-16">
                <h2 className="text-5xl font-bold  mb-4 pb-2 bg-linear-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                    Powering the Movement
                </h2>
                <p className="text-muted-foreground text-lg">
                    Join forces with diverse partners to create lasting impact
                </p>
            </AnimatedItem>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {partners.map((partner, index) => {
                    const Icon = partner.icon
                    return (
                        <AnimatedItem
                            key={index}
                            className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300"
                        >
                            <div className="mb-6 p-4 rounded-xl bg-neon-purple/20 group-hover:bg-neon-purple/30 transition-colors">
                                <Icon className="w-8 h-8 text-neon-purple" />
                            </div>
                            <h3 className="text-xl font-semibold bg-linear-to-r from-accent via-primary to-accent bg-clip-text text-transparent  mb-3">
                                {partner.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {partner.details}
                            </p>
                        </AnimatedItem>
                    )
                })}
            </div>
        </AnimationWrapper>
    )
}
