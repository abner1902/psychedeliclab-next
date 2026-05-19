import React from 'react'
import * as s from './style'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaSoundcloud, FaGlobe } from 'react-icons/fa'
import { MdMenuBook } from 'react-icons/md'

const Footer = () => (
  <s.Footer>
    <div className="container">
      <div className="footer">
        <div className="row">

          <div className="col-12 col-md-3">
            <ul className="footer__list">
              <li className="footer__strong"><strong>Psychedelic Lab</strong></li>
              <li><Link href="/">Home</Link></li>
              <li><a href="#album">Tutoriais</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#faq">Perguntas Frequentes</a></li>
            </ul>
          </div>

          <div className="col-12 col-md-3">
            <ul className="footer__list">
              <li className="footer__strong"><strong>Conteúdo</strong></li>
              <li><a href="#playlist">Playlist</a></li>
              <li><a href="#news">Links & Notícias</a></li>
              <li><a href="#telegram">Comunidade</a></li>
              <li><a href="#samplepack">Sample Pack</a></li>
              <li>
                <a href="https://hotmart.com/pt-br/marketplace/produtos/psychedelic-lab-apostila-oficial/D44881806W" target="_blank" rel="noopener noreferrer" className="link-icon">
                  <MdMenuBook /> Apostila Oficial
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-6">
            <div className="follow">
              <ul className="follow__list">
                <li className="follow__strong"><strong>Conecte-se com a Lab</strong></li>
                <li className="follow__item">
                  <a aria-label="WhatsApp" href="https://api.whatsapp.com/" aria-label="Falar no WhatsApp" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp /> <span>WhatsApp</span>
                  </a>
                </li>
                <li className="follow__item">
                  <a aria-label="Instagram" href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                    <FaInstagram /> <span>Instagram</span>
                  </a>
                </li>
                <li className="follow__item">
                  <a href="https://agyasounds.com.br" target="_blank" rel="noopener noreferrer">
                    <FaGlobe /> <span>Agya Sounds</span>
                  </a>
                </li>
                <li className="follow__item">
                  <a aria-label="SoundCloud" href="https://soundcloud.com/" aria-label="SoundCloud" target="_blank" rel="noopener noreferrer">
                    <FaSoundcloud /> <span>Soundcloud</span>
                  </a>
                </li>
                <li className="follow__item">
                  <a aria-label="Facebook" href="https://www.facebook.com/Labpsychedelic" target="_blank" rel="noopener noreferrer">
                    <FaFacebook /> <span>Facebook</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <div className="footer__credits">
        <p>© 2026 Psychedelic Lab. Todos os direitos reservados.</p>
        <p>
          Desenvolvido por{' '}
          <a href="https://www.abnersimao.com.br/" target="_blank" rel="noopener noreferrer">
            Abner Simão Design
          </a>
        </p>
      </div>
    </div>
  </s.Footer>
)

export default Footer