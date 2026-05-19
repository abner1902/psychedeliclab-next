import React from 'react'
import dynamic from 'next/dynamic'

// COMPONENTES CRÍTICOS (Carregam primeiro para o usuário ver o site logo)
import Navbar from '../components/Navbar'
import Abner from '../components/abner/index'

// COMPONENTES PESADOS (Carregam em segundo plano para não travar o celular)
const Psy = dynamic(() => import('../components/psy/index'), { ssr: true })
const Tuto = dynamic(() => import('../components/tutorials/index'), { ssr: true })
const Contact = dynamic(() => import('../components/contact/index'), { ssr: true })
const Testimonials = dynamic(() => import('../components/testimonials/index'), { ssr: true })
const Telegram = dynamic(() => import('../components/telegram/index'), { ssr: true })

// COMPONENTES COM LOGICA EXTERNA (Mantidos como ssr: false para performance máxima)
const Playlist = dynamic(() => import('../components/playlist/index'), { ssr: false })
const Blog = dynamic(() => import('../components/blog/index'), { ssr: false })
const Faq = dynamic(() => import('../components/faq/index'), { ssr: false })
const Samplepack2 = dynamic(() => import('../components/samplepack2/samplepack2'), { ssr: false })

const Home = () => (
  <>
    <Navbar />
    <main role="main">
      <Abner />
      <Psy />
      <Contact />
      <Tuto />
      <Playlist />
      <Blog />
      <Testimonials />
      <Telegram />
      <Samplepack2 />
      <Faq />
    </main>
  </>
)

export default Home