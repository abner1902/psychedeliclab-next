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
                <img src="/psychedelicstudio.jpeg" className="img-responsive" alt="about" />
              </div>
              <div className="col-lg-6 col-sm-8  col-xs-12">
                <p>O Psychedelic Lab é a escola online voltada para o ensino das vertentes do Darkpsy, como Forest, Hi-Tech, Psycore, Suomi e Prog Dark, foi criada para auxiliar os iniciantes e até mesmo quem ja esta arriscando umas produções. Essas vertentes não são muito discutidas e comentadas, não tem muitos conteúdos online voltados para o darkpsy, quais plugins usar, quais tecnicas de mixagem e equalização, conteudos que não existem em nenhum curso por aí. São anos de muito estudo e prática que estarão disponíveis em vídeos tutoriais, tanto gratuitos quanto pagos, para acelerar o processo de vocês e também compartilhar informação para todos que querem se dedicar e trabalhar sério naquilo que realmente ama. Se você se identifica, seu lugar é aqui. Muito obrigado e vamos que a estrada é longa!</p>
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
