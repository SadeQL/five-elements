import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Form } from "react-bootstrap";
import Thanks from "./Thanks";

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
      <h1>Contact me</h1>
      <form ref={form} onSubmit={sendEmail} action={Thanks} id="contact-form">
        <label>Name</label>
        <input type="text" name="user_name" /> 
        <label>Email</label>
        <input type="email" name="user_email" /> 
        <label>Message</label>
        <textarea name="message" /> 
        <input type="submit" value="Send" id="send"/>
      </form>
    </>
  );
};
