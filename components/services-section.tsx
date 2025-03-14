"use client"

import { motion } from "framer-motion"
import { Code, Layout, Smartphone, Globe, Zap, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Layout className="h-10 w-10 mb-4 text-blue-600" />,
    title: "Diseño Web",
    description: "Creación de diseños hermosos e intuitivos que mejoran la experiencia y el compromiso del usuario.",
  },
  {
    icon: <Code className="h-10 w-10 mb-4 text-blue-600" />,
    title: "Desarrollo Web",
    description: "Construcción de sitios web y aplicaciones robustas y escalables utilizando tecnologías modernas.",
  },
  {
    icon: <Smartphone className="h-10 w-10 mb-4 text-blue-600" />,
    title: "Diseño Responsivo",
    description:
      "Asegurando que tu sitio web se vea y funcione perfectamente en todos los dispositivos y tamaños de pantalla.",
  },
  {
    icon: <Globe className="h-10 w-10 mb-4 text-blue-600" />,
    title: "Optimización SEO",
    description: "Mejorando la visibilidad de tu sitio web en los motores de búsqueda para atraer más visitantes.",
  },
  {
    icon: <Zap className="h-10 w-10 mb-4 text-blue-600" />,
    title: "Optimización de Rendimiento",
    description: "Mejorando la velocidad y el rendimiento del sitio web para una mejor experiencia de usuario y SEO.",
  },
  {
    icon: <Users className="h-10 w-10 mb-4 text-blue-600" />,
    title: "Diseño UI/UX",
    description: "Creación de interfaces de usuario intuitivas y experiencias que deleitan a tus usuarios.",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Lo Que Ofrezco</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Soluciones web integrales para ayudar a tu negocio a tener éxito en línea
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-blue-600/50 hover:translate-y-[-5px]">
                <CardHeader className="pb-2">
                  {service.icon}
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

