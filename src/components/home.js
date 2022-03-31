import React from "react";

import Hero from "./hero";
import Bazi from "./Bazi";
import Footer from "./Footer";
import Bookings from "./Bookings";
import Navigation from "./Navbar";
import Testimonials from "./Testimonials";
import Readings from "./Readings";
import { Contact } from "./Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Testimonials />
      <Contact />
      {/*  <Bazi />
      
      <Readings />
      <Bookings /> */}
    </>
  );
};

export default Home;
