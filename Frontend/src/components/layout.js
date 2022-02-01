import React from "react";

import Navbar from "./Navbar";
import Hero from "./hero";
import Bazi from "./bazi";
import Footer from "./footer";
import ContactForm from "./Contact";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Hero></Hero>
      <Bazi></Bazi>
      <ContactForm />
    </>
  );
};

export default Layout;
