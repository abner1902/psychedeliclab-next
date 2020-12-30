import React from 'react'
import * as s from './style'
import Link from 'next/link'

const Contact = () => {
  return (
    <s.Contact>
      <div  id="course"className="container">
        <div className="blockblack">
          <div id="contact" className="spacer">
            <div className="contactform center">
              <h3><span className="glyphicon glyphicon-envelope"></span>Entre para o mundo da psicodelia</h3>
              <div className="row">
                <div className=" col-md-12 col-sm-6 col-sm-offset-3 ">
                  <img src="darkpsy.jpeg" className="img-responsive" alt="darkpsy"/>
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
