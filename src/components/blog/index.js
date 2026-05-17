import React from 'react'
import GetAppIcon from '@material-ui/icons/GetApp';
import * as s from './style.js'

const Blog = () => {
  return (
    <s.Blog>
      <div id="links" className="container">
        <div id="blogevent" className="blockblack">
          <div className="row">
            {/* COLUNA DA ESQUERDA: FREE DOWNLOADS */}
            <div className="col-md-6 col-12">
              <div className="events">
                <h3 className="events-title"><span className="glyphicon glyphicon-calendar"></span> <strong>FREE DOWNLOAD</strong></h3>
                <ul className="download-list">
                  <li className="download-item">
                    <a href="https://mega.nz/file/iEc0GaqJ#FNs4bMfy1b7KHMB4PLo9lXTXxOc-yiSztROdLyhyhZ4" target="_blank" rel="noopener noreferrer" className="download-thumb">
                      <img src="/packdrums.webp" className="img-responsive" alt="Pack Drums" />
                    </a>
                    <div className="download-info">
                      <h5>
                        <a href="https://mega.nz/file/iEc0GaqJ#FNs4bMfy1b7KHMB4PLo9lXTXxOc-yiSztROdLyhyhZ4" target="_blank" rel="noopener noreferrer">Pack Drums</a>
                      </h5>
                    </div>
                    <a href="https://mega.nz/file/iEc0GaqJ#FNs4bMfy1b7KHMB4PLo9lXTXxOc-yiSztROdLyhyhZ4" target="_blank" rel="noopener noreferrer" className="download-action" aria-label="Baixar Pack Drums">
                      <GetAppIcon />
                    </a>
                  </li>
                  <li className="download-item">
                    <a href="https://mega.nz/file/Lds3jLKK#_T8c7bhgplGB3rHVM6SzD-D5-_aiGboftHikwd3fkKg" target="_blank" rel="noopener noreferrer" className="download-thumb">
                      <img src="/kicka.webp" className="img-responsive" alt="Kick Samples" />
                    </a>
                    <div className="download-info">
                      <h5>
                        <a href="https://mega.nz/file/Lds3jLKK#_T8c7bhgplGB3rHVM6SzD-D5-_aiGboftHikwd3fkKg" target="_blank" rel="noopener noreferrer">Kick Samples</a>
                      </h5>
                    </div>
                    <a href="https://mega.nz/file/Lds3jLKK#_T8c7bhgplGB3rHVM6SzD-D5-_aiGboftHikwd3fkKg" target="_blank" rel="noopener noreferrer" className="download-action" aria-label="Baixar Kick Samples">
                      <GetAppIcon />
                    </a>
                  </li>
                  <li className="download-item">
                    <a href="https://mega.nz/file/jRsBBC4R#Tiz9k77pOVn0vw3y5slliA29StzcRqDCAcnSs1NIfVc" target="_blank" rel="noopener noreferrer" className="download-thumb">
                      <img src="/Darkpsypreset.webp" className="img-responsive" alt="Darkpsy Preset" />
                    </a>
                    <div className="download-info">
                      <h5>
                        <a href="https://mega.nz/file/jRsBBC4R#Tiz9k77pOVn0vw3y5slliA29StzcRqDCAcnSs1NIfVc" target="_blank" rel="noopener noreferrer">Darkpsy Presset</a>
                      </h5>
                    </div>
                    <a href="https://mega.nz/file/jRsBBC4R#Tiz9k77pOVn0vw3y5slliA29StzcRqDCAcnSs1NIfVc" target="_blank" rel="noopener noreferrer" className="download-action" aria-label="Baixar Darkpsy Preset">
                      <GetAppIcon />
                    </a>
                  </li>
                  <li className="download-item">
                    <a href="https://mega.nz/file/PRtxCQgI#GMRqARaT7CY24dbyEhbto_Rn_fmuhutOK9mAiAdNjvc" target="_blank" rel="noopener noreferrer" className="download-thumb">
                      <img src="/Wavetables.webp" className="img-responsive" alt="Wavetables" />
                    </a>
                    <div className="download-info">
                      <h5>
                        <a href="https://mega.nz/file/PRtxCQgI#GMRqARaT7CY24dbyEhbto_Rn_fmuhutOK9mAiAdNjvc" target="_blank" rel="noopener noreferrer">Pack de Wavetables para o Serum</a>
                      </h5>
                    </div>
                    <a href="https://mega.nz/file/PRtxCQgI#GMRqARaT7CY24dbyEhbto_Rn_fmuhutOK9mAiAdNjvc" target="_blank" rel="noopener noreferrer" className="download-action" aria-label="Baixar Pack de Wavetables">
                      <GetAppIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* COLUNA DA DIREITA: SE LIGA AI (NOTÍCIAS) */}
            <div className="col-md-5 offset-md-1 col-12">
              <div className="ourblog">
                <h3 className="ourblog-title"><span className="glyphicon glyphicon-book"></span> <strong>SE LIGA AÍ!</strong></h3>
                <ul className="blog-list">
                  <li className="blog-item">
                    <a href="https://agyasounds.bandcamp.com/album/pineal-vision-ep" target="_blank" rel="noopener noreferrer" className="blog-thumb">
                      <img src="/pineal.webp" className="img-responsive" alt="Pineal Vision" />
                    </a>
                    <div className="blog-content">
                      <h5><a href="https://agyasounds.bandcamp.com/album/pineal-vision-ep" target="_blank" rel="noopener noreferrer">Darkpsy notícias</a></h5>
                      <p>Pineal Vision EP - Agya Sounds</p>
                    </div>
                  </li>
                  <li className="blog-item">
                    <a href="https://agyasounds.bandcamp.com/album/v-a-fungus-slug-compiled-by-ovni-messenger" target="_blank" rel="noopener noreferrer" className="blog-thumb">
                      <img src="/fungus.webp" className="img-responsive" alt="Fungus Slug" />
                    </a>
                    <div className="blog-content">
                      <h5><a href="https://agyasounds.bandcamp.com/album/v-a-fungus-slug-compiled-by-ovni-messenger" target="_blank" rel="noopener noreferrer">Darkpsy Notícias</a></h5>
                      <p>V.A Fungus Slug - Compiled by Ovni Messenger</p>
                    </div>
                  </li>
                  <li className="blog-item">
                    <a href="https://www.reaper.fm/" target="_blank" rel="noopener noreferrer" className="blog-thumb">
                      <img src="/reaper.webp" className="img-responsive" alt="Reaper DAW" />
                    </a>
                    <div className="blog-content">
                      <h5><a href="https://www.reaper.fm/" target="_blank" rel="noopener noreferrer">Darkpsy Notícias</a></h5>
                      <p>Conheça o Reaper: a DAW gratuita mais top do mercado.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </s.Blog>
  )
}

export default Blog
