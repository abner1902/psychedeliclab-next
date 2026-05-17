import React from 'react'
import * as s from './style.js'

const Abner = () => {
  return (
    <s.Abner>
      <div className="container overlay">
        <div className="blockblack">
          <div className="row align-items-center">

            <div className="col-lg-6 col-md-12">
              <div className="fronttext">
                <h1 className="bgcolor">
                  <strong>DARKPSY PORTAL</strong>
                </h1>
                <p>
                  A <strong>Psychedelic Lab</strong> é a <strong>primeira plataforma do Brasil</strong> dedicada exclusivamente ao ensino de <strong>produção musical para Dark Psytrance</strong>.
                </p>
                <p>
                  Do <strong>Prog Dark</strong> ao <strong>High BPM</strong>, abrangemos todo o espectro do gênero, incluindo <strong>Forest, Psycore, Hi-Tech e Suomi</strong>. Entregamos o conhecimento técnico necessário para quem busca dominar as frequências mais intensas e complexas do underground.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="player-wrapper" style={{ position: 'relative', paddingTop: '56.25%', borderRadius: '12px', overflow: 'hidden' }}>
                <iframe
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
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
