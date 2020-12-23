import React, { Component } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import * as s from './style.js'

function SampleNextArrow (props) {
  const { className, style, onClick } = props
  return (
    <s.Arrow>
      <div
        className={className}
        style={{ ...style, display: 'none', right: '100px' }}
        onClick={onClick}
      />
    </s.Arrow>
  )
}

function SamplePrevArrow (props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  )
}

const Sliders = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 1500,
    // useCSS: true,
    nextArrow: <SampleNextArrow />
  }
  return (
    <s.Slider>
      <div className="slider">
        <Slider {...settings}>
          <div className="slider__first">
            <h1 className="slider__title">Bochinia & Muniz</h1>
            <hr className="slider__dash"/>
            <p className="slider__info">Advogados</p>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
        </Slider>
      </div>
    </s.Slider>
  )
}

export default Sliders
