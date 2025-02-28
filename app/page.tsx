import { HeroSection } from "@/components/hero-section"
import { SegmentsSection } from "@/components/segments-section"
import { ServicesSection } from "@/components/services-section"
import { StatsSection } from "@/components/stats-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <SegmentsSection />
      <ServicesSection />
      <ContactSection />
      <StatsSection />
    </>
  )
}

