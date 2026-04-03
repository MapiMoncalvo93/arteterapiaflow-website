'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const servicios = [
  {
    id: 'individual',
    color: 'terracota',
    borderColor: 'border-terracota',
    bgColor: 'bg-terracota/10',
    textColor: 'text-terracota',
    badgeBg: 'bg-terracota',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Sesiones Individuales',
    description:
      'Un espacio terapéutico íntimo y personalizado donde la expresión artística se convierte en el lenguaje del proceso. Trabajamos juntas con pintura, collage, arcilla y otras técnicas expresivas para explorar emociones, superar bloqueos y promover el autoconocimiento. No necesitás experiencia artística previa: lo que importa es el proceso, no el resultado.',
    features: [
      'Primera consulta gratuita de 20 minutos',
      'Plan terapéutico personalizado',
      'Materiales incluidos en sesiones presenciales',
      'Opción de modalidad online por videollamada',
      'Seguimiento entre sesiones vía WhatsApp',
    ],
    price: 'Desde $8.500 ARS',
    duration: '60 minutos',
    frequency: 'Semanal o quincenal',
  },
  {
    id: 'grupal',
    color: 'salvia',
    borderColor: 'border-salvia',
    bgColor: 'bg-salvia/10',
    textColor: 'text-salvia',
    badgeBg: 'bg-salvia',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Talleres Grupales',
    description:
      'Experiencias colectivas de creación y reflexión donde la energía del grupo amplifica el proceso individual. En un ambiente de confianza y cuidado mutuo, exploramos temáticas como el autoconocimiento, la resiliencia, los vínculos y la creatividad. Cada encuentro combina una propuesta artística con un espacio de reflexión compartida. Grupos reducidos de máximo 8 personas para garantizar una atención personalizada.',
    features: [
      'Grupos de máximo 8 personas',
      'Todos los materiales incluidos',
      'Temáticas mensuales renovadas',
      'Certificado de participación',
      'Acceso a comunidad privada de participantes',
    ],
    price: 'Desde $4.200 ARS',
    duration: '2 horas',
    frequency: 'Encuentros mensuales',
  },
  {
    id: 'empresas',
    color: 'ocre',
    borderColor: 'border-ocre',
    bgColor: 'bg-ocre/10',
    textColor: 'text-ocre',
    badgeBg: 'bg-ocre',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Workshops para Empresas',
    description:
      'Programas de bienestar organizacional diseñados a medida para equipos de trabajo. Utilizando la arteterapia como herramienta, trabajamos el desarrollo de habilidades blandas, la cohesión de equipo, la gestión del estrés y la creatividad aplicada al entorno laboral. Cada programa es diseñado según las necesidades específicas de tu organización, pudiendo realizarse en formato de jornada única o programa extendido de varios encuentros.',
    features: [
      'Diagnóstico previo de necesidades del equipo',
      'Diseño de programa a medida',
      'Posibilidad de formato presencial u online',
      'Informe final con observaciones y recomendaciones',
      'Facturación a nombre de empresa',
    ],
    price: 'Desde $45.000 ARS',
    duration: '3 a 4 horas',
    frequency: 'Jornada única o programa',
  },
]

const CheckIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
)

export default function ServiciosDetalle() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {servicios.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`rounded-3xl border-l-4 ${s.borderColor} bg-crema shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden`}
          >
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                {/* Icon + title */}
                <div className="flex-1">
                  <div className="flex items-start gap-5 mb-6">
                    <div
                      className={`w-16 h-16 ${s.bgColor} ${s.textColor} rounded-2xl flex items-center justify-center flex-shrink-0`}
                    >
                      {s.icon}
                    </div>
                    <div>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-negro mb-1">
                        {s.title}
                      </h2>
                      <div className="flex flex-wrap gap-3">
                        <span className={`font-body text-xs font-semibold ${s.textColor} ${s.bgColor} px-3 py-1 rounded-full`}>
                          {s.duration}
                        </span>
                        <span className="font-body text-xs font-semibold text-negro/50 bg-negro/8 px-3 py-1 rounded-full">
                          {s.frequency}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="font-body text-negro/70 text-base leading-relaxed mb-6">
                    {s.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2.5">
                    {s.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-start gap-3 font-body text-sm text-negro/75 ${s.textColor}`}
                      >
                        <CheckIcon />
                        <span className="text-negro/75">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price + CTA */}
                <div className="md:w-64 flex-shrink-0">
                  <div
                    className={`${s.bgColor} rounded-2xl p-6 text-center border border-current border-opacity-20`}
                  >
                    <p className="font-body text-xs font-semibold uppercase tracking-widest text-negro/50 mb-2">
                      Inversión
                    </p>
                    <p className={`font-display text-2xl font-bold ${s.textColor} mb-1`}>
                      {s.price}
                    </p>
                    <p className="font-body text-xs text-negro/45 mb-6">
                      por sesión / taller
                    </p>
                    <Link
                      href="/contacto"
                      className={`block font-body font-semibold text-sm bg-negro text-crema rounded-full px-6 py-3 hover:bg-negro/80 transition-all duration-200 shadow-sm hover:shadow-md`}
                    >
                      Reservar
                    </Link>
                    <p className="font-body text-xs text-negro/40 mt-3">
                      Primera consulta gratuita
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
