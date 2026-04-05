'use client'

import { motion } from 'framer-motion'
import { CalendlyInline } from './CalendlyWidget'

export default function AgendaSection() {
  return (
    <section id="agenda" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative blob */}
      <div
        className="absolute top-0 right-0 w-72 h-72 bg-terracota watercolor-blob pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-56 h-56 bg-salvia watercolor-blob pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block font-body text-xs font-bold uppercase tracking-[0.2em] text-terracota bg-terracota/10 px-4 py-2 rounded-full mb-4">
            Agendá tu sesión
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-negro mb-4">
            Elegí el horario que{' '}
            <span className="text-terracota italic">mejor te quede</span>
          </h2>
          <p className="font-body text-negro/60 text-lg max-w-xl mx-auto">
            Reservá tu primera consulta gratuita o una sesión directamente desde el calendario.
            Sin esperas, sin trámites.
          </p>
        </motion.div>

        {/* Calendly Inline Widget */}
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
