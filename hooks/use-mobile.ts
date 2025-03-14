"use client"

import { useState, useEffect } from "react"

export function useDeviceType() {
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024) // Consideramos escritorio a partir de 1024px
    }

    handleResize() // Comprobación inicial
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return { isDesktop, isMobile: !isDesktop }
}

export function useIsMobile() {
  const { isMobile } = useDeviceType()
  return isMobile
}

