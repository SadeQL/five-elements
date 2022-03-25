import React from "react";
import { useState } from "react";
import HeroImage from "../imgs/hero.png";
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
          <Row>
            <Col sm={{ span: 6, offset: 0 }}>
              <Image src={HeroImage} fluid />
            </Col>
            {/*        <Card className="bg-dark text-white">
          <Card.Img src={HeroImage} alt="Card image" /> */}
            {/*  <Card.ImgOverlay> */}
            {/*    <Card.Title>CREATE YOUR BALANCE</Card.Title> */}

            <Col sm={{ span: 3, offset: 2 }}>
              <h1>CREATE YOUR BALANCE</h1>
              <Button
                variant="primary"
                onClick={() => this.setState({ isOpen: true })}
              >
                BOOK A SESSION
              </Button>{" "}
              <PopupModal
                url="https://calendly.com/sadefryt"
                pageSettings={this.props.pageSettings}
                utm={this.props.utm}
                onModalClose={() => this.setState({ isOpen: false })}
                open={this.state.isOpen}
                rootElement={document.getElementById("root")}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <h1 className="p-10 text-center">
                Reconnect. Reflect. Cultivate.
              </h1>
            </Col>
          </Row>
        </Container>
        {/*   </Card.ImgOverlay> */}
        {/*  </Card> */}
      </>
    );
  }
}
