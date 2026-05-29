import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

import Hero from './components/Hero'
import HelpSection from './components/HelpSection'
import MissionSection from './components/MissionSection'
import CTASection from './components/CTASection'

import Sobre from './components/Sobre'
import Voluntarios from './components/Voluntarios'
import Noticias from './components/Noticias'
import Doacao from './components/Doar'
import Contato from './components/Contato'
import NotFound from './components/NotFound'

function Home() {
  return (
    <>
      <Hero />
      <HelpSection />
      <MissionSection />
      <CTASection />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/voluntarios" element={<Voluntarios />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/doacao" element={<Doacao />} />

        <Route path="/contato" element={<Navigate to="/doacao" replace />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

      <WhatsAppFloat />

    </BrowserRouter>
  )
}
