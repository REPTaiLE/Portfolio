"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface LoaderContextType {
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  showLoader: () => void
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined)

export const LoaderProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  useEffect(() => {
    if (isInitialLoad) {
      const timer = setTimeout(() => {
        setIsLoading(false)
        setIsInitialLoad(false)
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [isInitialLoad])

  const showLoader = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 500) // Show loader for 500ms
  }

  return <LoaderContext.Provider value={{ isLoading, setIsLoading, showLoader }}>{children}</LoaderContext.Provider>
}

export const useLoader = () => {
  const context = useContext(LoaderContext)
  if (context === undefined) {
    throw new Error("useLoader must be used within a LoaderProvider")
  }
  return context
}

