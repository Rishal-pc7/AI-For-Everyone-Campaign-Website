import { Briefcase, Globe, LucideIcon, ShieldCheck } from "lucide-react";
import { AnimatedDiv } from "../shared/animation-wrapper";

interface FeatureCardProps {
  key:string|number
  icon:string
  headline: string;
  body: string;
  glowColor: "teal" | "amber" | "purple";
  delay?: number;
}

export const FeatureCard = ({
  key,
  icon,
  headline,
  body,
  glowColor,
  delay = 0,
}: FeatureCardProps) => {
  const glowColorMap = {
    teal: "text-glow-teal group-hover:border-glow-teal/50",
    amber: "text-glow-amber group-hover:border-glow-amber/50",
    purple: "text-glow-purple group-hover:border-glow-purple/50",
  };
  const Icon= icon=="ShieldCheck"? ShieldCheck:icon=="Briefcase"? Briefcase: Globe
  return (
    <AnimatedDiv
      
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
      className="group relative glass-card rounded-xl p-8 transition-all duration-300 hover:border-opacity-50 overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-6">
          <Icon
            className={`w-12 h-12 transition-all duration-300 ${
              glowColorMap[glowColor].split(" ")[0]
            }`}
            strokeWidth={1.5}
          />
        </div>

        {/* Headline */}
        <h3 className="text-2xl font-bold mb-4 text-foreground">{headline}</h3>

        {/* Body */}
        <p className="text-muted-foreground leading-relaxed">{body}</p>
      </div>

      {/* Animated border on hover */}
      <div
        className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
          glowColorMap[glowColor].split(" ")[1]
        }`}
        style={{
          background: `linear-gradient(135deg, transparent 40%, ${
            glowColor === "teal"
              ? "hsl(var(--glow-teal) / 0.1)"
              : glowColor === "amber"
              ? "hsl(var(--glow-amber) / 0.1)"
              : "hsl(var(--glow-purple) / 0.1)"
          })`,
        }}
      />
    </AnimatedDiv>
  );
};
