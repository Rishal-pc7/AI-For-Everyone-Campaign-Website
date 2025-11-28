"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function KeralaParticleMap() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => setInit(true));
    }, []);

    return (
        <div className="relative w-full  h-[500px] md:h-[600px] flex items-center justify-center -rotate-15">

            {/* Optional: Add a glowing outline behind it so the shape is visible even if particles move away */}
            <img
                src="/images/kerala-mask.png"
                alt="Kerala Map Outline"
                className="absolute w-auto h-full opacity-60 pointer-events-none drop-shadow-[0_0_20px_rgba(45,212,191,0.6)] translate-x-0   lg:-translate-x-16 transition-transform duration-500"
            />

            {/* 1. The Particle Container */}
            {init && (
                <div
                    className="w-full h-full [mask-center] lg:[mask-[calc(50%-4rem)_center]] [-webkit-mask-position:center] lg:[-webkit-mask-position:calc(50%-4rem)_center]"
                    style={{
                        maskImage: "url('/images/kerala-mask.png')",
                        WebkitMaskImage: "url('/images/kerala-mask.png')",
                        maskSize: "contain",
                        WebkitMaskSize: "contain",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                    }}
                >
                    <Particles
                        id="kerala-particles"
                        options={{
                            fullScreen: { enable: false },
                            background: { color: "transparent" }, // Void background
                            particles: {
                                color: { value: "#2dd4bf" }, // Teal dots
                                links: {
                                    color: "#2dd4bf", // Teal lines
                                    distance: 150,
                                    enable: true,
                                    opacity: 0.5,
                                    width: 1,
                                },
                                move: { enable: true, speed: 1 }, // Slow float
                                number: { value: 150 }, // Density
                                opacity: { value: 0.7 },
                                size: { value: { min: 1, max: 3 } },
                            },
                            interactivity: {
                                events: {
                                    onHover: { enable: true, mode: "grab" }, // Connect to mouse
                                },
                            },
                            detectRetina: true,
                            responsive: [
                                {
                                    maxWidth: 768,
                                    options: {
                                        particles: {
                                            number: {
                                                value: 100, // Reduced density for mobile
                                            },
                                            links: {
                                                distance: 50, // Shorter links for mobile
                                            }
                                        },
                                    },
                                },
                            ],
                        }}
                        className="w-full h-full"
                    />
                </div>
            )}
        </div>
    );
}
