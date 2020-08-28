import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import github from '../social-icons/github.png';
import telegram from '../social-icons/telegram.png';
import vk from '../social-icons/vk.png';

const Footer = () => {
  return(
    <footer className="footer">
      <Container>
        <Row className="mb-2">
          <Col>
            <Nav className="justify-content-center">
              <Nav.Item className="mr-2">
                <a href="https://github.com/v-mikhailov">
                  <img src={github} alt="github icon"></img>
                </a>
              </Nav.Item>
              <Nav.Item className="mr-2">
                <a href="https://t.me/nameon">
                  <img src={telegram} alt="telegram icon"></img>
                </a>
              </Nav.Item>
              <Nav.Item>
                <a href="https://vk.com/v_mikhailow">
                  <img src={vk} alt="vk icon"></img>
                </a>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="text-center">Created by Vladimir Mikhailov</Col>
        </Row>
        <Row>
          <Col className="text-center"> 
            <div className="attr">Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com, </a></div>
            <div className="attr">Icons made by<a href="https://icon54.com/" title="Pixel perfect"> Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
          </Col>
        </Row>
      </Container>
    </footer>

  )
}

export default Footer;