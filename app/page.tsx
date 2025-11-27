import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import TransformationSection from "@/components/transformation-section"
import SmartSelector from "@/components/smart-selector"
import PhilosophySection from "@/components/philosophy-section"
import PartnerSection from "@/components/partner-section"
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
        <SmartSelector />
        <PhilosophySection />
        <PartnerSection />
        <Footer />
      </div>
    </main>
  )
}
