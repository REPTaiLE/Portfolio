"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useIsDesktop } from "@/hooks/use-is-desktop"

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const [isVisible, setIsVisible] = useState(false)
  const { theme } = useTheme()
  const isDesktop = useIsDesktop()

  useEffect(() => {
    if (!isDesktop) return // Do nothing if not a desktop device

    // Small delay to prevent the glow from appearing at the initial position
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      clearTimeout(timer)
    }
  }, [isDesktop])

  // Determine opacity based on theme
  const glowOpacity = theme === "dark" ? 0.4 : 0.6

  if (!isVisible || !isDesktop) return null

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 9999 }}
    >
      <motion.div
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300, mass: 0.5 }}
        style={{
          width: "40px",
          height: "40px",
          background: `radial-gradient(circle, rgba(147, 51, 234, ${glowOpacity}) 0%, rgba(147, 51, 234, 0) 70%)`,
          filter: "blur(10px)",
          opacity: 1,
        }}
      />
      <motion.div
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.8 }}
        style={{
          width: "80px",
          height: "80px",
          background: `radial-gradient(circle, rgba(147, 51, 234, ${glowOpacity / 2}) 0%, rgba(147, 51, 234, 0) 70%)`,
          filter: "blur(15px)",
          opacity: 0.8,
        }}
      />
    </motion.div>
  )
}

