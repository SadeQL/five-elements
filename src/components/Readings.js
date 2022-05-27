import React, { useState, useEffect } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { PopupModal } from "react-calendly";
import ReadImg from "../imgs/readings.jpg";
import ReadImg2 from "../imgs/readings-2.jpg";
import Footer from "./Footer";

export default class Readings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <>
        <div className="d-flex flex-column justify-content-center">
          <Image
            src={ReadImg}
            fluid
            style={{
              margin: "auto",
              maxHeight: "150vh",
              width: "auto",
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
            Readings
          </h1>
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
            BaZi readings with me are elevated moments of intuitive insights and
            holistic energy guidance based on your personal BaZi birth chart.
            <br /> I am here to help you reconnect with yourself in depth, and
            cultivate your potential with self-awareness.
            <br />{" "}
            <ul>
              <br />
              <li>Why do I feel like this lately?</li>{" "}
              <li>When is the best timing for me?</li>{" "}
              <li>How should I take action towards a new path?</li>
            </ul>{" "}
            By understanding your thoughts from a spiritual perspective, your
            mindset will recalibrate to a balanced personal, professional and
            creative aspects in life.
          </p>

          <a
            href="/booking"
            style={{
              color: "#DB7846",
              fontFamily: "EBGaramond",
              marginLeft: "8vh",
              marginRight: "8vh",
              marginTop: "3vh",
            }}
          >
            how it goes
          </a>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <Image
            src={ReadImg2}
            fluid
            style={{
              margin: "auto",
              padding: "6vh",
              maxWidth: "90%",
              textAlign: "center",
            }}
          />
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
              Look at the situation from all angles, <br />
              and you will become more open.
              <br />— Dalai Lama
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
  }
}
