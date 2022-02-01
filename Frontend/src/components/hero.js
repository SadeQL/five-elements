import React from "react";
import Encens from "../imgs/encens.jpg";

const Hero = () => {
  return (
    <div className="hero-container">
      <ul className="left-container">
        <li className="hero-title">
          <h1>Create Your Balance</h1>
        </li>
        <li className="hero-btn">
          <a href="#">Discover Now</a>
        </li>
      </ul>
      <img src={Encens} className="hero-img" alt="hero image" />
    </div>
  );
};

export default Hero;
