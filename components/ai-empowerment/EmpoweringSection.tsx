"use client"
import { motion } from "framer-motion";
import { ShieldCheck, Briefcase, Globe } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

export const EmpoweringSection = () => {
  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-glow-teal bg-clip-text text-transparent">
            How AI Empowers Everyday Lives
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Moving beyond the buzzwords to solve real human problems.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: The Shield */}
          <FeatureCard
            icon={ShieldCheck}
            headline="Safety in a Digital World"
            body="AI isn't just about robots. It's about protecting our elders from deepfakes and scams. We give people the tools to pause, question, and verify what they see online."
            glowColor="teal"
            delay={0}
            backgroundEffect={
              <div className="scanning-grid absolute inset-0" />
            }
          />

          {/* Card 2: The Key */}
          <FeatureCard
            icon={Briefcase}
            headline="Future-Proof Careers"
            body="The workplace is changing. We help students and professionals move from being 'users' of tools to 'builders' of solutions, opening doors to the global creator economy."
            glowColor="amber"
            delay={0.1}
            backgroundEffect={
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M 0,50 L 20,45 L 40,55 L 60,40 L 80,50 L 100,35"
                  stroke="hsl(var(--glow-amber))"
                  strokeWidth="0.5"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.3 }}
                  transition={{ duration: 2, delay: 0.3 }}
                />
                <motion.polygon
                  points="60,40 80,50 100,35 100,100 0,100 0,50 20,45 40,55"
                  fill="hsl(var(--glow-amber) / 0.05)"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </svg>
            }
          />

          {/* Card 3: The Bridge */}
          <FeatureCard
            icon={Globe}
            headline="Knowledge for All"
            body="Technology shouldn't leave anyone behind. We are building open, multilingual learning circles in every neighborhood, ensuring AI literacy is a public good, not a luxury."
            glowColor="purple"
            delay={0.2}
            backgroundEffect={
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 200 200"
              >
                {/* Network nodes */}
                {[
                  { cx: 50, cy: 50 },
                  { cx: 150, cy: 50 },
                  { cx: 100, cy: 100 },
                  { cx: 50, cy: 150 },
                  { cx: 150, cy: 150 },
                ].map((node, i) => (
                  <motion.circle
                    key={i}
                    cx={node.cx}
                    cy={node.cy}
                    r="3"
                    fill="hsl(var(--glow-purple))"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 0.6, scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  />
                ))}
                {/* Connection lines */}
                <motion.line
                  x1="50"
                  y1="50"
                  x2="150"
                  y2="50"
                  stroke="hsl(var(--glow-purple))"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
                <motion.line
                  x1="50"
                  y1="50"
                  x2="100"
                  y2="100"
                  stroke="hsl(var(--glow-purple))"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                />
                <motion.line
                  x1="150"
                  y1="50"
                  x2="100"
                  y2="100"
                  stroke="hsl(var(--glow-purple))"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.line
                  x1="100"
                  y1="100"
                  x2="50"
                  y2="150"
                  stroke="hsl(var(--glow-purple))"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
                <motion.line
                  x1="100"
                  y1="100"
                  x2="150"
                  y2="150"
                  stroke="hsl(var(--glow-purple))"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};
