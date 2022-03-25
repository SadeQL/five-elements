import React, { useState, useEffect } from "react";
import { Button, Image } from "react-bootstrap";
import { PopupModal } from "react-calendly";
import ReadImg from "../imgs/image1.jpg";

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
        <Image src={ReadImg} fluid alt="five elements" className="h-auto" />
        <div className="bazi-container">
          <div className="bazi-left-box">
            {/*   <div className="box-left"></div> */}

            <h1 className="bazi-left-second-title">Readings</h1>

            <p className="bazi-left-body">
              BaZi readings reconnect one with oneself in depth. These are
              elevated moments that help you explore and illuminate your reality
              while diving deep into your own mind and soul. My readings are
              intuitive insights and holistic guidance based on your personal
              BaZi chart. The goal is to help you learn about yourself and
              cultivate your potential with self awareness, a mindset that leads
              towards a more aligned personal, professional and creative aspects
              in life.
              <br />
              Why do I think the way I do?
              <br />
              How do I recalibrate towards a new path?
              <br />
              When is the best time to act?
              <br />
              Allowing yourself to change and grow is the initiation to the
              process of self development. By understanding our thoughts and
              behaviors from a spiritual perspective, we can reflect,
              introspect, and rewrite our story.
              <br />
              While booking a session, you will be asked to provide information
              regarding the exact time of your birth, which is crucial for your
              BaZi chart. In order to give precise guidance, questions about the
              aspects in which you would like to focus on are required.
            </p>
          </div>
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
        </div>
      </>
    );
  }
}
