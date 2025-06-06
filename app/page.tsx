import { ClientWrapper } from "@/components/client-wrapper"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <ClientWrapper>
      <main className="min-h-screen">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </main>
    </ClientWrapper>
  )
}
