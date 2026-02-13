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
            <div className="col-md-6 col-xs-12">
              <div className="events">
                <h3><span className="glyphicon glyphicon-calendar"></span> <strong>FREE DOWNLOAD</strong></h3>
                <ul>
                  <li>
                    <div className="row">
                      <div className="col-xs-12 col-sm-12 col-lg-4">
                        <a href="https://mega.nz/file/iEc0GaqJ#FNs4bMfy1b7KHMB4PLo9lXTXxOc-yiSztROdLyhyhZ4" target="_blank" rel="noopener noreferrer">
                          <img src="packdrums.jpg" className="img-responsive" alt="Pack Drums" />
                        </a>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-lg-5">
                        <h5>
                          <a href="https://mega.nz/file/iEc0GaqJ#FNs4bMfy1b7KHMB4PLo9lXTXxOc-yiSztROdLyhyhZ4" target="_blank" rel="noopener noreferrer">Pack Drums</a>
                        </h5>
                      </div>
                      <div className="col-xs-12 col-sm-3 col-lg-3 date">
                        <a href="https://mega.nz/file/iEc0GaqJ#FNs4bMfy1b7KHMB4PLo9lXTXxOc-yiSztROdLyhyhZ4" target="_blank" rel="noopener noreferrer"><GetAppIcon/></a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-xs-12 col-sm-3 col-lg-4">
                        <a href="https://mega.nz/file/Lds3jLKK#_T8c7bhgplGB3rHVM6SzD-D5-_aiGboftHikwd3fkKg" target="_blank" rel="noopener noreferrer">
                          <img src="kicka.jpg" className="img-responsive" alt="Kick Samples" />
                        </a>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-lg-5">
                        <h5>
                          <a href="https://mega.nz/file/Lds3jLKK#_T8c7bhgplGB3rHVM6SzD-D5-_aiGboftHikwd3fkKg" target="_blank" rel="noopener noreferrer">Kick Samples</a>
                        </h5>
                      </div>
                      <div className="col-xs-12 col-sm-3 col-lg-3 date">
                        <a href="https://mega.nz/file/Lds3jLKK#_T8c7bhgplGB3rHVM6SzD-D5-_aiGboftHikwd3fkKg" target="_blank" rel="noopener noreferrer"><GetAppIcon/></a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-xs-12 col-sm-3 col-lg-4">
                        <a href="https://mega.nz/file/jRsBBC4R#Tiz9k77pOVn0vw3y5slliA29StzcRqDCAcnSs1NIfVc" target="_blank" rel="noopener noreferrer">
                          <img src="Darkpsypreset.jpg" className="img-responsive" alt="Darkpsy Preset" />
                        </a>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-lg-5">
                        <h5>
                          <a href="https://mega.nz/file/jRsBBC4R#Tiz9k77pOVn0vw3y5slliA29StzcRqDCAcnSs1NIfVc" target="_blank" rel="noopener noreferrer">Darkpsy Presset</a>
                        </h5>
                      </div>
                      <div className="col-xs-12 col-sm-3 col-lg-3 date">
                        <a href="https://mega.nz/file/jRsBBC4R#Tiz9k77pOVn0vw3y5slliA29StzcRqDCAcnSs1NIfVc" target="_blank" rel="noopener noreferrer"><GetAppIcon/></a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-xs-12 col-sm-3 col-lg-4">
                        <a href="https://mega.nz/file/PRtxCQgI#GMRqARaT7CY24dbyEhbto_Rn_fmuhutOK9mAiAdNjvc" target="_blank" rel="noopener noreferrer">
                          <img src="Wavetables.jpg" className="img-responsive" alt="Wavetables" />
                        </a>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-lg-5">
                        <h5>
                          <a href="https://mega.nz/file/PRtxCQgI#GMRqARaT7CY24dbyEhbto_Rn_fmuhutOK9mAiAdNjvc" target="_blank" rel="noopener noreferrer">Pack de Wavetables para o Serum</a>
                        </h5>
                      </div>
                      <div className="col-xs-12 col-sm-3 col-lg-3 date">
                        <a href="https://mega.nz/file/PRtxCQgI#GMRqARaT7CY24dbyEhbto_Rn_fmuhutOK9mAiAdNjvc" target="_blank" rel="noopener noreferrer"><GetAppIcon/></a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* COLUNA DA DIREITA: SE LIGA AI (NOTÍCIAS) */}
            <div className="col-md-5 col-md-offset-1 col-xs-12">
              <div className="ourblog">
                <h3><span className="glyphicon glyphicon-book"></span> <strong>SE LIGA AÍ!</strong></h3>
                <ul className="row">
                  <li className="row">
                    <a href="https://agyasounds.bandcamp.com/album/pineal-vision-ep" target="_blank" rel="noopener noreferrer" className="col-xs-12 col-sm-3 col-lg-4">
                      {/* Referência local para pineal.jpg */}
                      <img src="pineal.jpg" className="img-responsive" alt="Pineal Vision" />
                    </a>
                    <div className="blogtext col-xs-12 col-sm-9 col-lg-8">
                      <h5><a href="https://agyasounds.bandcamp.com/album/pineal-vision-ep" target="_blank" rel="noopener noreferrer">Darkpsy notícias</a></h5>
                      <p>Pineal Vision EP - Agya Sounds</p>
                    </div>
                  </li>
                  <li className="row">
                    <a href="https://agyasounds.bandcamp.com/album/v-a-fungus-slug-compiled-by-ovni-messenger" target="_blank" rel="noopener noreferrer" className="col-xs-12 col-sm-3 col-lg-4">
                      {/* Referência local para fungus.jpg */}
                      <img src="fungus.jpg" className="img-responsive" alt="Fungus Slug" />
                    </a>
                    <div className="blogtext col-xs-12 col-sm-9 col-lg-8">
                      <h5><a href="https://agyasounds.bandcamp.com/album/v-a-fungus-slug-compiled-by-ovni-messenger" target="_blank" rel="noopener noreferrer">Darkpsy Notícias</a></h5>
                      <p>V.A Fungus Slug - Compiled by Ovni Messenger</p>
                    </div>
                  </li>
                  <li className="row">
                    <a href="https://www.reaper.fm/" target="_blank" rel="noopener noreferrer" className="col-xs-12 col-sm-3 col-lg-4">
                      {/* Referência local para reaper.jpg */}
                      <img src="reaper.jpg" className="img-responsive" alt="Reaper DAW" />
                    </a>
                    <div className="blogtext col-xs-12 col-sm-9 col-lg-8">
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