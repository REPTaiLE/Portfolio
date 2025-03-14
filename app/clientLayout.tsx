"use client"

import type React from "react"
import { useEffect, useState, Suspense } from "react"
import { Mona_Sans as FontSans } from "next/font/google"
import { usePathname } from "next/navigation"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider-enhanced"
import { cn } from "@/lib/utils"
import ScrollToTopButton from "@/components/scroll-to-top-button"
import { ScrollRestoration } from "@/components/scroll-restoration"
import Loader from "@/components/Loader"
import { LoaderProvider, useLoader } from "@/contexts/LoaderContext"
import CursorGlow from "@/components/cursor-glow"
import { useIsDesktop } from "@/hooks/use-is-desktop"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

function ClientLayoutContent({ children }: { children: React.ReactNode }) {
  const { isLoading, setIsLoading } = useLoader()
  const [isContentVisible, setIsContentVisible] = useState(false)
  const pathname = usePathname()
  const isDesktop = useIsDesktop()

  useEffect(() => {
    const handleRouteChange = () => {
      if (!pathname.includes("#")) {
        setIsLoading(true)
        // Simulate a delay to show the loader
        setTimeout(() => {
          setIsLoading(false)
          setIsContentVisible(true)
        }, 500)
      }
    }

    handleRouteChange() // Call on initial load
  }, [pathname, setIsLoading])

  return (
    <html lang="es" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {isLoading && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
              <Loader />
            </div>
          )}
          <div className={cn("relative flex min-h-screen flex-col", isContentVisible ? "opacity-100" : "opacity-0")}>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ScrollToTopButton />
          </div>
          {!isLoading && isDesktop && <CursorGlow />}
        </ThemeProvider>
        <Suspense fallback={null}>
          <ScrollRestoration />
        </Suspense>
      </body>
    </html>
  )
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LoaderProvider>
      <ClientLayoutContent>{children}</ClientLayoutContent>
    </LoaderProvider>
  )
}

