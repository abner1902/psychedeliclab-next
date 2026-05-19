import React from 'react'
import * as s from './style.js'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

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
                <LiteYouTubeEmbed 
                  id="Onj0Nocvit0"
                  title="AbSycho no Universo Paralello"
                  poster="hqdefault"
                  noCookie={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </s.About>
  )
}

export default About