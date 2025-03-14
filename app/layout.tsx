import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./clientLayout"
import "./globals.css"

export const metadata: Metadata = {
  title: "Francisco González | Desarrollador Web",
  description:
    "Servicios profesionales de desarrollo web especializados en sitios web modernos y responsivos y aplicaciones web",
  keywords: "desarrollo web, portafolio, diseño web, diseño responsivo, UI/UX, React, Next.js, Francisco González",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.ico", // Para favicon estándar
    shortcut: "/favicon.ico", // Para navegadores que usan "shortcut icon"
    // apple: "/apple-touch-icon.png", // Para dispositivos Apple
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}



import './globals.css'