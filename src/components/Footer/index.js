import React from 'react'
import * as s from './style'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'
import Link from 'next/link'

const Footer = () => (
  <div>
    <s.Footer>
        <div className="container">
      <div className="footer">
      <div className="row">

        <div className="col-md-4">
        <ul className="footer__list">
          <li className="footer__strong"><strong>Psychedelic Lab</strong></li>
          <li><Link href="/">Home</Link></li>
          <li><a href="#album">Tutoriais</a></li>
          <li><a href="#about">Sobre</a></li>
        </ul> 
      </div>

      <div className="col-md-4">
        <ul className="footer__list">
          {/* <li className="footer__strong"><strong>Institucional</strong></li> */}
          <li><a href="#playlist">Playlist</a></li>
          <lli><a href="#news">Links & Notícias</a></lli>
          <li><Link href="#telegram">Comunidade</Link></li>
          <li><a href="#samplepack">Sample Pack</a></li>
          <lli><a href="#faq">Perguntas Frequentes</a></lli>
        </ul>
        </div>
      
      <div className="col">
      <div className="follow">
        <ul className="follow__list">
          <li className="follow__strong"><strong>Saiba Mais!</strong></li>
          {/* <li classname="follow__spacing"><a href="https://www.youtube.com/channel/UCl5ds-D3qvIVVsC2kraVFuA/"><YouTubeIcon /></a></li> */}
          <li className><a href="https://www.facebook.com/Labpsychedelic"><FacebookIcon/></a></li>
          <li className="follow__spacing"><a href="https://www.instagram.com/agya_sounds/"><InstagramIcon/></a></li>
        </ul>
        <ul>
          
        </ul>
      </div>
    </div>
      </div>
  </div>
  </div>
    </s.Footer>
  </div>
)

export default Footer
