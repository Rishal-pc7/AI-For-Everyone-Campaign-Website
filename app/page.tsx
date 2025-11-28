import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import TransformationSection from "@/components/transformation-section"
import ChooseJourney from "@/components/choose-journey"
import PhilosophySection from "@/components/philosophy-section"
import PartnerEcosystem from "@/components/partner-ecosystem"
import CollaborationModes from "@/components/collaboration-modes"
import Footer from "@/components/footer"
import Objectives from "@/components/Objectives"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <TransformationSection />
        <Objectives />
        <ChooseJourney />
        <PhilosophySection />
        <PartnerEcosystem />
        <CollaborationModes />
        <Footer />
      </div>
    </main>
  )
}
