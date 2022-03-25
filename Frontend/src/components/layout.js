import React from "react";

import Navbar from "./Navbar";
import Hero from "./hero";
import Bazi from "./bazi";
import Footer from "./footer";
import Bookings from "./Bookings";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Hero></Hero>
      <Bazi></Bazi>
      <Bookings />
    </>
  );
};

export default Layout;
