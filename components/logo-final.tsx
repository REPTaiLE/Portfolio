"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Montserrat } from "next/font/google"
import { useLoader } from "@/contexts/LoaderContext"
import { useRouter } from "next/navigation"

const logoFont = Montserrat({ subsets: ["latin"], weight: ["700"] })

interface LogoProps {
  className?: string
}

export default function Logo({ className }: LogoProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const textRef = useRef<HTMLDivElement>(null)
  const { showLoader } = useLoader()
  const router = useRouter()

  useEffect(() => {
    if (isHovered && !isAnimating) {
      setIsAnimating(true)
    } else if (!isHovered && isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false)
      }, 700)
      return () => clearTimeout(timer)
    }
  }, [isHovered, isAnimating])

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    showLoader()
    router.push("/")
  }

  return (
    <Link
      href="/"
      className={`inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleLogoClick}
    >
      <div className={`relative font-bold text-2xl overflow-hidden ${logoFont.className}`}>
        <span className="text-blue-600">FG</span>

        <div
          ref={textRef}
          className="absolute inset-0 overflow-hidden"
          style={{
            clipPath: isHovered ? "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" : "polygon(0 0, 0% 0, 0% 100%, 0% 100%)",
            transition: "clip-path 0.7s cubic-bezier(0.19, 1, 0.22, 1)",
          }}
        >
          <div
            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
            style={{
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            FG
          </div>

          {isAnimating && (
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              style={{
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                backgroundSize: "200% 100%",
                animation: "waveMove 1s ease-out",
                animationDelay: "0.1s",
              }}
            >
              FG
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

