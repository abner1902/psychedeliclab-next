import React from 'react'
import * as s from './style'
import { Col, Row, Button, Form, FormGroup, Label, Input, Container } from 'reactstrap'

const Lawyers = (props) => (
  <s.Lawyers>
    <div className="contact">
      <div className="container">
        <h1 className="contact__title">
          Contato
        </h1>
      </div>
      <Container>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="Insira seu e-mail" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">Telefone</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="Insira seu número" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="exampleAddress">assunto</Label>
            <Input type="text" name="address" id="exampleAddress" placeholder=""/>
          </FormGroup>
          <FormGroup>
            <Label for="exampleAddress2">Address 2</Label>
            <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleCity">Nome</Label>
                <Input type="text" name="city" id="exampleCity"/>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">Sobrenome</Label>
                <Input type="text" name="state" id="exampleState"/>
              </FormGroup>
            </Col>
            <Col md={2}>
              {/* <FormGroup>
                <Label for="exampleZip">Zip</Label>
                <Input type="text" name="zip" id="exampleZip"/>
              </FormGroup> */}
            </Col>
          </Row>
          {/* <FormGroup check>
            <Input type="checkbox" name="check" id="exampleCheck"/>
            <Label for="exampleCheck" check>Check me out</Label>
          </FormGroup> */}
          <Button>Enviar</Button>
        </Form>
      </Container>
    </div>
  </s.Lawyers>
)

export default Lawyers
