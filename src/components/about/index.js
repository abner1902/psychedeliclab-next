import React from 'react'
import * as s from './style.js'

const About = () => {
  return (
    <s.About id="abouts" >
      <div className="container overlay">
        <div id="home" className="homeinfo">
          <div className="row">
            <div className="col-sm-6 col-xs-12">
              <div className="fronttext">
                <h1 className="bgcolor">
                  Darkpsy Portal
                </h1><br />
                <p className=" animated fadeInUp">Psychedelic lab  é a escola online, voltada para o ensino das vertentes do
                DarkPsy, como Psycore, Forest, Hi-Tech, Suomi, Prog Dark, conceitos focados para esse gênero são
              discutidos e compartilhados, em vídeos tutoriais, E-books e muito mais !</p>
              </div>
            </div>

            <div className="col-sm-5 col-xs-12 col-sm-offset-1">
              <div className="player">
                <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/702679552&color=%23391644&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
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
