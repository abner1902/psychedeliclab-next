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
    <s.Samplepack>
      <div className="container">
        <h2 className="section-title">Veja os módulos do curso de produção de Darkpsy</h2>
        
        <Slider {...settings}>
          <div className="module-slide">
            <img 
              src="/module.jpeg" 
              alt="Módulo 1 do curso de Darkpsy" 
              className="module-image"
            />
          </div>
          
          <div className="module-slide">
            <img 
              src="/module2.jpeg" 
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
