'use client'

import { motion } from 'framer-motion'

const testimonios = [
  {
    initials: 'AM',
    name: 'Ana M.',
    role: 'Sesiones individuales',
    color: 'bg-terracota',
    stars: 5,
    text: 'Empecé las sesiones con Florencia en un momento muy difícil de mi vida, después de una pérdida importante. No esperaba que pintar pudiera abrirme tanto. En pocos meses logré procesar cosas que años de terapia convencional no habían tocado. El arte realmente sana.',
  },
  {
    initials: 'LS',
    name: 'Laura S.',
    role: 'Taller grupal',
    color: 'bg-salvia',
    stars: 5,
    text: 'El taller grupal fue una experiencia transformadora. Llegar cargada de estrés y salir liviana, conectada con otras mujeres y con algo mío que había olvidado: mi creatividad. Florencia crea un espacio de una seguridad y calidez increíbles. Lo recomiendo sin dudarlo.',
  },
  {
    initials: 'CR',
    name: 'Carla R.',
    role: 'Workshop empresarial',
    color: 'bg-ocre',
    stars: 5,
    text: 'Contraté a Florencia para un workshop con mi equipo de trabajo y fue una inversión que valió cada peso. El equipo habló de esa jornada por semanas. Mejoró la comunicación, bajó la tensión y generó vínculos que ningún teambuilding convencional había logrado.',
  },
]

const StarIcon = () => (
  <svg className="w-4 h-4 text-ocre fill-ocre" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

export default function Testimonios() {
  return (
    <section className="py-24 overflow-hidden" style={{ backgroundColor: 'rgba(212,168,83,0.08)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-body text-xs font-bold uppercase tracking-[0.2em] text-ocre bg-ocre/15 px-4 py-2 rounded-full mb-4">
            Testimonios
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-negro mb-4">
            Lo que dicen mis clientes
          </h2>
          <p className="font-body text-negro/60 text-lg max-w-xl mx-auto">
            Cada historia es única. Estas son algunas de las experiencias que me inspiraron a seguir en este camino.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-6">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <StarIcon key={j} />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-body text-negro/70 text-sm leading-relaxed flex-1 mb-8 italic">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-negro/8">
                <div className={`w-11 h-11 ${t.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="font-body font-bold text-white text-sm">{t.initials}</span>
                </div>
                <div>
                  <p className="font-body font-semibold text-negro text-sm">{t.name}</p>
                  <p className="font-body text-negro/50 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
