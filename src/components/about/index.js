import React from 'react'
import * as s from './style.js'

const About = () => {
  return (
    <s.About id="abouts">
      <h2>SOBRE</h2>
      <div className="container overlay">
        <div id="home" className="homeinfo">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-xs-12">
              <div className="fronttext">
                <h2 className="bgcolor">
                  <strong>DARKPSY PORTAL</strong>
                </h2>
                <br />
                <p className="animated fadeInUp">
                  A <strong>Psychedelic Lab</strong> é a <strong>primeira plataforma do Brasil</strong> dedicada exclusivamente ao ensino de <strong>produção musical para Dark Psytrance</strong>. Do <strong>Prog Dark</strong> ao <strong>High BPM</strong>, abrangemos todo o espectro do gênero, incluindo <strong>Forest, Psycore, Hi-Tech e Suomi</strong>. Entregamos o conhecimento técnico necessário para quem busca dominar as frequências mais intensas e complexas do underground.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-xs-12">
              <div className="player">
                <iframe 
                  loading="lazy" 
                  width="100%" 
                  height="280" 
                  src="https://www.youtube.com/embed/Onj0Nocvit0?si=SZTJGNyZgvSrNOgD" 
                  title="AbSycho no Universo Paralello" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </s.About>
  )
}

export default About