"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  // Mostrar el botón cuando el usuario ha scrolleado hacia abajo
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div
      className={cn(
        "fixed bottom-8 right-8 z-40 transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
    >
      <Button
        variant="outline"
        size="icon"
        className="rounded-full shadow-md bg-background/80 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-blue-600/10 hover:border-blue-600/50"
        onClick={scrollToTop}
        aria-label="Volver arriba"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </div>
  )
}

