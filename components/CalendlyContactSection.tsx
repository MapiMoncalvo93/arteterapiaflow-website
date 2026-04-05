'use client'

import { motion } from 'framer-motion'
import { CalendlyInline } from './CalendlyWidget'

export default function CalendlyContactSection() {
  return (
    <section className="bg-crema py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block font-body text-xs font-bold uppercase tracking-[0.2em] text-terracota bg-terracota/10 px-4 py-2 rounded-full mb-4">
            Reserva online
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-negro mb-4">
            O agendá directamente aquí
          </h2>
          <p className="font-body text-negro/60 text-base max-w-lg mx-auto">
            Elegí el día y horario que mejor se adapte a tu rutina. Primera consulta gratuita de 20 minutos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-3xl overflow-hidden shadow-xl border border-negro/8"
        >
          <CalendlyInline height={650} />
        </motion.div>
      </div>
    </section>
  )
}
