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
                    <li className="navbar__item"><a href="#album"> Tutoriais </a></li>
                    <li className="navbar__item"><a href="#about"> Sobre</a></li>
                    <li className="navbar__item" > <a href="#playlist"> Playlist </a> </li>
                    <li className="navbar__item"><a href="#links"> Free Links & News </a></li>
                    <li className="navbar__item"><a href="#telegram"> Comunidade </a></li>
                    <li className="navbar__item" > <a href="#samplepack"> Sample Pack </a> </li>
                    <li className="navbar__item"><a href="#faq"> FAQ</a></li>

                    


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