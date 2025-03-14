"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Ne0nB1t",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-ZUQkFaThTmH1Rbmr8HKzt1eJYGJnkU.png",
    description:
      "Tienda online de productos tecnológicos con diseño minimalista y moderno. Plataforma e-commerce especializada en accesorios tech de alta calidad.",
    tags: ["Next.js", "React", "Tailwind CSS", "Stripe", "Sanity.io"],
    url: "https://ne0nb1t.com",
  },
  {
    id: 2,
    title: "Constanza Ferrada Studio",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon.jpg-yZD9gU6nwGYlyqT8sTqEu5sVj47TCD.jpeg",
    description:
      "Sitio web moderno y elegante para el estudio de maquillaje profesional de Constanza Ferrada, con diseño responsivo y estética única.",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    url: "https://constanza-ferrada-studio.vercel.app",
  },
]

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Proyectos Destacados</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explora algunos de mis trabajos recientes y soluciones creativas
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
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
                      <ArrowUpRight className="h-5 w-5" />
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
        </div>

        <div className="flex justify-center">
          <Link href="/proyectos">
            <Button variant="outline" size="lg" className="transition-all duration-300 hover:scale-105 hover:shadow-md">
              Ver Todos los Proyectos
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

