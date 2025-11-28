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
        <div className="relative w-full h-[500px] -rotate-15 md:h-[700px] flex items-center justify-center">

            {/* 1. The Particle Container */}
            {init && (
                <div
                    className="w-full h-full mask-center mask-size-contain transition-transform duration-500 md:-translate-x-26"
                    style={{
                        maskImage: "url('/images/kerala-mask.png')",
                        WebkitMaskImage: "url('/images/kerala-mask.png')",
                        maskSize: "contain",
                        WebkitMaskSize: "contain",
                        maskRepeat: "no-repeat",
                        maskPosition: "center"
                    }}
                >
                    <Particles
                        id="kerala-particles"
                        options={{
                            background: { color: "transparent" },
                            detectRetina: true,
                            particles: {
                                color: { value: "#2dd4bf" },
                                links: {
                                    color: "#2dd4bf",
                                    distance: 150,
                                    enable: true,
                                    opacity: 0.5,
                                    width: 1,
                                },
                                move: { enable: true, speed: 1 },
                                number: { value: 150 },
                                opacity: { value: 0.7 },
                                size: { value: { min: 1, max: 3 } },
                            },
                            interactivity: {
                                events: {
                                    onHover: { enable: true, mode: "grab" },
                                },
                            },
                            responsive: [
                                {
                                    maxWidth: 768,
                                    options: {
                                        particles: {
                                            number: { value: 40 }, // Lower count for mobile
                                            links: { distance: 100 } // Shorter links for mobile
                                        },
                                    },
                                },
                            ],
                        }}
                        className="w-full h-full"
                    />
                </div>
            )}

            {/* Static Kerala Map Image */}
            <img
                src="/images/kerala-mask.png"
                className="absolute w-auto h-full opacity-70 pointer-events-none drop-shadow-[0_0_15px_rgba(45,212,191,0.5)] transition-transform duration-500 md:-translate-x-26"
            />
        </div>
    );
}