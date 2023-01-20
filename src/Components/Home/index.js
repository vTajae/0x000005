import logo from '../../assets/logo.svg';
import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import "./index.scss";


function Home() {
  return (
    <>
  
    <Container className="App-header">
   
      <Row style={{flexDirection: 'column' }} className='daRow'>
        <Col className="container">
          <div className="avatar">
            <img src={logo}  alt="logo" />
          </div>
        </Col>
        
        <Col style={{height: '1rem'}}><h3> Website coming soon ..</h3> </Col>

      </Row>
      <Row>
      <Col><Button className='contact' href='https://www.instagram.com/qias.me/' variant="outline-info">Contact Us</Button>{' '}</Col>

      </Row>
    </Container>
    </>
  );
}

export default Home;
