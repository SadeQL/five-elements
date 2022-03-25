import React from "react";

import Hero from "./hero";
import Bazi from "./Bazi";
import Footer from "./footer";
import Bookings from "./Bookings";
import Navigation from "./Navbar";
import Testimonials from "./Testimonials";
import Readings from "./Readings";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Bazi />
      <Testimonials />
      <Readings />
      <Bookings />
    </>
  );
};

export default Layout;
