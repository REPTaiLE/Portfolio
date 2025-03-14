"use client"

import { useState, useEffect } from "react"

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024) // Consider desktop from 1024px
    }

    handleResize() // Initial check
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return isDesktop
}

