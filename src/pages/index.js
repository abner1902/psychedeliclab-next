import React from 'react'
import dynamic from 'next/dynamic'
import Navbar from '../components/Navbar'
import Psy from '../components/psy/index'
import Tuto from '../components/tutorials/index'
import Playlist from '../components/playlist/index'
import Blog from '../components/blog/index'
import Contact from '../components/contact/index'
import Faq from '../components/faq/index'
import Samplepack2 from '../components/samplepack2/samplepack2'
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