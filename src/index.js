import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/hero";
import Bookings from "./components/Bookings";
import Home from "./components/home";
import Readings from "./components/Readings";
import Bazi from "./components/Bazi";
import Navigation from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Terms from "./components/terms";
import Privacy from "./components/privacy";

ReactDOM.render(
  <>
    <React.StrictMode>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<App />} />

          <Route path="/bazi" element={<Bazi />} />

          <Route path="/booking" element={<Bookings />} />
          <Route path="/readings" element={<Readings />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
