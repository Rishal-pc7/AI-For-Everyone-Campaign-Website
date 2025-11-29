import { AnimatedHeading, AnimatedItem,AnimatedText } from "@/components/shared/animation-wrapper"
export default function HeroContent() {
    return (
        <AnimatedItem className="space-y-3 order-2 lg:order-1">
            <AnimatedHeading
                className="text-4xl md:text-6xl font-bold font-heading leading-tight"
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.1 } },
                }}
            >
                <span className="bg-linear-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                    From Digital Literacy to AI Fluency
                </span>
            </AnimatedHeading>
            <AnimatedText
                className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
                }}
            >
                We are demystifying Artificial Intelligence for 35 million people, turning consumers into creators and observers into innovators.
            </AnimatedText>
        </AnimatedItem>
    )
}
