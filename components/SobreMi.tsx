'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const credentials = [
  'Licenciada en Psicología (UBA) con orientación clínica',
  'Posgrado en Arteterapia — Instituto Español de Arteterapia',
  'Formación en Terapia Basada en Mindfulness (MBSR)',
  'Certificada en Psicología Positiva y Bienestar',
  'Miembro de la Asociación Argentina de Arteterapia',
  '+8 años acompañando procesos de sanación creativa',
]

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-salvia flex-shrink-0 mt-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M5 13l4 4L19 7"
    />
  </svg>
)

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
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500"
                  alt="Florencia, arteterapeuta de ArteterapiaFlow"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                />
              </div>

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -top-4 -right-4 bg-terracota text-crema rounded-2xl shadow-lg p-4 text-center"
              >
                <p className="font-display text-2xl font-bold">8+</p>
                <p className="font-body text-xs font-semibold mt-0.5 leading-tight">años de<br />experiencia</p>
              </motion.div>
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

            <h2 className="font-display text-4xl md:text-5xl font-bold text-negro mb-6 leading-tight">
              Hola, soy{' '}
              <span className="text-terracota italic">Florencia</span>
            </h2>

            <div className="space-y-4 font-body text-negro/70 text-base md:text-lg leading-relaxed mb-8">
              <p>
                Soy psicóloga y arteterapeuta con más de ocho años acompañando personas
                en sus procesos de transformación personal. Creo profundamente en el poder
                del arte como lenguaje que va más allá de las palabras: un espacio donde el
                cuerpo, las emociones y la mente se encuentran para sanar.
              </p>
              <p>
                Mi camino en la arteterapia comenzó cuando descubrí que la creación
                artística me permitía acceder a partes de mí misma que la terapia
                convencional no alcanzaba. Esa experiencia transformadora me inspiró
                a formarme y acompañar a otras personas en ese mismo viaje hacia el
                autoconocimiento y el bienestar.
              </p>
              <p>
                Trabajo con adultos, adolescentes y grupos en procesos de duelo,
                ansiedad, búsqueda de identidad y crecimiento personal. Cada sesión
                es un espacio único, sin juicios, donde tu creatividad es el camino.
              </p>
            </div>

            {/* Credentials */}
            <div className="space-y-3 mb-10">
              {credentials.map((cred, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <CheckIcon />
                  <p className="font-body text-negro/80 text-sm md:text-base">{cred}</p>
                </motion.div>
              ))}
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
