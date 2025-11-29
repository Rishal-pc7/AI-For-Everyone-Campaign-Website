import { FeatureCard } from "./FeatureCard";
import { AnimatedDiv } from "../shared/animation-wrapper";
export const EmpoweringSection = () => {
  const CardsData: {icon:string,headline:string,body:string,glowColor:"teal"|"amber"|"purple",delay?:number}[]=[
    {
      icon:"ShieldCheck",
      headline:"Safety in a Digital World",
      body:"AI isn't just about robots. It's about protecting our elders from deepfakes and scams. We give people the tools to pause, question, and verify what they see online.",
      glowColor:"teal",
      delay:0
    },
    {
      icon:"Briefcase",
      headline:"Future-Proof Careers",
      body:"The workplace is changing. We help students and professionals move from being 'users' of tools to 'builders' of solutions, opening doors to the global creator economy.",
      glowColor:"amber",
      delay:0.1
    },
    {
      icon:"Globe",
      headline:"Knowledge for All",
      body:"Technology shouldn't leave anyone behind. We are building open, multilingual learning circles in every neighborhood, ensuring AI literacy is a public good, not a luxury.",
      glowColor:"purple",
      delay:0.2
    }

  ]
  return (
    <section id="about" className="relative pt-24 md:py-20 py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-background/95 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <AnimatedDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-primary via-accent to-glow-teal bg-clip-text text-transparent">
            How AI Empowers Everyday Lives
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Moving beyond the buzzwords to solve real human problems.
          </p>
        </AnimatedDiv>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CardsData.map((card,index)=>(
            <FeatureCard
            key={index}
            icon={card.icon}
            headline={card.headline}
            body={card.body}
            glowColor={card.glowColor}
            delay={card.delay}
            />
          ))}
         
        </div>
      </div>
    </section>
  );
};
