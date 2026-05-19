import React from 'react'
import * as s from './style'

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
                <iframe 
                  loading="lazy" 
                  width="560" 
                  height="315" 
                  className="img-responsive" 
                  src="https://www.youtube.com/embed/FC4qrLfLrGQ" 
                  title="Tutorial de Darkpsy - Introdução" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
                <div className="albumdetail"></div>
              </div>
            </div>

            {/* Vídeo 2 */}
            <div className="col-sm-3 col-12">
              <div className="album">
                <iframe 
                  loading="lazy" 
                  width="560" 
                  height="315" 
                  className="img-responsive" 
                  src="https://www.youtube.com/embed/UAHw7OS-vkI" 
                  title="Tutorial de Darkpsy - Kick e Bass" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
                <div className="albumdetail"></div>
              </div>
            </div>

            {/* Vídeo 3 */}
            <div className="col-sm-3 col-12">
              <div className="album">
                <iframe 
                  loading="lazy" 
                  width="560" 
                  height="315" 
                  className="img-responsive" 
                  src="https://www.youtube.com/embed/rknLXpKqYEI" 
                  title="Tutorial de Darkpsy - Leads e Synths" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
                <div className="albumdetail"></div>
              </div>
            </div>

            {/* Vídeo 4 */}
            <div className="col-sm-3 col-12">
              <div className="album">
                <iframe 
                  loading="lazy" 
                  width="560" 
                  height="315" 
                  className="img-responsive" 
                  src="https://www.youtube.com/embed/6HVX2zH9CEw" 
                  title="Tutorial de Darkpsy - Efeitos" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
                <div className="albumdetail"></div>
              </div>
            </div>

            {/* Vídeo 5 */}
            <div className="col-sm-3 col-12">
              <div className="album">
                <iframe 
                  loading="lazy" 
                  width="560" 
                  height="315" 
                  className="img-responsive" 
                  src="https://www.youtube.com/embed/flUkXJpD270" 
                  title="Tutorial de Darkpsy - Arranjo" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
                <div className="albumdetail"></div>
              </div>
            </div>

            {/* Vídeo 6 */}
            <div className="col-sm-3 col-12">
              <div className="album">
                <iframe 
                  loading="lazy" 
                  width="560" 
                  height="315" 
                  className="img-responsive" 
                  src="https://www.youtube.com/embed/UmyVEJOZE-s" 
                  title="Tutorial de Darkpsy - Mixagem" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
                <div className="albumdetail"></div>
              </div>
            </div>

            {/* Vídeo 7 */}
            <div className="col-sm-3 col-12">
              <div className="album">
                <iframe 
                  loading="lazy" 
                  width="560" 
                  height="315" 
                  className="img-responsive" 
                  src="https://www.youtube.com/embed/8n7lgQD2koo" 
                  title="Tutorial de Darkpsy - Masterização" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
                <div className="albumdetail"></div>
              </div>
            </div>

            {/* Vídeo 8 */}
            <div className="col-sm-3 col-12">
              <div className="album">
                <iframe 
                  loading="lazy" 
                  width="560" 
                  height="315" 
                  className="img-responsive" 
                  src="https://www.youtube.com/embed/uis99Zz-5DU" 
                  title="Tutorial de Darkpsy - Sound Design" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
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