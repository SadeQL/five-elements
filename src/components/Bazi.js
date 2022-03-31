import React, { useState } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import BaziImage from "../imgs/image2.jpg";
const Bazi = () => {
  return (
    <>
      <Container fluid="md">
        <Row classname="row">
          <Col sm={{ span: 6, offset: 0 }}>
            <Image src={BaziImage} fluid />
          </Col>
          {/*        <Card className="bg-dark text-white">
          <Card.Img src={HeroImage} alt="Card image" /> */}
          {/*  <Card.ImgOverlay> */}
          {/*    <Card.Title>CREATE YOUR BALANCE</Card.Title> */}

          <Col sm={{ span: 3, offset: 2 }} className="homeCol">
            <h1>八字</h1>
            <h3>/ bāzì / eight characters </h3>
          </Col>
        </Row>
      </Container>
      {/*  <Image
        src={BaziImage}
        fluid
        alt="five elements"
        className="h-auto w-50"
      /> */}
      <div className="bazi-container">
        <div className="bazi-left-box">
          {/*   <div className="box-left"></div> */}

          {/*  <h1 className="bazi-left-second-title">八字</h1>
          <h3>/ bāzì / eight characters </h3> */}
          <p className="bazi-left-body">
            BaZi, or 生辰八字, also known as Four Pillars of Destiny, is an
            ancient art of destiny reading, considered a concept for
            Metaphysics, Numerology and Astrology. <br />
            Inside each one of us lives a unique balance of energy, reflecting
            in our BaZi charts. It is based on Yin and Yang, complex
            combinations of Chinese characters and the following five elements:
            Wood, Fire, Earth, Metal and Water.
            <br />
            Furthermore, BaZi is linked to Traditional Chinese Medicine (TCM)
            and the application of FengShui. <br />
            It is the ancient wisdom of energy and balance.
            <br />
            BaZi tells us about who we are, such as information on the state of
            our health, our personality traits, conscious and subconscious
            thoughts, also our actions and interactions with people and the
            universe.
          </p>
        </div>
      </div>
    </>
  );
};

export default Bazi;
