"use client"

import { Button } from "@/components/ui/button"
import { FileText, Send, ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Adjust if you have a fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[650px] lg:min-h-[700px] w-full overflow-hidden">
      {/* Background with improved overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.jpg')" }}
      />

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f1c24]/90 via-[#1a2f3b]/80 to-[#1a2f3b]/70" />

      {/* Content container */}
      <div className="container relative mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-28 h-full flex flex-col justify-center">
        <div className="max-w-3xl text-white">
          {/* Animated tagline */}
          <p
            className="mb-4 sm:mb-6 text-xs sm:text-sm uppercase tracking-[0.25em] text-emerald-300 font-medium opacity-0 animate-fadeIn"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            SEGURANÇA, AGILIDADE E PRODUTIVIDADE
          </p>

          {/* Responsive heading */}
          <h1
            className="mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] opacity-0 animate-fadeIn"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            CONTABILIDADE
            <br />
            <span className="text-emerald-400">DIGITAL</span>
          </h1>

          {/* Description with better readability */}
          <p
            className="mb-8 sm:mb-10 md:mb-12 text-base sm:text-lg leading-relaxed text-gray-100 opacity-0 animate-fadeIn"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            Somos papel zero, investimos em inteligência artificial, na robotização e no armazenamento de dados nas
            nuvens para que nossos clientes tenham análises assertivas e informações precisas sobre os seus negócios.
          </p>

          {/* Responsive button layout with smooth scroll */}
          <div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 opacity-0 animate-fadeIn"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            <Button
              variant="outline"
              className="h-12 sm:h-14 border-2 border-white px-4 sm:px-6 md:px-8 text-white bg-transparent transition-all duration-300 text-xs sm:text-sm md:text-base"
              onClick={() => scrollToSection("segmentos")}
            >
              <FileText className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
              <span className="truncate">CONHEÇA A HR CONTABILIDADE</span>
            </Button>
            <Button
              className="h-12 sm:h-14 px-4 sm:px-6 md:px-8 bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 text-xs sm:text-sm md:text-base"
              onClick={() => scrollToSection("contato")}
            >
              <Send className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
              SOLICITAR PROPOSTA
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${scrolled ? "opacity-0" : "opacity-100"}`}
      >
        <div className="flex flex-col items-center text-white">
          <span className="text-xs mb-2 text-gray-300">Rolar para baixo</span>
          <ChevronDown className="h-6 w-6 animate-bounce text-emerald-400" />
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  )
}

