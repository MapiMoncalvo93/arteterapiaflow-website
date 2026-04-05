'use client'

import { motion } from 'framer-motion'

const beneficios = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: 'terracota',
    bg: 'bg-terracota/10',
    text: 'text-terracota',
    title: 'Procesás emociones difíciles',
    desc: 'El arte permite expresar lo que las palabras no alcanzan, liberando emociones bloqueadas con suavidad.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: 'ocre',
    bg: 'bg-ocre/10',
    text: 'text-ocre',
    title: 'Activás tu creatividad natural',
    desc: 'Reconectás con tu capacidad creativa innata, recuperando la espontaneidad y el juego interior.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
      </svg>
    ),
    color: 'salvia',
    bg: 'bg-salvia/10',
    text: 'text-salvia',
    title: 'Reducís el estrés y la ansiedad',
    desc: 'El proceso creativo activa el sistema nervioso parasimpático, generando calma y bienestar.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    color: 'terracota',
    bg: 'bg-terracota/10',
    text: 'text-terracota',
    title: 'Te conocés más profundamente',
    desc: 'El arte revela patrones, creencias y recursos internos que la mente consciente no siempre percibe.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    color: 'salvia',
    bg: 'bg-salvia/10',
    text: 'text-salvia',
    title: 'Mejorás tus vínculos',
    desc: 'Al entenderte mejor a vos misma, transformás también la forma en que te relacionás con los demás.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    color: 'ocre',
    bg: 'bg-ocre/10',
    text: 'text-ocre',
    title: 'Recuperás tu vitalidad',
    desc: 'La expresión creativa es una fuente de energía y sentido. Salís de cada sesión renovada y más liviana.',
  },
]

export default function QueEsArteterapia() {
  return (
    <section className="py-24 bg-crema relative overflow-hidden">
      {/* Decorative blobs */}
      <div
        className="absolute -top-16 -right-16 w-80 h-80 bg-ocre watercolor-blob pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 -left-10 w-64 h-64 bg-salvia watercolor-blob pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="inline-block font-body text-xs font-bold uppercase tracking-[0.2em] text-ocre bg-ocre/10 px-4 py-2 rounded-full mb-4">
            ¿Qué es la arteterapia?
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-negro mb-6 leading-tight">
            El arte como camino hacia{' '}
            <span className="text-terracota italic">el bienestar</span>
          </h2>
          <p className="font-body text-negro/70 text-lg leading-relaxed mb-4">
            La arteterapia es una disciplina terapéutica que utiliza el proceso creativo como herramienta para el bienestar emocional, mental y social. A diferencia del arte convencional, aquí lo que importa no es el resultado estético sino el viaje interior que se activa al crear.
          </p>
          <p className="font-body text-negro/65 text-base leading-relaxed">
            No necesitás ninguna experiencia artística previa. El proceso es guiado por una terapeuta especializada y adaptado a tus necesidades únicas. Trabajamos con pintura, collage, arcilla, escritura creativa y otras técnicas expresivas.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {beneficios.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-negro/5"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 ${b.bg} ${b.text} rounded-xl mb-4`}>
                {b.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-negro mb-2">{b.title}</h3>
              <p className="font-body text-negro/60 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center relative"
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-display text-8xl text-terracota/15 leading-none select-none">
            &ldquo;
          </div>
          <p className="font-display text-xl md:text-2xl text-negro/80 italic max-w-3xl mx-auto leading-relaxed relative z-10">
            No hay que saber dibujar ni pintar. Solo hay que estar dispuesta a encontrarte con vos misma en el proceso.
          </p>
          <footer className="mt-4 font-body text-sm text-negro/40 uppercase tracking-widest">
            — ArteterapiaFlow
          </footer>
        </motion.blockquote>
      </div>
    </section>
  )
}
