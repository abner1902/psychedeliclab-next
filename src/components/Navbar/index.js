import React, { useState } from 'react'
import * as s from './style'
import { Navbar, NavbarBrand } from 'reactstrap'
import { Container } from 'react-bootstrap'
import Link from 'next/link'
import MobileMenu from './MobileMenu'

const Navba = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset'
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <s.NavWrapper>
      <Container>
        <Navbar expand="lg" dark className="w-100 p-0">
          {/* LOGO */}
          <NavbarBrand href="/">
            <img
              src="/logo.webp"
              alt="Psychedelic Lab - Curso de Darkpsy"
              title="Psychedelic Lab"
            />
          </NavbarBrand>

          {/* HAMBURGUER ANIMADO */}
          <s.NavbarTogglerStyled
            onClick={toggle}
            className={isOpen ? '' : 'collapsed'}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          />

          {/* MENU MOBILE/DESKTOP – DIV SIMPLES, SEM REACTSTRAP COLLAPSE */}
          <div className={`navbar-collapse ${isOpen ? 'show' : ''}`}>
            <ul className="navbar__unordered">
              <li className="nav-item">
                <Link href="/" onClick={closeMenu} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <a aria-label="Link de navegação" href="#about" className="nav-link" onClick={closeMenu}>Sobre</a>
              </li>
              <li className="nav-item">
                <a aria-label="Link de navegação" href="#album" className="nav-link" onClick={closeMenu}>Tutoriais</a>
              </li>
              <li className="nav-item">
                <a aria-label="Link de navegação" href="#testimonials" className="nav-link" onClick={closeMenu}>Depoimentos</a>
              </li>
              <li className="nav-item">
                <a aria-label="Link de navegação" href="#playlist" className="nav-link" onClick={closeMenu}>Playlist</a>
              </li>
              <li className="nav-item">
                <a aria-label="Link de navegação" href="#links" className="nav-link" onClick={closeMenu}>Free Links</a>
              </li>
              <li className="nav-item">
                <a aria-label="Link de navegação" href="#telegram" className="nav-link" onClick={closeMenu}>Comunidade</a>
              </li>
              <li className="nav-item">
                <a aria-label="Link de navegação" href="#samplepack" className="nav-link" onClick={closeMenu}>Sample Pack</a>
              </li>
              <li className="nav-item">
                <a aria-label="Link de navegação" href="#faq" className="nav-link" onClick={closeMenu}>FAQ</a>
              </li>
            </ul>
          </div>
        </Navbar>
      </Container>
      <MobileMenu isOpen={isOpen} onClose={closeMenu} />
    </s.NavWrapper>
  )
}

export default Navba
