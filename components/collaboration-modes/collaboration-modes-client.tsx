"use client"

import { AnimationWrapper, AnimatedItem } from "@/components/shared/animation-wrapper"
import { ArrowRight } from "lucide-react"

const collaborationModes = [
    {
        title: "Host a Program",
        description: "Facilitate workshops or study circles in your space.",
        size: "large" as const,
    },
    {
        title: "Volunteer & Mentor",
        description: "Share expertise to guide learners.",
        size: "small" as const,
    },
    {
        title: "Sponsor Toolkits",
        description: "Fund the resources that power grassroots learning.",
        size: "small" as const,
    },
    {
        title: "Open Doors",
        description: "Invite your community (youth or elders) to participate.",
        size: "large" as const,
    },
    {
        title: "Contribute",
        description: "Add real-world challenges to our repository.",
        size: "large" as const,
    },
]

export default function CollaborationModesClient() {
    return (
        <AnimationWrapper className="py-24 px-6 md:px-12 lg:px-16 bg-linear-to-b from-transparent to-card/30 min-h-screen flex items-center">
            <div className="w-full max-w-[1600px] mx-auto">
                <AnimatedItem className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4 pb-2 bg-linear-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                        The Collaboration Engine
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        This initiative runs on distributed power. We invite organizations to integrate their resources into our open framework.
                    </p>
                </AnimatedItem>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
                    {collaborationModes.map((mode, index) => (
                        <AnimatedItem
                            key={index}
                            className={`
                glass-card glass-card-hover rounded-2xl p-8 flex flex-col justify-center
                ${mode.size === "large" ? "md:col-span-2 lg:col-span-2" : ""}
                group cursor-pointer hover:scale-[1.02] transition-transform duration-300
              `}
                        >
                            <div className="relative">
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-neon-purple/30 rounded-full blur-xl group-hover:bg-neon-purple/50 transition-colors" />
                                <h3 className="text-2xl font-bold bg-linear-to-r from-accent via-primary to-accent bg-clip-text text-transparent pb-2 relative z-10">
                                    {mode.title}
                                </h3>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                {mode.description}
                            </p>
                        </AnimatedItem>
                    ))}
                </div>
            </div>
        </AnimationWrapper>
    )
}
