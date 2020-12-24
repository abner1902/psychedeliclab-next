import React from 'react'
import * as s from './style'
const Psy = () => {
  return (
    <div className="container">
      <s.Psy>
        <div className="blockblack">
          <div id="about" className="spacer">
            <h3><span className="glyphicon glyphicon-user"></span> Sobre</h3>
            <div className="row">
              <div className="col-lg-4 col-sm-4  col-xs-12">
                <img src="/psychedeliclogo.jpg" className="img-responsive" alt="about" />
              </div>
              <div className="col-lg-6 col-sm-8  col-xs-12">
                <p>O Psychedelic Lab, é a escola online, voltada para o ensino das vertentes do Darkpsy, como Forest, Hi -
                                Tech, Psycore, Suomi e Prog Dark, foi criada para auxiliar, os iniciantes e até mesmo quem ja esta
                                arriscando umas produções, essas vertentes não são muito discutidas e comentadas, não tem muitos conteúdos
                                online, voltados para o darkpsy, quais plugins usar, quais tecnicas de mixagem e equalização, conteudos
                                que não existem em nenhum curso por ai, são anos de muito estudo e prática que estarão disponíveis em
                                vídeos tutoriais, tanto gratuitos, e pagos para acelerar o processo de vocês, e também compartilhar
                                informação para todos que querem se dedicar, e trabalhar serio naquilo que realmente ama, se você se
                     identifica, seu lugar é aqui, muito obrigado e vamos que a estrada é longa!</p>
                {/* <blockquote>We serve our clients through a number of services, including effective web design, web application development, print design, online marketing and brand development.</blockquote> --> */}
              </div>
              <div className="col-lg-3 visible-lg">
              </div>
            </div>
          </div>
        </div>
      </s.Psy>
    </div>
  )
}

export default Psy
