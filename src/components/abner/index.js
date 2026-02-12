import React from 'react'
import * as s from './style'


const Abner = () => {
  return (
    <s.Abner id="about">
      <div className="container">
        <div className="blockblack">
          <div className="spacer">
            <h3><span className="glyphicon glyphicon-user"></span> Sobre o Autor</h3>
            
            {/* O segredo do alinhamento está nesta linha abaixo */}
            <div className="row" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
              
              <div className="col-lg-6 col-sm-4 col-xs-12">
                <img src="/absycho.jpeg" className="img-responsive" alt="about" style={{ width: '100%', borderRadius: '8px' }} />
              </div>

              <div className="col-lg-6 col-sm-8 col-xs-12">
                {/* O paddingLeft abaixo separa o texto da foto */}
                <div style={{ textAlign: 'left', paddingLeft: '15px' }}>
                  <p>
                    Direto de São Paulo, <strong>Absycho Live</strong> é o projeto principal de <strong>Abner Simão</strong>, que teve seu primeiro contato com a música eletrônica aos 11 anos de idade. De DJ em 2009 a produtor em 2012, Abner trilhou um caminho de superação: em uma época de pouco acesso à informação e conteúdos restritos ao inglês, ele lapidou sua <strong>característica sonora</strong> de forma autodidata. Essa busca pela originalidade no <strong>Forest e Darkpsy</strong> rendeu frutos raros, tendo suas músicas tocadas por lendas como <strong>Goa Gil</strong>, validando sua identidade única no underground.
                  </p>
                  <p>
                    Com a experiência de quem já percorreu mais de 10 estados brasileiros e realizou tour internacional no <strong>Primitif Festival (Marrocos/África)</strong>, ele hoje comanda três frentes autorais: <strong>Absycho</strong> (Forest/Experimental), <strong>Vajrapani</strong> (High BPM) e <strong>Khandroma</strong> (Progressive Dark). Sua trajetória, que passa por festivais como <strong>Universo Paralello Festival, Torus Festival, Swampy Festival, Mahadeva Festival, Cosmic Crew Festival, Shivaneris Festival, Pachamama Festival, Anacã Festival e muitos outros</strong>, é a prova de que a evolução vem da base e do estudo constante. <strong>Se você quer evoluir de verdade, seu lugar é aqui.</strong>
                  </p>
                </div>
              </div>

            </div> {/* Fechamento da Row */}
          </div> {/* Fechamento da Spacer */}
        </div> {/* Fechamento da Blockblack */}
      </div> {/* Fechamento da Container */}
    </s.Abner>
  );
};

export default Abner;