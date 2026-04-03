import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'ArteterapiaFlow | Psicoterapia Creativa',
  description:
    'ArteterapiaFlow ofrece sesiones de psicoterapia y arte expresivo para el bienestar emocional. Descubrí el arte de sanar con talleres individuales, grupales y corporativos.',
  keywords: ['arteterapia', 'psicoterapia', 'arte expresivo', 'bienestar emocional', 'talleres creativos'],
  openGraph: {
    title: 'ArteterapiaFlow | Psicoterapia Creativa',
    description:
      'Sesiones de psicoterapia y arte expresivo para el bienestar emocional. Talleres individuales, grupales y para empresas.',
    url: 'https://arteterapiaflow.com',
    siteName: 'ArteterapiaFlow',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200',
        width: 1200,
        height: 630,
        alt: 'ArteterapiaFlow - Psicoterapia Creativa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ArteterapiaFlow | Psicoterapia Creativa',
    description:
      'Sesiones de psicoterapia y arte expresivo para el bienestar emocional.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="font-body bg-crema text-negro">
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  )
}
