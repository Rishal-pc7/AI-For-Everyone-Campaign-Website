import { BrainCircuit, Hammer, HeartHandshake, Sparkles } from "lucide-react";
import { AnimatedButton } from "../shared/animation-wrapper";

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

export function OrbitingIcons({ DATA,active, onSelect, onInteractionStart, onInteractionEnd }: {DATA: DataProps[], active: string, onSelect: (id: string) => void, onInteractionStart: () => void, onInteractionEnd: () => void }) {
    // Simple circular positioning for 3 items
    // 0 deg (top), 120 deg (bottom right), 240 deg (bottom left)
    // Adjusting to match the visual triangle: Top, Bottom Right, Bottom Left

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none">
            {DATA.map((item, index) => {
                // Calculate position on a circle of radius 140px (approx half of h-72 container)
                // -90 deg is top. 
                // Index 0 (Head) -> -90 deg
                // Index 1 (Hand) -> 30 deg (120 deg from top)
                // Index 2 (Heart) -> 150 deg (240 deg from top)

                const angleDeg = -90 + (index * 120);
                const angleRad = (angleDeg * Math.PI) / 180;
                const radius = 140; // Distance from center

                // Center of container is 50%, 50%
                // x = r * cos(theta)
                // y = r * sin(theta)

                const x = radius * Math.cos(angleRad);
                const y = radius * Math.sin(angleRad);

                const isActive = active === item.id;
                const Icon= item.id === "head" ? BrainCircuit : item.id === "hand" ? Hammer : HeartHandshake;
                return (
                    <div
                        key={item.id}
                        className="absolute top-1/2 left-1/2 pointer-events-auto"
                        style={{
                            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                        }}
                    >
                        <AnimatedButton
                            whileTap={{ scale: 0.9 }}
                            onClick={()=>onSelect(item.id)}
                            onTouchStart={onInteractionStart}
                            onFocus={onInteractionStart}
                            onBlur={onInteractionEnd}
                            onTouchEnd={onInteractionEnd}
                            className={`p-4 rounded-full border backdrop-blur-md transition-all duration-300 ${isActive
                                ? `bg-white/10 ${item.border} scale-125 shadow-[0_0_20px_rgba(255,255,255,0.3)]`
                                : `bg-black/40 border-white/5 opacity-70 hover:opacity-100`
                                }`}
                        >
                            <Icon size={40} className={item.color} />
                        </AnimatedButton>
                    </div>
                );
            })}
        </div>
    );
}
