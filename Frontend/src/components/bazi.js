import React from "react";
import elementImage from "../imgs/5-elements.webp";

const Bazi = () => {
  return (
    <>
      <div className="bazi-container">
        <div className="bazi-left-box">
          {/*   <div className="box-left"></div> */}
          <h1 className="bazi-left-title">What is Bazi?</h1>
          <h2 className="bazi-left-second-title">八字 / Ba Zi / </h2>
          <p className="bazi-left-body">
            <strong>BaZi</strong> is an ancient art of{" "}
            <strong>destiny reading</strong>, considered as a concept for
            <strong> Metaphysics</strong>, <strong>Numerology</strong> and{" "}
            <strong>Astrology</strong>. <br />
            <br />
            With a modern approach, I redefine traditional reading to personal
            guidance to the well-being of life. Inside each one of us lives a
            <strong>unique balance of energy</strong>, reflecting in our BaZi
            charts. <br />
            <br />
            It is based on complex combinations of Chinese characters and the
            following five elements: wood, fire, earth, metal and water.
          </p>
        </div>

        <img src={elementImage} className="element-image" alt="five elements" />
      </div>

      <div className="bazi-banner">
        <p>
          BaZi is also linked to Traditional <strong>Chinese Medicine</strong>{" "}
          and the application of <strong>FengShui</strong>. It is the ancient
          wisdom of energy and balance.
        </p>
      </div>
    </>
  );
};

export default Bazi;
