import React from 'react'
import * as s from './style'
import Link from 'next/link'

// Ícones
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import CloudQueueIcon from '@material-ui/icons/CloudQueue' 
import CastConnectedIcon from '@material-ui/icons/CastConnected' 
import MenuBookIcon from '@material-ui/icons/MenuBook' 
import WebIcon from '@material-ui/icons/Web' 

const Footer = () => (
  <s.Footer>
    <div className="container">
      <div className="footer">
        <div className="row">

          {/* 🔹 Coluna 1: Navegação */}
          <div className="col-12 col-md-3">
            <ul className="footer__list">
              <li className="footer__strong"><strong>Psychedelic Lab</strong></li>
              <li><Link href="/">Home</Link></li>
              <li><a href="#album">Tutoriais</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#faq">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* 🔹 Coluna 2: Conteúdo */}
          <div className="col-12 col-md-3">
            <ul className="footer__list">
              <li className="footer__strong"><strong>Conteúdo</strong></li>
              <li><a href="#playlist">Playlist</a></li>
              <li><a href="#news">Links & Notícias</a></li>
              <li><a href="#telegram">Comunidade</a></li>
              <li><a href="#samplepack">Sample Pack</a></li>
              <li>
                <a 
                  href="https://hotmart.com/pt-br/marketplace/produtos/psychedelic-lab-apostila-oficial/D44881806W" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="link-icon"
                >
                  <MenuBookIcon /> Apostila Oficial
                </a>
              </li>
            </ul>
          </div>

          {/* 🔹 Coluna 3: Social */}
          <div className="col-12 col-md-6">
            <div className="follow">
              <ul className="follow__list">
                <li className="follow__strong"><strong>Conecte-se com a Lab</strong></li>
                
                <li className="follow__item">
                  <a href="https://api.whatsapp.com/send?phone=5511996670948&text=Olá! Vim pelo portal Psychedelic Lab" target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon /> <span>WhatsApp</span>
                  </a>
                </li>

                <li className="follow__item">
                  <a href="https://www.instagram.com/labpsychedelic" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon /> <span>Instagram</span>
                  </a>
                </li>

                <li className="follow__item">
                  <a href="https://agyasounds.com.br" target="_blank" rel="noopener noreferrer">
                    <WebIcon /> <span>Agya Sounds</span>
                  </a>
                </li>

                <li className="follow__item">
                  <a href="https://soundcloud.com/absycho" target="_blank" rel="noopener noreferrer">
                    <CloudQueueIcon /> <span>Soundcloud</span>
                  </a>
                </li>

                <li className="follow__item">
                  <a href="https://www.facebook.com/Labpsychedelic" target="_blank" rel="noopener noreferrer">
                    <FacebookIcon /> <span>Facebook</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* 🔹 Créditos no rodapé */}
      <div className="footer__credits">
        <p>© 2026 Psychedelic Lab. Todos os direitos reservados.</p>
        <p>
          Desenvolvido por{' '}
          <a
            href="https://www.abnersimao.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abner Simão Design
          </a>
        </p>
      </div>
    </div>
  </s.Footer>
)

export default Footer
