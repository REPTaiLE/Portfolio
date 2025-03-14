"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { useIsDesktop } from "@/hooks/use-is-desktop"

export default function AboutSection() {
  const [isHovered, setIsHovered] = useState(false)
  const isDesktop = useIsDesktop()

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex justify-center items-center lg:order-last">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 overflow-hidden rounded-xl group"
              onMouseEnter={() => isDesktop && setIsHovered(true)}
              onMouseLeave={() => isDesktop && setIsHovered(false)}
            >
              {/* Imagen de perfil */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto_de_perfil-2-removebg-preview%20%281%29-5cMdsvqnTRwwuBjrZXLEA2NUs50QRz.png"
                  alt="Francisco González"
                  fill
                  className="object-cover object-center object-[center_top]"
                  priority
                />
              </div>

              {/* Overlay con gradiente */}
              <div
                className={`absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 mix-blend-multiply z-10 transition-opacity duration-500 ${
                  isHovered || !isDesktop ? "opacity-30" : "opacity-100"
                }`}
              />

              {/* Borde negro de la pantalla */}
              <div className="absolute inset-0 rounded-xl border-2 border-black z-20"></div>

              {/* Pantalla con efecto hover */}
              <div
                className={`absolute inset-[2px] rounded-lg bg-background z-30 transition-opacity duration-500 ${
                  isHovered || !isDesktop ? "opacity-30" : "opacity-100"
                }`}
              >
                <div className="h-full w-full overflow-hidden rounded-lg bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20">
                  <div className="relative h-full w-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="grid grid-cols-2 gap-2 p-2">
                        <div className="aspect-video rounded-md bg-blue-600/20 backdrop-blur-sm" />
                        <div className="aspect-video rounded-md bg-purple-600/20 backdrop-blur-sm" />
                        <div className="aspect-video rounded-md bg-purple-600/20 backdrop-blur-sm" />
                        <div className="aspect-video rounded-md bg-blue-600/20 backdrop-blur-sm" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center space-y-4 text-center lg:text-left"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center lg:text-left">
                Desarrollador Web Apasionado
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto lg:mx-0">
                Soy Francisco González, actualmente trabajo en desarrollo de software y automatizaciones. Sin embargo, soy un apasionado por el desarrollo web!
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground text-center lg:text-left">
                Con más de 2 años de experiencia en desarrollo web, he ido creando mis propias soluciones web y puliendo mis habilidades a través del tiempo. Mi enfoque está principalmente en páginas sencillas, escalables y modernas que son funcionales pero que también tienen estilo!
              </p>
              <p className="text-muted-foreground text-center lg:text-left">
                Mi misión es ayudar a las pequeñas empresas que no tienen presencia digital, ya que no estar en la web es una pérdida importante de oportunidades. Déjame ayudarte a buscar la solución más adecuada para ti, a establecer una fuerte presencia en línea a través de un diseño
                cuidadoso y un desarrollo robusto. 
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

