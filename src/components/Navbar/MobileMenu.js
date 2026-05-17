import React from 'react'
import Link from 'next/link'
import * as s from './style'

const NAV_LINKS = [
  { href: '/', label: 'Home', isNextLink: true },
  { href: '#about', label: 'Sobre' },
  { href: '#album', label: 'Tutoriais' },
  { href: '#testimonials', label: 'Depoimentos' },
  { href: '#playlist', label: 'Playlist' },
  { href: '#links', label: 'Free Links' },
  { href: '#telegram', label: 'Comunidade' },
  { href: '#samplepack', label: 'Sample Pack' },
  { href: '#faq', label: 'FAQ' }
]

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  const handleClick = () => onClose()

  return (
    <>
      <s.MobileBackdrop onClick={onClose} aria-hidden="true" />
      <s.MobileDrawer role="dialog" aria-modal="true" aria-label="Menu de navegação">
        <ul className="mobile-menu__list">
          {NAV_LINKS.map(({ href, label, isNextLink }) => (
            <li key={href} className="mobile-menu__item">
              {isNextLink ? (
                <Link href={href} className="mobile-menu__link" onClick={handleClick}>
                  {label}
                </Link>
              ) : (
                <a href={href} className="mobile-menu__link" onClick={handleClick}>
                  {label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </s.MobileDrawer>
    </>
  )
}

export default MobileMenu
