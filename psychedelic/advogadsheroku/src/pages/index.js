import Navba from '../components/Navbar'
import React from 'react'
import About from '../components/about/index'
import Psy from '../components/psy/index'
import Tuto from '../components/tutorials/index'
import Playlist from '../components/playlist/index'
import Blog from '../components/blog/index'
import Contact from '../components/contact/index'
import Faq from '../components/faq/index'

const Home = () => (
  <div>
    <Navba />
    {/* <Sliders /> */}
    <About />
    <Psy />
    <Contact />
    <Tuto />
    <Playlist />
    <Blog />
    <Faq />
  </div>
)

export default Home
