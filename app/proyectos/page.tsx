"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const allProjects = [
  {
    id: "1",
    title: "Ne0nB1t",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-vyblVBujywvZHEBbIBDSCmHRh2Aknl.png",
    description:
      "Tienda en línea de accesorios tecnológicos con diseño cyberpunk y minimalista. Experiencia de compra moderna y atractiva para productos tech.",
    tags: ["Liquid", "Shopify Apps", "Shopify"],
    url: "https://ne0nb1t.com",
  },
  {
    id: "2",
    title: "Constanza Ferrada Studio",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon.jpg-yZD9gU6nwGYlyqT8sTqEu5sVj47TCD.jpeg",
    description:
      "Sitio web moderno y elegante para el estudio de maquillaje profesional de Constanza Ferrada, con diseño responsivo y estética única.",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    url: "https://constanza-ferrada-studio.vercel.app",
  },
]

export default function ProyectosPage() {
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0)
    }
  }, [])

  const handleBackClick = () => {
    router.push("/")

    setTimeout(() => {
      const homeSection = document.getElementById("home")
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="container px-4 md:px-6">
        <div className="flex justify-start mb-8">
          <Button
            variant="outline"
            size="sm"
            className="transition-all duration-300 hover:scale-105 hover:shadow-md"
            onClick={handleBackClick}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Mi Trabajo</h1>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {allProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
            >
              <Card className="overflow-hidden h-full group hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full"
                      onClick={() => window.open(project.url, "_blank")}
                    >
                      <ArrowUpRight className="h-5 w-4" />
                    </Button>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-sm transition-all duration-300 hover:shadow-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

