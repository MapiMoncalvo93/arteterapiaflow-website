'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative flex justify-center lg:justify-start"
          >
            {/* Decorative blob behind image */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-salvia watercolor-blob-sm pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative w-72 h-80 md:w-80 md:h-[440px] lg:w-96 lg:h-[500px]">
              {/* Decorative background shape */}
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-ocre/20 rounded-[60%_40%_50%_70%/40%_60%_70%_50%]" />

              {/* Image container */}
              <div className="relative w-full h-full rounded-[40%_60%_55%_45%/50%_45%_55%_50%] overflow-hidden shadow-xl">
                <Image
                  src="/paz.jpg"
                  alt="Paz Moncalvo, arteterapeuta de ArteterapiaFlow"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            <span className="inline-block bg-salvia/15 text-salvia font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full mb-6 font-body">
              Sobre Mí
            </span>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-negro mb-2 leading-tight">
              Hola, soy{' '}
              <span className="text-terracota italic">Paz Moncalvo</span>
            </h2>

            <p className="font-body text-negro/50 text-base mb-8 tracking-wide uppercase text-sm">
              Arteterapeuta Certificada
            </p>

            <div className="space-y-4 font-body text-negro/70 text-base md:text-lg leading-relaxed mb-10">
              <p>
                Soy arteterapeuta certificada con experiencia acompañando a personas a
                reconectar con su mundo emocional a través del arte. Creo profundamente
                en la capacidad creativa de cada ser humano y en el poder del proceso
                artístico como vehículo de transformación.
              </p>
              <p>
                Mi enfoque integra la psicología humanista, el mindfulness y diversas
                técnicas de expresión plástica para crear un espacio de encuentro
                auténtico con uno mismo. Cada sesión es un viaje único y personal
                hacia el bienestar.
              </p>
            </div>

            <Link
              href="/servicios"
              className="font-body font-semibold text-terracota hover:text-terracota/80 transition-colors flex items-center gap-2 group text-base"
            >
              Conocé mis servicios
              <span className="transform transition-transform duration-200 group-hover:translate-x-1 text-lg">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
