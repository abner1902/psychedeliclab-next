import React from 'react'
import * as s from './style.js'
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

const Samplepack = () => {
  return (
    <s.Samplepack>

    <div id="course"className="container">
        <div className="blockblack">
          <div id="contact" className="spacer">
            <div className="contactform center">
              <h2><span className="glyphicon glyphicon-envelope"></span>O que a galera esta achando do curso de produção de Darkpsy?</h2>
              <div className="row">
                <div className=" col-md-12 col-sm-12 col-sm-offset-3 ">
                  <Slider {...settings}>
                    <div className="first-slider">
                      <Link href="psychedelic1233.png"><img src={require('../../../public/psychedelic2.png')} className="img-responsive" alt="darkpsy"/></Link>
                    </div>
                    <div className="slider-second">
                      <div className="slider__texts">
                      <Link href="psychedelic1233.png"><img src={require('../../../public/psychedelic1.png')} className="img-responsive" alt="darkpsy1"/></Link>
                      </div>
                    </div>
                    <div className="slider-third">
                      <div className="slider__texts">
                      <Link href="psychedelic1233.png"><img src={require('../../../public/Psychedelic3.png')} className="img-responsive" alt="darkpsy2"/></Link>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* <div className="blockblack">
        <Link href="https://www.hotmart.com/product/psychedelic-lab-curso-de-darkpsy-modulo-i/X44771110B" ><button className="btn btn-warning bgcolor">Adquirir!</button></Link>
          </div> */}
      </div>
    </s.Samplepack>
  )
}

export default Samplepack
