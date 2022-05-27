import React, { useState } from "react";
import { Button, Col, Container, Row, Image } from "react-bootstrap";
import {
  PopupButton,
  PopupWidget,
  InlineWidget,
  PopupModal,
} from "react-calendly";
import BookingImg from "../imgs/booking.jpg";
import BookingImg2 from "../imgs/booking-2.jpg";
import Footer from "./Footer";

export default class Bookings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isLoading: false,
    };
  }

  render() {
    return (
      <>
        <div className="d-flex flex-column justify-content-center">
          <Image
            src={BookingImg}
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
            Booking
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
            While booking a 1:1 session, you will be asked to provide
            information regarding the exact time of your birth, which is crucial
            for your BaZi chart. <br />
            In order to give precise guidance, questions about the aspects in
            which you would like to focus on are required. <br />I speak
            English, French, Mandarin and Japanese fluently.
          </p>
          <h3
            style={{
              fontFamily: "EBGaramond",
              marginLeft: "8vh",
              marginRight: "8vh",
              marginTop: "8vh",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            BaZi reading 1:1 life coaching sessions
          </h3>
          <p
            style={{
              fontFamily: "EBGaramond",
              marginLeft: "8vh",
              marginRight: "8vh",
              marginTop: "8vh",
              textAlign: "center",
            }}
          >
            Consultations
            <br />
            45minutes €50
          </p>

          <a
            href="https://form.jotform.com/220267190110038?fbclid=IwAR24gqOXsIJ7-1zOsvXVo7bkm4Dkgg5JXtCX1u_2tAjIcDhLNAHjFICwehQ"
            target="blank"
            style={{
              color: "#DB7846",
              fontFamily: "EBGaramond",
              marginLeft: "8vh",
              marginRight: "8vh",
              marginTop: "3vh",
            }}
          >
            Book a session
          </a>
          <p
            style={{
              fontFamily: "Proxima Nova",
              marginLeft: "8vh",
              marginRight: "8vh",
              marginTop: "8vh",
            }}
          >
            Please note that all 1:1 readings are done digitally to optimize
            privacy. In-person readings are limited to events.{" "}
            <a href="https://www.instagram.com/cinq.elements/">
              Follow cinq éléments on Instagram
            </a>{" "}
            to be updated.
          </p>
          <p
            style={{
              fontFamily: "Proxima Nova",
              marginLeft: "8vh",
              marginRight: "8vh",
            }}
          >
            If you have any questions or requests, please feel free to{" "}
            <a href="mailto:felicia.chiang@icloud.com">contact me</a>.
          </p>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <Image
            src={BookingImg2}
            fluid
            style={{
              margin: "auto",
              padding: "6vh",
              maxWidth: "70%",
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
              All things carry yin and embrace yang. <br />
              They reach harmony by blending with the vital breath.
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
  }
}
