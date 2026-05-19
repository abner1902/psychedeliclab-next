import React from 'react'
import * as s from './style'
import Slider from 'react-slick'

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 2500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const Samplepack = () => {
  return (
    <s.Samplepack id="samplepack">
      <div className="container">
        <h2 className="section-title">SAMPLE PACK</h2>
        <h3 className="section-subtitle">Veja os módulos do curso de produção de Darkpsy</h3>
        
        <Slider {...settings}>
          <div className="module-slide">
            <img 
              src="/module.webp" 
              alt="Módulo 1 do curso de Darkpsy" 
              className="module-image"
            />
          </div>
          
          <div className="module-slide">
            <img 
              src="/module2.webp" 
              alt="Módulo 2 do curso de Darkpsy" 
              className="module-image"
            />
          </div>
        </Slider>
      </div>
    </s.Samplepack>
  )
}

export default Samplepack