"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollRestoration() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === "/proyectos") {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return null
}

