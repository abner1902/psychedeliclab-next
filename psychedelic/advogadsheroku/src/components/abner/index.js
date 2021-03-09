import React from 'react'
import * as s from './style'


const Abner = () => {
  return (
          <s.Abner>
      <div className="container">
        <div className="blockblack">
    
          <div id="about" className="spacer">
            <h3><span className="glyphicon glyphicon-user"></span> Sobre o Autor</h3>
            <div className="row">
              <div className="col-lg-6 col-sm-4  col-xs-12">
                <img src="/absycho.jpeg" className="img-responsive" alt="about" />
              </div>
              <div className="col-lg-6 col-sm-8  col-xs-12">
                <p>Abner Simão aka ABSYCHO Live, teve contato com a música eletrônica, aos 11 anos de idade, e desde então, seu amor e paixão pela e-music so aumentou.

                    Em 2009 começou a frequentar raves e festivais em são paulo, e criou o seu projeto dj set Absycho, que uns anos depois, iria se transformar em Absycho Live.

                    Teve diversos lançamentos por grandes gravadoras, pelo mundo como Tripura Yantra (Mexico), Visionary Shamanics (Inglaterra) Forest Spirit (India), Badgers (Grecia), Voodooo Hoodoo (Canadá), Grotesque (Servia)

                    Em 2016 fundou a Psychedelic Lab que hoje é a primeira plataforma online, focada para o ensino de Darkpsy e vertentes.

                    E é um dos fundadores da Gravadora paulistana Agya Sounds, do qual varios alunos ja lançaram sons apos ingressar na nossa plataforma.</p>
                {/* <blockquote>We serve our clients through a number of services, including effective web design, web application development, print design, online marketing and brand development.</blockquote> --> */}
              </div>
              <div className="col-lg-3 visible-lg">
              </div>
            </div>
          </div>
        </div>
      
    </div>
    </s.Abner>
  )
}

export default Abner