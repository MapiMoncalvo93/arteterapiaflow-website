'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const servicios = [
  {
    tag: 'Más popular',
    tagColor: 'bg-terracota/15 text-terracota',
    borderColor: 'border-terracota',
    iconBg: 'bg-terracota/10',
    iconColor: 'text-terracota',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Sesiones Individuales',
    duration: '60 minutos',
    price: 'Desde $8.000 ARS',
    description:
      'Un espacio íntimo y completamente personalizado donde trabajamos juntas tu proceso a través del arte. No necesitás ningún conocimiento artístico previo: el proceso creativo es el vehículo, no el destino.',
    features: [
      'Evaluación inicial gratuita (20 min)',
      'Plan de trabajo adaptado a tus objetivos',
      'Materiales artísticos incluidos (presencial)',
      'Seguimiento entre sesiones via WhatsApp',
      'Sesiones online y presencial disponibles',
    ],
    cta: 'Reservar sesión individual',
  },
  {
    tag: null,
    tagColor: '',
    borderColor: 'border-salvia',
    iconBg: 'bg-salvia/10',
    iconColor: 'text-salvia',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Talleres Grupales',
    duration: '90 minutos',
    price: 'Desde $4.500 ARS',
    description:
      'Grupos pequeños (máximo 8 personas) que se reúnen para explorar temáticas específicas: duelo, autoestima, vínculos, identidad. La energía grupal multiplica la experiencia terapéutica de maneras inesperadas y profundas.',
    features: [
      'Grupos de hasta 8 participantes',
      'Temáticas mensuales variables',
      'Materiales artísticos incluidos',
      'Ciclos de 4 encuentros mensuales',
      'Comunidad privada de WhatsApp',
    ],
    cta: 'Unirme a un taller',
  },
  {
    tag: 'Para empresas',
    tagColor: 'bg-ocre/15 text-ocre',
    borderColor: 'border-ocre',
    iconBg: 'bg-ocre/10',
    iconColor: 'text-ocre',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Workshops para Empresas',
    duration: '2 a 4 horas',
    price: 'Precio a consultar',
    description:
      'Programas diseñados a medida para equipos de trabajo. Combinamos dinámicas de arte expresivo con objetivos organizacionales: comunicación, creatividad, manejo del estrés, cohesión de equipo y bienestar laboral.',
    features: [
      'Diagnóstico previo del equipo y objetivos',
      'Programa completamente a medida',
      'Materiales y espacio incluidos (opcional)',
      'Informe post-workshop con recomendaciones',
      'Seguimiento de 30 días incluido',
    ],
    cta: 'Consultar para mi empresa',
  },
]

const CheckIcon = () => (
  <svg className="w-4 h-4 text-salvia flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
)

export default function ServiciosDetalle() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10">
          {servicios.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative bg-crema rounded-3xl border-l-4 ${s.borderColor} p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left */}
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-16 h-16 ${s.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0 ${s.iconColor}`}>
                      {s.icon}
                    </div>
                    <div>
                      {s.tag && (
                        <span className={`inline-block font-body text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2 ${s.tagColor}`}>
                          {s.tag}
                        </span>
                      )}
                      <h3 className="font-display text-2xl font-bold text-negro">{s.title}</h3>
                    </div>
                  </div>

                  <p className="font-body text-negro/70 text-base leading-relaxed mb-6">{s.description}</p>

                  <ul className="space-y-2.5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckIcon />
                        <span className="font-body text-sm text-negro/70">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right */}
                <div className="md:w-56 flex flex-col items-start md:items-end justify-between gap-6">
                  <div className="md:text-right">
                    <p className="font-body text-xs font-semibold uppercase tracking-wider text-negro/40 mb-1">Duración</p>
                    <p className="font-body font-semibold text-negro">{s.duration}</p>
                  </div>
                  <div className="md:text-right">
                    <p className="font-body text-xs font-semibold uppercase tracking-wider text-negro/40 mb-1">Inversión</p>
                    <p className="font-display text-2xl font-bold text-terracota">{s.price}</p>
                  </div>
                  <Link
                    href="/contacto"
                    className="w-full md:w-auto font-body font-semibold text-sm bg-terracota text-crema rounded-full px-7 py-3.5 hover:bg-terracota/90 transition-colors text-center shadow-sm"
                  >
                    {s.cta}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
