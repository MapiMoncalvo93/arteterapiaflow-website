'use client'

import { motion } from 'framer-motion'

const testimonios = [
  'Pasaron precioso !!!! Salieron súper contentos ambos !!!! Tenía un poco de miedo por Juanfra que no le gustara pero quedó copado! Muchas gracias !!!',
  'Muchísimas gracias vino súper contento Le re gustó 😍',
  'A mi me encantó. En espacio con calma. Como un suspiro en medio de la rutina. Tu sos una persona muy armonica.',
  'Queria agradecerte tu excelente atención, con mucha calidez destaco tu empatía 💞 y profesionalismo, me senti muy comoda. Fue un momento muy ameno, realmente llegue a desconectarme de la voragine diaria ❤️',
]

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonios.map((texto, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <blockquote className="font-body text-negro/70 text-base leading-relaxed italic">
                &ldquo;{texto}&rdquo;
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
