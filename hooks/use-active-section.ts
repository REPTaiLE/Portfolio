"use client"

import { useState, useEffect } from "react"

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const sections = ["services", "portfolio", "about", "contact"]

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3 // Ajustamos el punto de activación

      // Comprobamos las secciones
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        const element = document.getElementById(section)
        if (!element) continue

        const rect = element.getBoundingClientRect()
        const topOffset = rect.top + window.scrollY

        if (scrollPosition >= topOffset) {
          setActiveSection(section)
          return
        }
      }

      // Si no se ha activado ninguna sección, no establecemos ninguna como activa
      setActiveSection("")
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Comprobación inicial

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return activeSection
}

