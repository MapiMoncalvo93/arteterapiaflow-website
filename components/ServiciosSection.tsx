'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const servicios = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    color: 'terracota',
    borderColor: 'border-terracota',
    iconBg: 'bg-terracota/10 text-terracota',
    title: 'Sesiones Individuales',
    description:
      'Un espacio íntimo y personalizado donde explorás tu mundo interior a través del arte. Cada proceso se adapta a tus necesidades, objetivos y ritmo.',
    href: '/servicios',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: 'salvia',
    borderColor: 'border-salvia',
    iconBg: 'bg-salvia/10 text-salvia',
    title: 'Talleres Grupales',
    description:
      'La creatividad compartida multiplica la experiencia. En grupos pequeños y contenidos, el arte se convierte en puente entre las personas y sus emociones.',
    href: '/servicios',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: 'ocre',
    borderColor: 'border-ocre',
    iconBg: 'bg-ocre/10 text-ocre',
    title: 'Workshops para Empresas',
    description:
      'Programas diseñados para equipos de trabajo. Fomentamos la creatividad, la comunicación y el bienestar organizacional mediante la expresión artística.',
    href: '/servicios',
  },
]

export default function ServiciosSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-body text-xs font-bold uppercase tracking-[0.2em] text-terracota bg-terracota/10 px-4 py-2 rounded-full mb-4">
            Lo que ofrezco
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-negro mb-4">
            Mis Servicios
          </h2>
          <p className="font-body text-negro/60 text-lg max-w-xl mx-auto">
            Cada formato está pensado para acompañarte donde estás y llevarte donde querés estar.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicios.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`group relative bg-crema rounded-2xl p-8 border-t-4 ${s.borderColor} shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${s.iconBg} mb-6`}>
                {s.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-negro mb-3">{s.title}</h3>
              <p className="font-body text-negro/60 text-sm leading-relaxed mb-6">{s.description}</p>
              <Link
                href={s.href}
                className="font-body text-sm font-semibold text-terracota hover:underline underline-offset-4 inline-flex items-center gap-1"
              >
                Ver más
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/servicios"
            className="font-body font-semibold text-negro/70 border border-negro/20 rounded-full px-8 py-3.5 hover:border-terracota hover:text-terracota transition-all duration-200"
          >
            Ver todos los servicios
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
