import React from "react";
import Encens from "../imgs/encens.jpg";
import { Button, Card } from "react-bootstrap";
import { PopupButton } from "react-calendly";

const Hero = () => {
  return (
    <>
      <Card className="bg-dark text-white">
        <Card.Img src={Encens} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>CREATE YOUR BALANCE</Card.Title>
          <PopupButton
            url="https://calendly.com/sadefryt"
            rootElement={document.getElementById("root")}
            text="DIVE IN"
          />
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default Hero;
