import React from 'react'
import * as s from './style'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
const Footer = () => (
  <div>
    <s.Footer>
      <div className="footer">
        <ul className="footer__list">
          <li classNam="footer__strong">Institucional</li>
          <li>Home</li>
          <li>About</li>
          <li>Notícias</li>
          <li>Cursos</li>
          <li>Seja Vip</li>
        </ul>
      </div>
      <div className="follow">
        <ul className="follow__list">
          <li className="follow__strong">Siga-nos</li>
          <li><FacebookIcon/></li>
          <li className="follow__spacing"><InstagramIcon/></li>
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
