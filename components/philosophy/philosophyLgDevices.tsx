import { BrainCircuit, Hammer, HeartHandshake, Sparkles } from "lucide-react";
import { AnimatedDiv, AnimatedSvg } from "../shared/animation-wrapper";
type DataProps={
    id:string,
    title:string,
    subtitle:string,
    description:string,
    color:string,
    bg:string,
    border:string,
    position:string
}
export default function PhilosophyLgDevices({DATA}: {DATA: DataProps[]}){
    return (
        <div className="relative w-[600px] h-[600px] hidden md:flex items-center justify-center">

                {/* 1. The Orbit Rings (Background) */}
                <div className="absolute inset-0 rounded-full border border-white/5 animate-spin-slow-reverse" />
                <div className="absolute inset-10 rounded-full border border-teal-500/10 animate-spin-slow" />

                {/* 2. The Connecting SVG Lines (Triangle) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                    <AnimatedSvg
                        d="M300 50 L500 500 L100 500 Z"
                        stroke="#2dd4bf"
                        strokeWidth="1"
                        strokeDasharray="8 8"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    {/* Floating Line Effect */}
                    <AnimatedSvg
                        d="M300 50 L500 500 L100 500 Z"
                        stroke="#2dd4bf"
                        strokeWidth="2"
                        strokeLinecap="round"
                        filter="drop-shadow(0 0 4px #2dd4bf)"
                        initial={{ strokeDasharray: "100 1500", strokeDashoffset: 0, opacity: 0 }}
                        animate={{ strokeDashoffset: -1600, opacity: [0, 1, 1, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </svg>

                {/* 3. The Central Core */}
                <div className="relative z-20 flex flex-col items-center justify-center w-40 h-40 bg-black/50 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_0_50px_rgba(45,212,191,0.2)]">
                    <Sparkles className="w-8 h-8 text-white mb-2 animate-pulse" />
                    <span className="text-sm font-bold text-white">RESPONSIBLE</span>
                    <span className="text-xs font-mono text-teal-200 tracking-widest">AI</span>
                </div>

                {/* 4. The 3 Orbiting Nodes */}
                {DATA.map((item) => {
                    const Icon= item.id=="head" ? BrainCircuit : item.id=="hand" ? Hammer : HeartHandshake;

                    return(
                    <AnimatedDiv
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                        className={`absolute ${item.position} w-80 p-6 rounded-2xl border backdrop-blur-md ${item.bg} ${item.border} flex flex-col items-center text-center group cursor-pointer transition-all duration-300 z-30`}
                    >
                        <div className={`p-3 rounded-full bg-black/50 mb-3 ${item.color} group-hover:bg-white/10 transition-colors`}>
                            <Icon size={32} />
                        </div>
                        <h3 className={`text-2xl font-bold mb-1 ${item.color}`}>{item.title}</h3>
                        <span className="text-white font-medium text-base mb-2 block">{item.subtitle}</span>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </AnimatedDiv>
                )})}
            </div>
    )
}            