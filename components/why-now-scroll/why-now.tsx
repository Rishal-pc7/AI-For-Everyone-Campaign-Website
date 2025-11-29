import { MotionValue } from "framer-motion";
import { AnimatedDiv, AnimatedHeading } from "../shared/animation-wrapper";
export default function WhyNow({children,legacyOpacity}: {children: React.ReactNode, legacyOpacity: MotionValue<number>}) {
    return (
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                {/* Fixed Heading */}
                <AnimatedDiv
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute top-20 left-0 right-0 z-30 text-center px-4"
                >
                    <h3 className="text-2xl md:text-4xl font-bold font-heading bg-linear-to-r from-accent via-primary to-accent bg-clip-text text-transparent pb-2">
                        Why Now?
                    </h3>
                </AnimatedDiv>
                {/* Stage 1: The Legacy - Retro Terminal */}
                <AnimatedDiv
                    style={{
                        opacity: legacyOpacity,
                        willChange: "transform, opacity",
                    }}
                    className="absolute inset-0 flex items-center justify-center px-6 md:px-8"
                >
                    <AnimatedHeading
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-8xl font-black font-heading text-muted-foreground text-center leading-tight"
                    >
                        1990: WE CHAMPIONED<br />DIGITAL LITERACY.
                    </AnimatedHeading>
                </AnimatedDiv>
                {children}
            </div>
    )
}