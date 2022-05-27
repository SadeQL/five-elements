import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import aboutImg from "../imgs/about.jpg";
import feliciaImg from "../imgs/felicia.png";
import Footer from "./Footer";

const About = () => {
  return (
    <>
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
          About
        </h1>
      </div>
      <div className="d-flex flex-column justify-content-center">
        <Image
          src={aboutImg}
          fluid
          style={{
            margin: "auto",
            maxHeight: "150vh",
            width: "auto",
            textAlign: "center",
          }}
        />
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
          Cinq éléments is both a community and a wellness platform, the
          intersection of well-being and slow living. <br />
          Based on ancient wisdom such as BaZi, Taoist philosophy, FengShui and
          Traditional Chinese Medicine (TCM) ; this is a holistic approach to
          mindset, inner introspection and energy guidance — cinq éléments is
          the art of balance.
        </p>
      </div>
      <div className="d-flex flex-column justify-content-center">
        <Image
          src={feliciaImg}
          fluid
          style={{
            margin: "auto",
            maxHeight: "100vh",
            width: "auto",
            textAlign: "center",
          }}
        />
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
          Welcome to my wellness project, cinq éléments. <br /> I believe that
          the most important practice in our lives is the journey within
          ourselves. I also believe that definitions of well-being are all
          unique and that cinq éléments is for everybody. <br />
          This is my dream to help people connect mindfully, find peace and
          balance in all aspects of life.
          <br /> Reflect, learn and grow together. <br />— Félicia Chiang
        </p>
      </div>
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
            Letting the mind control the vital breath is called force.
            <br />— Tao Te Ching
          </h3>
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

export default About;
