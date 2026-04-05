'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Contacto() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.nombre.trim()) e.nombre = 'Por favor ingresá tu nombre.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Ingresá un email válido.'
    if (!form.mensaje.trim() || form.mensaje.trim().length < 10)
      e.mensaje = 'El mensaje debe tener al menos 10 caracteres.'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
  }

  return (
    <section className="py-24" style={{ backgroundColor: 'rgba(196,113,74,0.06)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block font-body text-xs font-bold uppercase tracking-[0.2em] text-terracota bg-terracota/10 px-4 py-2 rounded-full mb-6">
              Hablemos
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-negro mb-6 leading-tight">
              ¿Lista para dar el<br />
              <span className="text-terracota italic">primer paso?</span>
            </h2>
            <p className="font-body text-negro/70 text-lg leading-relaxed mb-8">
              El proceso comienza con un mensaje. Escribime sin compromiso y en menos de 24 horas coordinaremos tu primera consulta, completamente gratuita.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-terracota/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-terracota" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-wider text-negro/50 mb-0.5">Email</p>
                  <a href="mailto:mariapazmoncalvo@gmail.com" className="font-body text-negro hover:text-terracota transition-colors">
                    mariapazmoncalvo@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-salvia/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-salvia" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-wider text-negro/50 mb-0.5">WhatsApp</p>
                  <a href="https://wa.me/59894963742" target="_blank" rel="noopener noreferrer" className="font-body text-negro hover:text-salvia transition-colors">
                    +598 94 963 742
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-ocre/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-ocre" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-wider text-negro/50 mb-0.5">Instagram</p>
                  <a href="https://instagram.com/arteterapiaflow" target="_blank" rel="noopener noreferrer" className="font-body text-negro hover:text-ocre transition-colors">
                    @arteterapiaflow
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/contacto"
                className="font-body font-semibold text-sm text-negro/60 hover:text-terracota transition-colors underline underline-offset-4"
              >
                Ver formulario completo →
              </Link>
            </div>
          </motion.div>

          {/* Right: mini form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-md p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-salvia/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-salvia" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-negro mb-3">¡Gracias!</h3>
                <p className="font-body text-negro/60">Te responderé en menos de 24 horas.</p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-2xl font-bold text-negro mb-6">Escribime</h3>
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <label className="block font-body text-sm font-semibold text-negro/80 mb-1.5">Nombre</label>
                    <input
                      type="text"
                      value={form.nombre}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      placeholder="Tu nombre"
                      className="w-full font-body text-sm rounded-xl border border-negro/15 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-terracota/40 focus:border-terracota transition bg-crema/50"
                    />
                    {errors.nombre && <p className="font-body text-xs text-red-500 mt-1">{errors.nombre}</p>}
                  </div>

                  <div>
                    <label className="block font-body text-sm font-semibold text-negro/80 mb-1.5">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="tu@email.com"
                      className="w-full font-body text-sm rounded-xl border border-negro/15 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-terracota/40 focus:border-terracota transition bg-crema/50"
                    />
                    {errors.email && <p className="font-body text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block font-body text-sm font-semibold text-negro/80 mb-1.5">Mensaje</label>
                    <textarea
                      rows={4}
                      value={form.mensaje}
                      onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                      placeholder="Contame brevemente qué estás buscando..."
                      className="w-full font-body text-sm rounded-xl border border-negro/15 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-terracota/40 focus:border-terracota transition resize-none bg-crema/50"
                    />
                    {errors.mensaje && <p className="font-body text-xs text-red-500 mt-1">{errors.mensaje}</p>}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full font-body font-semibold bg-terracota text-crema rounded-full py-4 hover:bg-terracota/90 transition-colors shadow-md"
                  >
                    Enviar mensaje
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
