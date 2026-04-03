'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'

const schema = z.object({
  nombre: z.string().min(1, 'Por favor ingresá tu nombre.'),
  email: z.string().email('Ingresá un email válido.'),
  tipoSesion: z.enum(['Individual', 'Grupal', 'Taller', 'Empresa'], {
    errorMap: () => ({ message: 'Seleccioná un tipo de sesión.' }),
  }),
  mensaje: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres.')
    .max(1000, 'El mensaje no puede superar los 1000 caracteres.'),
})

type FormData = z.infer<typeof schema>

export default function ContactoForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (_data: FormData) => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 600))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl p-12 shadow-md text-center"
      >
        <div className="w-20 h-20 bg-salvia/15 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-salvia"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-display text-3xl font-bold text-negro mb-3">
          ¡Gracias por escribirme!
        </h3>
        <p className="font-body text-negro/65 text-lg leading-relaxed">
          Recibí tu mensaje. Te responderé en menos de 24 horas para
          coordinar tu primera consulta.
        </p>
        <div className="mt-8 p-4 bg-crema rounded-xl">
          <p className="font-body text-negro/50 text-sm">
            Mientras tanto, podés seguirme en{' '}
            <a
              href="https://instagram.com/arteterapiaflow"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terracota font-semibold hover:underline"
            >
              @arteterapiaflow
            </a>{' '}
            para conocer más sobre el proceso.
          </p>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-3xl shadow-md p-8 md:p-10"
    >
      <h2 className="font-display text-2xl font-bold text-negro mb-2">
        Reservá tu sesión
      </h2>
      <p className="font-body text-negro/55 text-sm mb-8">
        Completá el formulario y me pondré en contacto con vos a la brevedad.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        {/* Nombre */}
        <div>
          <label className="block font-body text-sm font-semibold text-negro mb-1.5">
            Nombre completo <span className="text-terracota">*</span>
          </label>
          <input
            {...register('nombre')}
            type="text"
            placeholder="Ej: María González"
            className={`w-full font-body text-sm rounded-xl border px-4 py-3.5 transition focus:outline-none focus:ring-2 focus:ring-terracota/40 ${
              errors.nombre
                ? 'border-red-400 bg-red-50'
                : 'border-negro/15 focus:border-terracota bg-crema/40'
            }`}
          />
          {errors.nombre && (
            <p className="font-body text-xs text-red-500 mt-1.5 flex items-center gap-1">
              <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
              {errors.nombre.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block font-body text-sm font-semibold text-negro mb-1.5">
            Email <span className="text-terracota">*</span>
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder="tu@email.com"
            className={`w-full font-body text-sm rounded-xl border px-4 py-3.5 transition focus:outline-none focus:ring-2 focus:ring-terracota/40 ${
              errors.email
                ? 'border-red-400 bg-red-50'
                : 'border-negro/15 focus:border-terracota bg-crema/40'
            }`}
          />
          {errors.email && (
            <p className="font-body text-xs text-red-500 mt-1.5 flex items-center gap-1">
              <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Tipo de sesión */}
        <div>
          <label className="block font-body text-sm font-semibold text-negro mb-1.5">
            Tipo de sesión <span className="text-terracota">*</span>
          </label>
          <select
            {...register('tipoSesion')}
            className={`w-full font-body text-sm rounded-xl border px-4 py-3.5 transition focus:outline-none focus:ring-2 focus:ring-terracota/40 appearance-none cursor-pointer ${
              errors.tipoSesion
                ? 'border-red-400 bg-red-50'
                : 'border-negro/15 focus:border-terracota bg-crema/40'
            }`}
          >
            <option value="">Seleccioná una opción...</option>
            <option value="Individual">Sesión Individual</option>
            <option value="Grupal">Taller Grupal</option>
            <option value="Taller">Taller Temático</option>
            <option value="Empresa">Workshop para Empresa</option>
          </select>
          {errors.tipoSesion && (
            <p className="font-body text-xs text-red-500 mt-1.5 flex items-center gap-1">
              <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
              {errors.tipoSesion.message}
            </p>
          )}
        </div>

        {/* Mensaje */}
        <div>
          <label className="block font-body text-sm font-semibold text-negro mb-1.5">
            Mensaje <span className="text-terracota">*</span>
          </label>
          <textarea
            {...register('mensaje')}
            rows={5}
            placeholder="Contame un poco sobre vos, qué estás buscando y cualquier consulta que tengas. No hay preguntas incorrectas."
            className={`w-full font-body text-sm rounded-xl border px-4 py-3.5 transition focus:outline-none focus:ring-2 focus:ring-terracota/40 resize-none ${
              errors.mensaje
                ? 'border-red-400 bg-red-50'
                : 'border-negro/15 focus:border-terracota bg-crema/40'
            }`}
          />
          {errors.mensaje && (
            <p className="font-body text-xs text-red-500 mt-1.5 flex items-center gap-1">
              <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
              {errors.mensaje.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          disabled={isSubmitting}
          className="w-full font-body font-semibold bg-terracota text-crema rounded-full py-4 hover:bg-terracota/90 transition-all shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg
                className="w-4 h-4 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Enviando...
            </>
          ) : (
            'Enviar mensaje'
          )}
        </motion.button>

        <p className="font-body text-center text-xs text-negro/40">
          Al enviar este formulario, aceptás ser contactada por ArteterapiaFlow con
          información relacionada a tu consulta.
        </p>
      </form>
    </motion.div>
  )
}
