import type { Metadata } from 'next'
import ContactoForm from '@/components/ContactoForm'

export const metadata: Metadata = {
  title: 'Contacto | ArteterapiaFlow',
  description:
    'Contactate con ArteterapiaFlow para reservar tu sesión de arteterapia o consultar sobre talleres grupales y programas para empresas. Respondemos en menos de 24 horas.',
  openGraph: {
    title: 'Contacto | ArteterapiaFlow',
    description:
      'Reservá tu sesión o consultá sobre los servicios de psicoterapia creativa.',
    url: 'https://arteterapiaflow.com/contacto',
  },
}

export default function ContactoPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-crema pt-32 pb-16 overflow-hidden">
        <div
          className="absolute top-10 right-20 w-56 h-56 bg-ocre watercolor-blob"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-10 w-44 h-44 bg-salvia watercolor-blob"
          aria-hidden="true"
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-salvia/15 text-salvia font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full mb-6 font-body">
            Estoy aquí para vos
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-negro mb-6">
            Hablemos
          </h1>
          <p className="font-body text-lg md:text-xl text-negro/70 max-w-2xl mx-auto leading-relaxed">
            El primer paso es el más importante. Completá el formulario y me
            pondré en contacto con vos en menos de 24 horas para coordinar
            nuestra primera sesión.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-crema py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Contact Info */}
            <div>
              <h2 className="font-display text-3xl font-bold text-negro mb-6">
                Información de contacto
              </h2>
              <p className="font-body text-negro/70 text-base leading-relaxed mb-8">
                Podés contactarme por el medio que prefieras. Me comprometo a
                responder todos los mensajes de manera personal y con la
                atención que merecés.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-terracota/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-terracota" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-body font-semibold text-negro text-sm uppercase tracking-wide mb-1">Email</p>
                    <a href="mailto:hola@arteterapiaflow.com" className="font-body text-negro/70 hover:text-terracota transition-colors">
                      hola@arteterapiaflow.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-salvia/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-salvia" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-body font-semibold text-negro text-sm uppercase tracking-wide mb-1">WhatsApp</p>
                    <a href="https://wa.me/+541100000000" target="_blank" rel="noopener noreferrer" className="font-body text-negro/70 hover:text-salvia transition-colors">
                      +54 11 0000-0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ocre/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-ocre" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-body font-semibold text-negro text-sm uppercase tracking-wide mb-1">Instagram</p>
                    <a href="https://instagram.com/arteterapiaflow" target="_blank" rel="noopener noreferrer" className="font-body text-negro/70 hover:text-ocre transition-colors">
                      @arteterapiaflow
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-terracota/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-terracota" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-body font-semibold text-negro text-sm uppercase tracking-wide mb-1">Ubicación</p>
                    <p className="font-body text-negro/70">
                      Buenos Aires, Argentina<br />
                      <span className="text-sm">(Sesiones online disponibles)</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Availability note */}
              <div className="mt-10 p-6 bg-salvia/10 rounded-2xl border border-salvia/20">
                <p className="font-body text-negro/80 text-sm leading-relaxed">
                  <span className="font-semibold text-salvia">Horario de atención:</span>{' '}
                  Lunes a viernes de 9:00 a 19:00 hs. Respondo todos los mensajes de forma personal.
                </p>
              </div>
            </div>

            {/* Right: Full Contact Form */}
            <ContactoForm />
          </div>
        </div>
      </section>
    </>
  )
}
