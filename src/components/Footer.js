import React from "react";

const Footer = () => {
  return (
    <>
      <h3
        style={{
          textAlign: "center",
          fontFamily: "EBGaramond",

          marginBottom: "3vh",
        }}
      >
        <a
          href="/contact"
          style={{
            textDecoration: "none",
            fontFamily: "EBGaramond",
            color: "black",
          }}
        >
          Contact |{" "}
        </a>
        <a
          href="/terms-and-conditions"
          style={{
            textDecoration: "none",
            fontFamily: "EBGaramond",
            color: "black",
          }}
        >
          Terms and Conditions |{" "}
        </a>
        <a
          href="/privacy"
          style={{
            textDecoration: "none",
            fontFamily: "EBGaramond",
            color: "black",
          }}
        >
          Privacy
        </a>
      </h3>
    </>
  );
};

export default Footer;
