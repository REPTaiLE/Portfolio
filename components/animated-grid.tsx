"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export const AnimatedGrid = () => {
  const { theme } = useTheme()

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, ${
            theme === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"
          } 1px, transparent 1px), 
          linear-gradient(to bottom, ${
            theme === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"
          } 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
        animate={{
          scale: [1, 1.02, 1],
          x: [0, -10, 0],
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 20,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}

