import React from 'react'
import * as s from './style'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const Tuto = () => {
  return (
    <div className="container">
      <s.Tuto>
        <div id="album" className="blockblack">
          <h3><strong>TUTORIAIS</strong></h3>
          <div className="row">
            
            {/* Vídeo 1 */}
            <div className="col-sm-3 col-12">
              <div className="album">
                <LiteYouTubeEmbed 
                  id="FC4qrLfLrGQ"
                  title="Tutorial de Darkpsy - Introdução"
                  poster="hqdefault"
                  noCookie={true}
                />
                <div className="albumdetail"></div>
              </div>
            </div>

            {/* Vídeo 2 */}
            <div className="col-sm-3 col-12">
              <div className="album">
                <LiteYouTubeEmbed 
                  id="UAHw7OS-vkI"
                  title="Tutorial de Darkpsy - Kick e Bass"
                  poster="hqdefault"
                  noCookie={true}
                />
                <div className="albumdetail"></div>
              </div>
            </div>

            {/* Vídeo 3 */}
            <div className="col-sm-3 col-12">
              <div className="album">
                <LiteYouTubeEmbed 
                  id="rknLXpKqYEI"
                  title="Tutorial de Darkpsy - Leads e Synths"
                  poster="hqdefault"
                  noCookie={true}
                />
                <div className="albumdetail"></div>
              </div>
            </div>

            {/* Vídeo 4 */}
            <div className="col-sm-3 col-12">
              <div className="album">
                <LiteYouTubeEmbed 
                  id="6HVX2zH9CEw"
                  title="Tutorial de Darkpsy - Efeitos"
                  poster="hqdefault"
                  noCookie={true}
                />
                <div className="albumdetail"></div>
              </div>
            </div>

            {/* Vídeo 5 */}
            <div className="col-sm-3 col-12">
              <div className="album">
                <LiteYouTubeEmbed 
                  id="flUkXJpD270"
                  title="Tutorial de Darkpsy - Arranjo"
                  poster="hqdefault"
                  noCookie={true}
                />
                <div className="albumdetail"></div>
              </div>
            </div>

            {/* Vídeo 6 */}
            <div className="col-sm-3 col-12">
              <div className="album">
                <LiteYouTubeEmbed 
                  id="UmyVEJOZE-s"
                  title="Tutorial de Darkpsy - Mixagem"
                  poster="hqdefault"
                  noCookie={true}
                />
                <div className="albumdetail"></div>
              </div>
            </div>

            {/* Vídeo 7 */}
            <div className="col-sm-3 col-12">
              <div className="album">
                <LiteYouTubeEmbed 
                  id="8n7lgQD2koo"
                  title="Tutorial de Darkpsy - Masterização"
                  poster="hqdefault"
                  noCookie={true}
                />
                <div className="albumdetail"></div>
              </div>
            </div>

            {/* Vídeo 8 */}
            <div className="col-sm-3 col-12">
              <div className="album">
                <LiteYouTubeEmbed 
                  id="uis99Zz-5DU"
                  title="Tutorial de Darkpsy - Sound Design"
                  poster="hqdefault"
                  noCookie={true}
                />
                <div className="albumdetail"></div>
              </div>
            </div>

          </div>
        </div>
      </s.Tuto>
    </div>
  )
}

export default Tuto