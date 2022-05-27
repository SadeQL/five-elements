import React from "react";
import { useState } from "react";

import HeroImage from "../imgs/hero-1.png";
import HeroImage2 from "../imgs/hero-2.jpg";
import FlowerImg from "../imgs/flower.jpg";
import {
  Button,
  Card,
  Carousel,
  Col,
  Container,
  Image,
  Row,
  Stack,
} from "react-bootstrap";
import { PopupModal } from "react-calendly";

export default class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <>
        <Container fluid="md">
          <Row classname="row">
            <Col
              sm={{ span: 6, offset: 0 }}
              className="homeCol"
              style={{ maxHeight: "80%", margin: "auto" }}
            >
              <Image src={HeroImage} fluid />
            </Col>
            <Col
              sm={{ span: 6, offset: 0 }}
              className="homeCol"
              style={{ maxHeight: "80%", margin: "auto" }}
            >
              <Image src={HeroImage2} fluid />
            </Col>

            <Col
              sm={{ span: 0, offset: 0 }}
              className="homeCol"
              style={{ marginTop: "3vh" }}
            >
              <h1
                style={{
                  fontFamily: "EBGaramond",
                  fontWeight: "bold",
                  color: "#DB7846",
                  marginTop: "8vh",
                }}
              >
                CREATE
                <br /> YOUR BALANCE
              </h1>

              <a
                href="/readings"
                style={{
                  color: "#DB7846",
                  fontFamily: "EBGaramond",
                }}
              >
                discover more
              </a>
            </Col>
          </Row>
          <Row className="d-flex flex-column">
            <Col>
              <h1
                style={{
                  textAlign: "center",
                  color: "#DB7846",
                  fontFamily: "EBGaramond",
                  margin: "10vh",
                }}
              >
                Reconnect. Reflect. Cultivate.
              </h1>
            </Col>
            <Col
              sm={{ span: 6, offset: 0 }}
              className="homeCol"
              style={{ maxHeight: "80%", margin: "auto" }}
            >
              <Image src={FlowerImg} fluid />
            </Col>
          </Row>
          <Row>
            <Col>
              <hr style={{ height: "20" }} />
            </Col>
          </Row>
          <Row>
            <Col>
              <h3
                style={{
                  textAlign: "center",
                  color: "#DB7846",
                  fontFamily: "EBGaramond",
                  margin: "10vh",
                }}
              >
                Life isn’t about finding yourself. <br />
                Life is about creating yourself.
                <br />— George Bernard Shaw
              </h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <hr style={{ height: "20" }} />
            </Col>
          </Row>
        </Container>
        {/*   </Card.ImgOverlay> */}
        {/*  </Card> */}
      </>
    );
  }
}
