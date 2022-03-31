import logo from "./imgs/logo.png";
import Home from "./components/home.js";
import "./App.css";
import Navigation from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Bazi from "./components/Bazi";
import Testimonials from "./components/Testimonials";
import Readings from "./components/Readings";
import Bookings from "./components/Bookings";
import Hero from "./components/hero";

function App() {
  return (
    <>
      <Home />

      {/* <Testimonials />
      <Readings />
      <Bookings /> */}
    </>
  );
}

export default App;
