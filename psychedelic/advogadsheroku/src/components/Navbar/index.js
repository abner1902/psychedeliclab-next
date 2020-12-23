import * as s from './style.js'
import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  Nav
} from 'reactstrap'

const Navba = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <s.Navbar>
        <Navbar light expand="md">
          <div>
            <h6 className="logo">Bochnia&munizadvogados</h6>
          </div>
          <s.NavbarTogglers onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto">
              <s.Nav className="ml-auto">
                <s.Naviga>
                  <s.Navigaa href="#">
                    Serviços
                  </s.Navigaa>
                </s.Naviga>
                <s.Naviga>
                  <s.Navigaa href="#">
                  Quem Somos
                  </s.Navigaa>
                </s.Naviga>
                <s.Naviga>
                  <s.Navigaa href="#">
                    Contato
                  </s.Navigaa>
                </s.Naviga>
                <s.Naviga>
                  <s.Navigaa href="#">
                    Localização
                  </s.Navigaa>
                  {/* <s.Navigaa href="#">
                   Cadastrar
                  </s.Navigaa> */}
                </s.Naviga>
              </s.Nav>
            </Nav>
          </Collapse>
        </Navbar>
      </s.Navbar>
    </div>
  )
}

export default Navba
