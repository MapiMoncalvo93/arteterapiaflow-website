'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: 'easeOut', delay: 0.3 } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-crema flex items-center overflow-hidden">
      {/* Decorative watercolor blobs */}
      <div
        className="absolute top-20 left-10 w-72 h-72 bg-terracota watercolor-blob pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-40 right-20 w-96 h-96 bg-ocre watercolor-blob pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-1/4 w-60 h-60 bg-salvia watercolor-blob pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block bg-terracota/10 text-terracota font-semibold text-sm uppercase tracking-widest px-5 py-2 rounded-full mb-8 font-body">
                Psicoterapia &amp; Arte Expresivo
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-negro leading-tight mb-6"
            >
              Descubrí el arte
              <br />
              <span className="text-terracota italic">de sanar</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="font-body text-lg md:text-xl text-negro/70 leading-relaxed mb-10 max-w-lg"
            >
              La arteterapia es un puente entre tu mundo interior y la expresión
              creativa. Un espacio seguro para explorar, sanar y reconectar con
              tu esencia a través del arte.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
            >
              <Link
                href="/contacto"
                className="font-body font-semibold bg-terracota text-crema rounded-full px-10 py-4 hover:bg-terracota/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
              >
                Reservá tu sesión
              </Link>
              <Link
                href="/servicios"
                className="font-body font-semibold text-negro/80 hover:text-terracota transition-colors duration-200 flex items-center gap-2 group text-base"
              >
                Conocé mis servicios
                <span className="transform transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative offset frame */}
              <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl bg-ocre/30 border-2 border-ocre/50" />
              <div className="absolute -bottom-4 -left-4 w-full h-full rounded-3xl bg-salvia/20 border-2 border-salvia/40" />

              {/* Main image */}
              <div className="relative w-80 h-96 md:w-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/paz.jpg"
                  alt="Paz Moncalvo, arteterapeuta"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 320px, 384px"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -left-8 bg-white rounded-2xl shadow-xl p-4 max-w-[200px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-salvia/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-salvia" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-body text-xs font-semibold text-negro">Espacio seguro</p>
                    <p className="font-body text-xs text-negro/60">y confidencial</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="font-body text-xs text-negro/40 uppercase tracking-widest">Scroll</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-5 h-8 border-2 border-negro/20 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-negro/30 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
