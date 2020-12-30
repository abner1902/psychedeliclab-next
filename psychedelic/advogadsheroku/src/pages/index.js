import Navba from '../components/Navbar'
// import Lawyers from '../components/contact/index'
import React from 'react'
// import Sliders from '../components/partial/Slider/index'
import About from '../components/about/index'
// import Articles from '../components/articles/index'
import Psy from '../components/psy/index'
import Tuto from '../components/tutorials/index'
import Playlist from '../components/playlist/index'
import Blog from '../components/blog/index'
import Contact from '../components/contact/index'

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
    {/* <Articles /> */}
    {/* <Lawyers /> */}
  </div>
)

export default Home
