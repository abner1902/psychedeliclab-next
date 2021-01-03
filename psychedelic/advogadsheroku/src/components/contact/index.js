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
              <h3><span className="glyphicon glyphicon-envelope"></span>Entre para o mundo da Psicodelia!</h3>
              <div className="row">
                <div className=" col-md-12 col-sm-6 col-sm-offset-3 ">
                  <Slider {...settings}>
                    <div className="first-slider">
                      <a href="https://www.hotmart.com/product/psychedelic-lab-curso-de-darkpsy-modulo-i/X44771110B"> <img src="darkpsy.jpeg" className="img-responsive" alt="darkpsy"/></a>
                    </div>
                    <div className="slider-second">
                      <div className="slider__texts">
                        <a href="https://www.hotmart.com/product/psychedelic-lab-curso-de-darkpsy-modulo-i/X44771110B"><img src="module.jpeg" className="img-responsive" alt="darkpsy1"/></a>
                      </div>
                    </div>
                    <div className="slider-third">
                      <div className="slider__texts">
                        <a href="https://www.hotmart.com/product/psychedelic-lab-curso-de-darkpsy-modulo-i/X44771110B"><img src="module2.jpeg" className="img-responsive" alt="darkpsy2"/></a>
                      </div>
                    </div>
                  </Slider>
                  <button className="btn btn-warning bgcolor" align="center"><Link href="https://www.hotmart.com/product/psychedelic-lab-curso-de-darkpsy-modulo-i/X44771110B" >Adquirir!</Link></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </s.Contact>
  )
}

export default Contact
