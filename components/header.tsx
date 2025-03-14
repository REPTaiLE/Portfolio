"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { Menu, X, Linkedin, Github } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { useIsMobile } from "@/hooks/use-mobile"
import { useActiveSection } from "@/hooks/use-active-section"
import Logo from "./logo-final"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { useLoader } from "@/contexts/LoaderContext"

const navItems = [
  { name: "Servicios", href: "/#services", section: "services" },
  { name: "Portafolio", href: "/#portfolio", section: "portfolio" },
  { name: "Sobre Mí", href: "/#about", section: "about" },
  { name: "Contacto", href: "/#contact", section: "contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isMobile = useIsMobile()
  const activeSection = useActiveSection()
  const isProjectsPage = pathname === "/proyectos"
  const { theme } = useTheme()
  const { isLoading } = useLoader()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      if (isMenuOpen) setIsMenuOpen(false)
      const headerOffset = 100 // Ajusta este valor según la altura de tu header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  if (isLoading) {
    return null // No renderizar el header cuando está cargando
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          isScrolled ? "bg-background/80 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-5",
        )}
      >
        <div className="container flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {!isProjectsPage &&
              navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.section)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative py-2",
                    item.section === activeSection ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {item.name}
                  {item.section === activeSection && (
                    <motion.span
                      className="absolute bottom-0 left-0 h-0.5 bg-primary"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              ))}

            {/* Social Media Icons */}
            <a
              href="https://www.linkedin.com/in/francisco-arnoldo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://github.com/REPTaiLE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>

            <ModeToggle />
            {!isProjectsPage && (
              <Button
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-md"
                onClick={() => window.open("https://calendly.com/gonzalezferradafrancisco", "_blank")}
              >
                Hablemos!
              </Button>
            )}
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center md:hidden">
            <ModeToggle />
            <Button variant="ghost" size="icon" className="ml-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{
              backgroundColor: theme === "dark" ? "rgba(0, 0, 0, 0.95)" : "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Cerrar menú"
            >
              <X size={24} className="text-gray-800 dark:text-white" />
            </motion.button>

            <nav className="flex flex-col space-y-6 p-6 w-full max-w-sm">
              {!isProjectsPage &&
                navItems.map((item) => (
                  <motion.div key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <a
                      href={`#${item.section}`}
                      className={cn(
                        "text-lg font-medium py-2 px-4 rounded-md transition-colors block text-center",
                        item.section === activeSection
                          ? "bg-primary text-primary-foreground"
                          : theme === "dark"
                            ? "text-white hover:bg-gray-800"
                            : "text-gray-800 hover:bg-gray-200",
                      )}
                      onClick={(e) => handleNavClick(e, item.section)}
                    >
                      {item.name}
                    </a>
                  </motion.div>
                ))}

              {/* Social Media Icons in Mobile Menu */}
              <div className="flex justify-center space-x-6 pt-4">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.linkedin.com/in/francisco-arnoldo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={theme === "dark" ? "text-white hover:text-blue-400" : "text-gray-800 hover:text-blue-600"}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/REPTaiLE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={theme === "dark" ? "text-white hover:text-blue-400" : "text-gray-800 hover:text-blue-600"}
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </motion.a>
              </div>

              {!isProjectsPage && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-4">
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                    onClick={() => {
                      setIsMenuOpen(false)
                      window.open("https://calendly.com/gonzalezferradafrancisco", "_blank")
                    }}
                  >
                    Hablemos!
                  </Button>
                </motion.div>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

