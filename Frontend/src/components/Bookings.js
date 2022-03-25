import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import {
  PopupButton,
  PopupWidget,
  InlineWidget,
  PopupModal,
} from "react-calendly";

export default class Bookings extends React.Component {
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
            <Col>
              <h1>Bookings</h1>
            </Col>
            <Row>
              <p>I speak English, French, Mandarin and Japanese fluently.</p>
              <p>
                Please note that all the readings are done digitally. In-person
                readings are restricted due to the current situation of the
                pandemic. If you have any requests or inquiries, please feel
                free to contact me anytime.{" "}
              </p>
            </Row>
            <Col>
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
                Introspect. Recalibrate. Balance.
              </h1>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
