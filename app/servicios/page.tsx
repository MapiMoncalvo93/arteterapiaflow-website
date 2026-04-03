import type { Metadata } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ServiciosDetalle from '@/components/ServiciosDetalle'

export const metadata: Metadata = {
  title: 'Mis Servicios | ArteterapiaFlow',
  description:
    'Explorá todos los servicios de ArteterapiaFlow: sesiones individuales de arteterapia, talleres grupales y programas para empresas. Descubrí qué opción se adapta mejor a vos.',
  openGraph: {
    title: 'Mis Servicios | ArteterapiaFlow',
    description:
      'Sesiones individuales, talleres grupales y programas corporativos de psicoterapia creativa.',
    url: 'https://arteterapiaflow.com/servicios',
  },
}

export default function ServiciosPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-crema pt-32 pb-16 overflow-hidden">
        {/* Decorative blobs */}
        <div
          className="absolute top-10 right-10 w-64 h-64 bg-terracota watercolor-blob"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-48 h-48 bg-salvia watercolor-blob"
          aria-hidden="true"
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-terracota/10 text-terracota font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full mb-6 font-body">
            Lo que ofrezco
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-negro mb-6">
            Mis Servicios
          </h1>
          <p className="font-body text-lg md:text-xl text-negro/70 max-w-2xl mx-auto leading-relaxed">
            Cada proceso terapéutico es único. Ofrezco distintos formatos para
            acompañarte en tu camino hacia el bienestar emocional a través del
            arte expresivo.
          </p>
        </div>
      </section>

      <ServiciosDetalle />

      {/* Bottom CTA */}
      <section className="bg-terracota py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-crema mb-4">
            ¿No sabés por dónde empezar?
          </h2>
          <p className="font-body text-crema/80 text-lg mb-8">
            Te invito a una primera consulta gratuita de 20 minutos para
            conocernos y encontrar juntas el camino que mejor se adapte a vos.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-crema text-terracota font-semibold font-body rounded-full px-10 py-4 hover:bg-white transition-colors duration-200 shadow-lg"
          >
            Agendá tu consulta gratuita
          </Link>
        </div>
      </section>
    </>
  )
}
