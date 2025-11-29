import PhilosophyMobile from "./philosophyClient";
import PhilosophyLgDevices from "./philosophyLgDevices";
export default function PhilosophyTriangle(){
    const DATA = [
        {
            id: "head",
            title: "HEAD",
            subtitle: "Understand",
            description: "Grasp the logic behind AI & why it matters.",
            color: "text-cyan-400",
            bg: "bg-cyan-500/10",
            border: "border-cyan-500/20",
            position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2", // Top Center
        },
        {
            id: "hand",
            title: "HAND",
            subtitle: "Build",
            description: "Create tools using GenAI & solve local problems.",
            color: "text-purple-400",
            bg: "bg-purple-500/10",
            border: "border-purple-500/20",
            position: "bottom-10 right-0 translate-x-1/3", // Bottom Right
        },
        {
            id: "heart",
            title: "HEART",
            subtitle: "Mentor",
            description: "Share knowledge & shape an inclusive future.",
            color: "text-amber-400",
            bg: "bg-amber-500/10",
            border: "border-amber-500/20",
            position: "bottom-10 left-0 -translate-x-1/3", // Bottom Left
        },
    ];
    return (
        <section id="philosophy" className="relative w-full py-24 overflow-hidden flex flex-col items-center justify-center">
            {/* Section Header */}
            <div className="text-center md:mb-44 relative z-10 px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 pb-2 bg-linear-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                    Our Approach
                </h2>
                <p className="text-gray-400 max-w-lg mx-auto">
                    True learning isn't just theory. We engage the whole person.
                </p>
            </div>
            <PhilosophyLgDevices DATA={DATA} />
            <PhilosophyMobile DATA={DATA} />
        </section>
    )
}


