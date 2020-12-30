import React from 'react'
import * as s from './style'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import Link from 'next/link'

const Footer = () => (
  <div>
    <s.Footer>
      <div className="footer">
        <ul className="footer__list">
          <li classNam="footer__strong"><strong>Institucional</strong></li>
          <li><Link href="/">Home</Link></li>
          <li><a href="#about">About</a></li>
          {/* <li><a href="#news">Notícias</a></li> */}
          <li><a href="#course">Cursos</a></li>
          {/* <li><a>Seja Vip</a></li> */}
          <lli><a href="#news">Links & Noicias</a></lli>
        </ul>
      </div>
      <div className="follow">
        <ul className="follow__list">
          <li className="follow__strong">Siga-nos</li>
          <li><a href="https://www.facebook.com/Labpsychedelic"><FacebookIcon/></a></li>
          <li className="follow__spacing"><a href="#"><InstagramIcon/></a></li>
        </ul>
      </div>
      {/* <div className="follow__inline">
        <ul className="follow__inline">
        </ul>
      </div> */}
      {/* <div className="logo">
        <img className="logo__footer" src="logo.png/"/>
      </div> */}
    </s.Footer>
  </div>
)

export default Footer
