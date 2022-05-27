import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import Ocre from "../imgs/bg-ocre.png";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} id="carousel">
      <Carousel.Item>
        <img className="d-block w-100 h-2" src={Ocre} alt="First slide" />

        <Carousel.Caption>
          <h3
            style={{
              textAlign: "center",
              color: "#F9EFD7",
              fontFamily: "EBGaramond",
            }}
          >
            Wonderful experience
          </h3>
          <p
            style={{
              textAlign: "center",
              color: "#F9EFD7",
              fontFamily: "EBGaramond",
            }}
          >
            J.D
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-2" src={Ocre} alt="Second slide" />

        <Carousel.Caption>
          <h3
            style={{
              textAlign: "center",
              color: "#F9EFD7",
              fontFamily: "EBGaramond",
            }}
          >
            I finally regained my confidence.
          </h3>
          <p
            style={{
              textAlign: "center",
              color: "#F9EFD7",
              fontFamily: "EBGaramond",
            }}
          >
            J.M
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-2" src={Ocre} alt="Third slide" />

        <Carousel.Caption>
          <h3
            style={{
              textAlign: "center",
              color: "#F9EFD7",
              fontFamily: "EBGaramond",
            }}
          >
            I finally become comfortable with myself.
          </h3>
          <p
            style={{
              textAlign: "center",
              color: "#F9EFD7",
              fontFamily: "EBGaramond",
            }}
          >
            K.C
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

/* render(<Testimonials />); */

export default Testimonials;
