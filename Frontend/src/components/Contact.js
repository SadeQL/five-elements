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
    <form ref={form} onSubmit={sendEmail} action={Thanks}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>

    /* 
    <Form>
      <Form.Group
        className="mb-3"
        controlId="exampleForm.ControlInput1"
        ref={form}
        onSubmit={sendEmail}
      >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="user_name" placeholder="Your name" />
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="user_email"
          placeholder="name@example.com"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
        <input type="submit" value="Send" />
      </Form.Group>
    </Form> */
  );
};
