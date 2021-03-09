import Navba from '../components/Navbar'
import React from 'react'
import About from '../components/about/index'
import Psy from '../components/psy/index'
import Tuto from '../components/tutorials/index'
import Playlist from '../components/playlist/index'
import Blog from '../components/blog/index'
import Contact from '../components/contact/index'
import Faq from '../components/faq/index'
import Feed from '../components/feed/index'
import Samplepack from '../components/samplepack/index'
import Samplepack2 from '../components/samplepack2/samplepack2'
import Abner from '../components/abner/index'
const Home = () => (
  <div>
    <Navba />
    <About />
    <Psy />
    <Contact />
    <Tuto />
    <Abner />
    <Playlist />
    <Blog />
    <Feed />
    <Samplepack />
    <Samplepack2 />
    <Faq />
  </div>
)

export default Home
