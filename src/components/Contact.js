import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Form, Image } from "react-bootstrap";
import Thanks from "./Thanks";
import contactImg from "../imgs/contact.jpg";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r0bnfum",
        "template_s2xwv54",
        form.current,
        "XdqcaNafLXyOT3bKh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
          Contact
        </h1>
      </div>
      <div className="d-flex flex-column justify-content-center">
        <Image
          src={contactImg}
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
            marginBottom: "8vh",
            textAlign: "center",
          }}
        >
          If you have questions about BaZi, booking, or any business inquiries,
          please feel free to{" "}
          <a href="mailto:felicia.chiang@icloud.com">contact me</a>. <br />
          Félicia
        </p>
      </div>
    </>
  );
};

export default Contact;
