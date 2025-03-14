"use client"

import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 focus:outline-none"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        initial={false}
        animate={{
          scale: theme === "dark" ? 1 : 0,
          opacity: theme === "dark" ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Sun className="w-6 h-6 text-yellow-400 transition-all duration-150 ease-out hover:text-yellow-200 hover:scale-105" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          scale: theme === "dark" ? 0 : 1,
          opacity: theme === "dark" ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Moon className="w-6 h-6 text-blue-400 transition-all duration-150 ease-out hover:text-blue-200 hover:scale-105" />
      </motion.div>
    </button>
  )
}

