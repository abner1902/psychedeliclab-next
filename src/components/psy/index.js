import React from 'react'
import * as s from './style'

const Psy = () => {
  return (
    <div className="container">
      <s.Psy >
        <div className="blockblack">
          <div className="spacer">
            <h3><span className="glyphicon glyphicon-user"></span> <strong>Sobre a Psychedelic Lab</strong></h3>
            <div className="row">
              <div className="col-lg-6 col-sm-4  col-xs-12">
                <img src="/psychedelicstudio.jpg" className="img-responsive" alt="about" />
              </div>
              <div className="col-lg-6 col-sm-8  col-xs-12">
<p>
  O <strong>Psychedelic Lab</strong> é a <strong>primeira plataforma do Brasil</strong> dedicada ao ensino profissional de <strong>Darkpsy</strong> e suas vertentes mais intensas: <strong>Forest, Hi-Tech, Psycore, Suomi e Prog Dark</strong>. Criada para guiar desde o produtor iniciante até o avançado, nossa missão é revelar os segredos que o mercado convencional ignora.
</p>

<p>
  Sabemos que o <strong>Sound Design de Darkpsy</strong> exige técnicas específicas. Por isso, entregamos anos de prática em <strong>mixagem, masterização e workflow</strong> aplicados ao <strong>High BPM</strong> — conteúdos exclusivos que você não encontra em nenhum outro curso. Através de mentorias, e-books e tutoriais avançados, aceleramos sua evolução para que você domine as ferramentas e expresse sua arte com <strong>qualidade profissional</strong>. Se você busca seriedade e inovação na produção underground, seu lugar é aqui.
</p>                {/* <blockquote>We serve our clients through a number of services, including effective web design, web application development, print design, online marketing and brand development.</blockquote> --> */}
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
