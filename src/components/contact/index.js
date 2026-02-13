import React from 'react'
import * as s from './style'
import Link from 'next/link'
import Slider from 'react-slick'

function SampleNextArrow (props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow (props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'flex' }}
      onClick={onClick}
    />
  )
}

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 2500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
}

const Contact = () => {
  return (
    <s.Contact>
      <div id="course"className="container">
        <div className="blockblack">
          <div id="contact" className="spacer">
            <div className="contactform center">
              <h2><span className="glyphicon glyphicon-envelope"></span><strong>ENTRE PARA O MUNDO DO DARKPSY!</strong> </h2>
              <div className="row">
                <div className=" col-md-12 col-sm-12 col-sm-offset-3 ">
                  <Slider {...settings}>
                    <div className="first-slider">
                      <img src="/darkpsy.jpeg" className="img-responsive" alt="darkpsy"/>
                    </div>
                    <div className="slider-second">
                      <div className="slider__texts">
                        <img src="/module.jpeg" className="img-responsive" alt="darkpsy1"/>
                      </div>
                    </div>
                    <div className="slider-third">
                      <div className="slider__texts">
                        <img src="/module2.jpeg" className="img-responsive" alt="darkpsy2"/>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blockblack">
          <a href="https://hotmart.com/pt-br/marketplace/produtos/psychedelic-lab-curso-de-darkpsy-modulo-ii/Q56274689Y" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-warning bgcolor">Adquirir!</button>
          </a>
        </div>
      </div>
    </s.Contact>
  )
}

export default Contact
