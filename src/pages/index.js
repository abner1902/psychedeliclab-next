import React from 'react'
import dynamic from 'next/dynamic'
import Navbar from '../components/Navbar'
import Psy from '../components/psy/index'
import Tuto from '../components/tutorials/index'
const Playlist = dynamic(() => import('../components/playlist/index'), { ssr: false })
const Blog = dynamic(() => import('../components/blog/index'), { ssr: false })
import Contact from '../components/contact/index'
const Faq = dynamic(() => import('../components/faq/index'), { ssr: false })
const Samplepack2 = dynamic(() => import('../components/samplepack2/samplepack2'), { ssr: false })
import Testimonials from '../components/testimonials/index'
import Abner from '../components/abner/index' 
import Telegram from '../components/telegram/index'

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