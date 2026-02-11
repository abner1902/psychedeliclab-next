import * as s from './style'
import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  Nav,
  NavbarBrand
} from 'reactstrap'
import { Container } from 'react-bootstrap'
import Link from 'next/link'

const Navba = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const closeMenu = () => setIsOpen(false)

  return (
    <s.NavWrapper>
      <Container>
        <Navbar expand="lg" dark>

          {/* LOGO */}
          <NavbarBrand href="/">
            <img src="/logo.jpg" alt="Psychedelic Lab Logo" />
          </NavbarBrand>

          {/* BOTÃO HAMBURGER */}
          <s.NavbarTogglerStyled
            onClick={toggle}
            className={isOpen ? "" : "collapsed"}
          />

          {/* MENU */}
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <ul className="navbar__unordered">
                <li><Link href="/" onClick={closeMenu}>Home</Link></li>
                <li><a href="#album" onClick={closeMenu}>Tutoriais</a></li>
                <li><a href="#about" onClick={closeMenu}>Sobre</a></li>
                <li><a href="#playlist" onClick={closeMenu}>Playlist</a></li>
                <li><a href="#links" onClick={closeMenu}>Free Links & News</a></li>
                <li><a href="#telegram" onClick={closeMenu}>Comunidade</a></li>
                <li><a href="#samplepack" onClick={closeMenu}>Sample Pack</a></li>
                <li><a href="#faq" onClick={closeMenu}>FAQ</a></li>
              </ul>
            </Nav>
          </Collapse>

        </Navbar>
      </Container>
    </s.NavWrapper>
  )
}

export default Navba
