import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import './home.css'

function home() {
    return (
        <Container className="themed-container" fluid="sm" style={{ "height": "auto" }}>
            <Row className="justify-content-md-center" >
                <Col className="home-item" xs={12} md={12}>This is a Full Stack Web Application Sample</Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col className="home-item2"xs={12} md={6}>MERN Stack Technology</Col>
                <Col className="home-item2"xs={12} md={6}>Context API</Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col className="home-item2"xs={12} md={6}>RESTful API</Col>
                <Col className="home-item2"xs={12} md={6}>Token Authentication</Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col className="home-item2" xs={12} md={3}>ITEM 5</Col>
                <Col className="home-item2" xs={12} md={3}>ITEM 6</Col>
                <Col className="home-item2" xs={12} md={3}>ITEM 7</Col>
                <Col className="home-item2" xs={12} md={3}>ITEM 8</Col>
            </Row>
        </Container>
    )
}

export default home