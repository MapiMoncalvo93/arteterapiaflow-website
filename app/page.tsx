import Hero from '@/components/Hero'
import QueEsArteterapia from '@/components/QueEsArteterapia'
import ServiciosSection from '@/components/ServiciosSection'
import SobreMi from '@/components/SobreMi'
import Testimonios from '@/components/Testimonios'
import AgendaSection from '@/components/AgendaSection'
import InstagramFeed from '@/components/InstagramFeed'

export default function Home() {
  return (
    <>
      <Hero />
      <QueEsArteterapia />
      <ServiciosSection />
      <SobreMi />
      <Testimonios />
      <AgendaSection />
      <InstagramFeed />
    </>
  )
}
