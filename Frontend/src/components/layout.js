import React from "react";

import Hero from "./hero";
import Bazi from "./bazi";
import Footer from "./footer";
import Bookings from "./Bookings";
import Navigation from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Hero></Hero>
      <Bazi></Bazi>
      <Bookings />
    </>
  );
};

export default Layout;
