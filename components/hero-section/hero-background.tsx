import KeralaParticleMap from "./kerala-particle-map"

export default function HeroBackground() {
    return (

        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-gray-900 via-[#0a0a0a] to-black">
            {/* Animated gradient orbs */}
            <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse-glow animation-delay-1000 will-change-transform" />

            <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-drift animation-delay-2000 will-change-transform" />
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow animation-delay-3000 will-change-transform" />
            <div className="absolute inset-0 overflow-hidden flex items-center justify-center opacity-40">
                <KeralaParticleMap />
            </div>
        </div>
    )
}
