"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { AnimatedGrid } from "./animated-grid"

export default function HeroSection() {
  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)

    if (element) {
      // Use scrollIntoView without changing the URL
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative w-full py-24 md:py-32 overflow-hidden">
      <AnimatedGrid />
      <div className="absolute inset-0 flex items-center justify-center -z-10" aria-hidden="true">
        <div className="bg-blue-900/20 dark:bg-blue-900/30 w-[50%] h-[30%] rounded-full blur-[100px]" />
      </div>

      <div className="container px-4 md:px-6 py-12 md:py-24 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="space-y-4 max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 px-2 pb-3 mb-2 leading-relaxed"
            >
              Transformando Ideas en Experiencias Digitales
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-muted-foreground md:text-xl mx-auto"
            >
              Creando sitios web y soluciones hermosas y funcionales que elevan tu marca.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-6"
            >
              <Button
                className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-md"
                onClick={(e) => handleNavClick(e, "portfolio")}
              >
                Mi Trabajo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="transition-all duration-300 hover:scale-105 hover:shadow-md"
                onClick={(e) => handleNavClick(e, "contact")}
              >
                Contáctame
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

