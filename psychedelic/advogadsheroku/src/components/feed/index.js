import React from 'react'
import * as s from './style.js'
import Link from 'next/link'

const Feed = () => {

  return (
    <s.Feed>
     <div className="container">
       <div className="blockblack">
          <div id="telegram" className="spacer">
              <h4>Nossa Comunidade</h4>
            <div className="row">
              <div className="col-lg-4 col-sm-12  col-xs-12">
                <img src="/telegram.png" className="img-responsives" alt="about" />
              </div>
              <div className="col-lg-6 col-sm-12  col-xs-12">
                <div className="telegram">
                <p>Nossa comunidade no telegram</p>
                <Link href="https://t.me/psychedeliclab" ><button className="telegram-button">Clique aqui para acessar o canal.</button></Link>
              </div>
              </div>
              {/* <div className="col-lg-3 visible-lg">
              </div> */}
            </div>
          </div>
  
      </div>
      </div>
    </s.Feed>
  )
}

export default Feed
