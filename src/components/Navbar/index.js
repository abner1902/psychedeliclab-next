import React, { useState } from 'react'
import * as s from './style'
import { Container, Navbar as BootstrapNavbar } from 'react-bootstrap'
import Link from 'next/link'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
    if (typeof document !== 'undefined') {
      document.body.style.overflow = !isOpen ? 'hidden' : 'unset'
    }
  }

  const closeMenu = () => {
    setIsOpen(false)
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'unset'
    }
  }

  return (
    <s.NavWrapper>
      <Container>
        <BootstrapNavbar expand="lg" variant="dark" className="w-100 p-0">
          
          {/* LOGO - Otimizada para Lighthouse */}
          <BootstrapNavbar.Brand as={Link} href="/">
            <img
              src="/logo.webp"
              alt="Psychedelic Lab Logo"
              width="180" 
              height="45"
            />
          </BootstrapNavbar.Brand>

          {/* BOTÃO MOBILE (Hambúrguer) */}
          <s.NavbarTogglerStyled
            onClick={toggle}
            className={isOpen ? 'active' : ''}
            aria-label="Abrir menu"
          >
            <span className="navbar-toggler-icon" />
          </s.NavbarTogglerStyled>

          {/* LISTA COMPLETA DE LINKS (Restaurada) */}
          <div className={`navbar-collapse ${isOpen ? 'show' : ''}`}>
            <ul className="navbar__unordered">
              <li className="nav-item">
                <Link href="/" className="nav-link" onClick={closeMenu}>Home</Link>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link" onClick={closeMenu}>Sobre</a>
              </li>
              <li className="nav-item">
                <a href="#album" className="nav-link" onClick={closeMenu}>Tutoriais</a>
              </li>
              <li className="nav-item">
                <a href="#testimonials" className="nav-link" onClick={closeMenu}>Depoimentos</a>
              </li>
              <li className="nav-item">
                <a href="#playlist" className="nav-link" onClick={closeMenu}>Playlist</a>
              </li>
              <li className="nav-item">
                <a href="#links" className="nav-link" onClick={closeMenu}>Free Links</a>
              </li>
              <li className="nav-item">
                <a href="#telegram" className="nav-link" onClick={closeMenu}>Comunidade</a>
              </li>
              <li className="nav-item">
                <a href="#samplepack" className="nav-link" onClick={closeMenu}>Sample Pack</a>
              </li>
              <li className="nav-item">
                <a href="#faq" className="nav-link" onClick={closeMenu}>FAQ</a>
              </li>
            </ul>
          </div>
        </BootstrapNavbar>
      </Container>
      
      {/* Drawer Mobile que você já tinha */}
      <MobileMenu isOpen={isOpen} onClose={closeMenu} />
    </s.NavWrapper>
  )
}

export default Navbar