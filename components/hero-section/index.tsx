import HeroBackground from "./hero-background"
import { AnimationWrapper, AnimatedItem } from "@/components/shared/animation-wrapper"
import HeroContent from "./hero-content"
import AiSearchBar from "./ai-search-bar"

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
            <HeroBackground />

            <AnimationWrapper className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <HeroContent />

                <AnimatedItem
                    className="relative h-96 flex items-center justify-center order-1 lg:order-2"
                    variants={{
                        hidden: { opacity: 0, scale: 0.9 },
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.3 } },
                    }}
                >
                    {/* Holographic glow background */}
                    <div className="absolute inset-0 bg-gradient-radial from-accent/40 via-transparent to-transparent blur-3xl -z-10 rounded-full" />
                    <AiSearchBar />
                </AnimatedItem>
            </AnimationWrapper>
        </section>
    )
}
