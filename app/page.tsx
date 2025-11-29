import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AIEmpowerment from "@/components/ai-empowerment"
import WhyNowScroll from "@/components/why-now-scroll"
import ChooseJourney from "@/components/choose-journey"
import PhilosophyTriangle from "@/components/philosophy"
import PartnerEcosystem from "@/components/partner-ecosystem"
import CollaborationModes from "@/components/collaboration-modes"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AIEmpowerment />
        <WhyNowScroll />
        <PhilosophyTriangle />
        <ChooseJourney />
        <PartnerEcosystem />
        <CollaborationModes />
        <Footer />
      </div>
    </main>
  )
}
