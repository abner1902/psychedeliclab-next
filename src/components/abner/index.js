import React from 'react'
import * as s from './style.js'

const Abner = () => {
  return (
    <s.Abner>
      <div className="container overlay">
        <div className="homeinfo">
          <div className="row">

            <div className="col-lg-6 col-md-12">
              <div className="fronttext">
                <h1><strong>DARKPSY PORTAL</strong></h1>
                <p>
                  A <strong>Psychedelic Lab</strong> é a <strong>primeira plataforma do Brasil</strong> dedicada exclusivamente ao ensino de <strong>produção musical para Dark Psytrance</strong>.
                </p>
                <p>
                  Do <strong>Prog Dark</strong> ao <strong>High BPM</strong>, abrangemos todo o espectro do gênero, incluindo <strong>Forest, Psycore, Hi-Tech e Suomi</strong>. Entregamos o conhecimento técnico necessário para quem busca dominar as frequências mais intensas e complexas do underground.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="player">
                <iframe loading="lazy"
                  src="https://www.youtube.com/embed/Onj0Nocvit0"
                  title="AbSycho"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </s.Abner>
  )
}

export default Abner