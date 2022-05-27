import React, { useState } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import BaziImage from "../imgs/bazi-1.jpg";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
const Bazi = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center">
        <Image
          src={BaziImage}
          fluid
          style={{
            margin: "auto",
            maxWidth: "90%",
            textAlign: "center",
          }}
        />
      </div>
      <div className="d-flex flex-column justify-content-center">
        <h1
          style={{
            textAlign: "center",
            fontFamily: "EBGaramond",
            fontWeight: "bold",
            marginBottom: "3vh",
            marginTop: "5vh",
          }}
        >
          What is BaZi?
        </h1>
        <h1
          style={{
            textAlign: "center",
            fontFamily: "EBGaramond",
            fontWeight: "bold",
            marginBottom: "3vh",
          }}
        >
          八字
        </h1>
        <h3
          style={{
            textAlign: "center",
            fontFamily: "Proxima Nova",
            fontStyle: "italic",
          }}
        >
          / bāzì / eight characters{" "}
        </h3>
      </div>

      <div>
        <p
          style={{
            fontFamily: "Proxima Nova",
            marginLeft: "8vh",
            marginRight: "8vh",
            marginTop: "8vh",
          }}
        >
          八字, or 生辰八字, also known as Four Pillars of Destiny, is an
          ancient Chinese study of energy, time and balance. It was considered a
          concept for Metaphysics, Numerology and Astrology. <br />
          BaZi is based on combinations of specific Chinese characters, the Yin
          and Yang philosophy, and the five elements: Wood, Fire, Earth, Metal
          and Water.
          <br /> It is also linked to the application of Traditional Chinese
          Medicine (TCM) and FengShui. <br />
          BaZi reflects who we are, our interactions with others, and the energy
          of the universe. It is a guide to a balanced mind, body and life.
        </p>

        <a
          href="/about"
          style={{
            color: "#DB7846",
            fontFamily: "EBGaramond",
            marginLeft: "8vh",
            marginRight: "8vh",
            marginTop: "3vh",
          }}
        >
          learn more about cinq éléments
        </a>
      </div>
      <Row>
        <Col>
          <hr style={{ height: "20" }} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Testimonials />
        </Col>
      </Row>
      <Row>
        <Col>
          <hr style={{ height: "20" }} />
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default Bazi;
