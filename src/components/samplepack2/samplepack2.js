import React from 'react'
import * as s from './style.js'
import Link from 'next/link'
import Slider from 'react-slick'



const Samplepack2 = () => {
  return (
    <s.Samplepack2>

    <div id="samplepack"className="container">
        <div className="blockblack">
          <div id="contact" className="spacer">
            <div className="contactform center">
              <h5><span className="glyphicon glyphicon-envelope"></span>Para conseguir o Sample Pack, que contém mais de 50 sons, sintetizados por mim em minhas produções, usando os synths, Virus T.I. - Albino3 - Discovery - Serum - Surge - Pigments - Sylenth, acesse nossa comunidade do telegram e baixe gratuitamente e chegue mais perto da qualidade sonora que você tanto almeja!!</h5>
              <div className="row">
                <div className=" col-md-12 col-sm-12 col-sm-offset-3 ">
                  <Slider >
                    <div className="first-slider">
                      <Link href=" https://t.me/psychedeliclab"><img src={require('../../../public/sample-pack-cover-art (1) (1).jpg')} className="img-responsive" alt="darkpsy"/></Link>
                    </div>
                   
                  </Slider>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="blockblack">
        <Link href="https://t.me/psychedeliclab"><button className="btn btn-warning bgcolor">Clique aqui para acessar nosso canal!</button></Link>
          </div>
      </div>
    </s.Samplepack2>
  )
}

export default Samplepack2
