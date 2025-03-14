"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ponte en Contacto</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              ¿Tienes alguna idea en mente? Programa una cita conmigo!
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <Card className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <CardContent className="p-6 space-y-4">
              <Calendar className="h-12 w-12 text-blue-600 mx-auto" />
              <h3 className="text-xl font-semibold text-center">Agenda una Cita</h3>
              <p className="text-center text-muted-foreground">
                Utiliza mi calendario en línea para programar una reunión en un horario que te convenga. Discutiremos tu
                proyecto y cómo puedo ayudarte a alcanzar tus objetivos.
              </p>
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                onClick={() => window.open("https://calendly.com/gonzalezferradafrancisco", "_blank")}
              >
                Programar Cita
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

