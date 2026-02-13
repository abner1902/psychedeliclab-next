import React from 'react'
import * as s from './style.js'

const About = () => {
  return (
    <s.About id="abouts" >
      <div className="container overlay">
        <div id="home" className="homeinfo">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-xs-12">
              <div className="fronttext">
                <h1 className="bgcolor">
                  <strong>DARKPSY PORTAL</strong>
                </h1><br />
                <p className="animated fadeInUp">
                  A <strong>Psychedelic Lab</strong> é a <strong>primeira plataforma do Brasil</strong> dedicada exclusivamente ao ensino de <strong>produção musical para Dark Psytrance</strong>. Do <strong>Prog Dark</strong> ao <strong>High BPM</strong>, abrangemos todo o espectro do gênero, incluindo <strong>Forest, Psycore, Hi-Tech e Suomi</strong>. Entregamos o conhecimento técnico necessário para quem busca dominar as frequências mais intensas e complexas do underground.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-xs-12">
              <div className="player">
                <iframe 
  width="100%" 
  height="280" 
  src="https://www.youtube.com/embed/Onj0Nocvit0?si=SZTJGNyZgvSrNOgD" 
  title="AbSycho no Universo Paralello" 
  frameBorder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowFullScreen
></iframe>
                {/* <div
                    style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
                    <a href="https://soundcloud.com/agyasounds" title="Agya Sounds (OFICIAL)" target="_blank"
                      style="color: #cccccc; text-decoration: none;">Agya Sounds (OFICIAL)</a> · <a
                        href="https://soundcloud.com/agyasounds/vajrapani-quantic-groove-174"
                        title="Vajrapani - Quantic Groove (174)" target="_blank"
                        style="color: #cccccc; text-decoration: none;">Vajrapani - Quantic Groove (174)</a></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </s.About>
  )
}

export default About
