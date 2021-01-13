import * as s from './style'
import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  Nav
} from 'reactstrap'
import { Container } from 'react-bootstrap'
import { useRouter } from 'next/router'
import Link from 'next/link'
// import Ressar from '../ressarcir/index'

const Navba = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const router = useRouter()


    const publics =
  router.locale === 'en-US'
    ? 'About'
    : router.locale === 'pt'
      ? 'Sobre'
      : 'About'

      const refound =
  router.locale === 'en-US'
    ? 'Notícias'
    : router.locale === 'pt'
      ? 'News'
      : 'Notícias'


      const credit =
  router.locale === 'en-US'
    ? 'Cursos'
    : router.locale === 'pt'
      ? 'Courses'
      : 'Cursos'

      const others =
      router.locale === 'en-US'
        ? 'Seja Vip'
        : router.locale === 'pt'
          ?   'Vip '
          : 'Seja Vip'

      const about =
  router.locale === 'en-US'
    ? 'About'
    : router.locale === 'pt'
      ? 'Sobre'
      : 'About'

      const  contact =
      router.locale === 'en-US'
        ? 'Contact'
        : router.locale === 'pt'
          ? 'Contato'
          : 'Contact'

  return (
    <s.Nav>
      <Container >
        <Navbar light expand="md" sticky="top">
          <h5 className="logomob"><img src="logo.jpg" alt="logo"/></h5>
          <s.NavbarTogglers onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto">
              <s.Nav className="ml-auto">
                <div className="navbar">
                  <ul className="navbar__unordered">
                    <li className="navbar__item"> <Link href="/"> Home </Link></li>
                    <li className="navbar__item" > <a href="#about">{publics}</a></li>
                    {/* <li className="navbar__item"><a href="#">Blog</a></li> */}
                    <li className="navbar__item" > <a href="#news"> {refound} </a> </li>
                    <li className="navbar__item"><a href="#course">{credit}</a></li>
                    {/* <li className="navbar__item"><a href="#others">{others}</a></li> */}
                    {/* <li className="navbar__item" ><a href="#about">{about}</a></li> */}
                    {/* <li className="navbar__item"><a href="#contacts">{contact}</a></li> */}
                    {/* <li className="navbar__item"><span><Link href="/pt">BR</Link></span></li> */}
                    {/* <li className="navbar__item"><span><Link href="/en-US">EN</Link></span></li> */}
                  </ul>
                </div>
              </s.Nav>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </s.Nav>
  )
}
export default Navba