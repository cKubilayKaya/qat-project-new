import React, { useEffect } from "react";
import "./assets/style/index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import CursorLight from "./components/CursorLight";
import AllRoutes from "./Routes";
import "aos/dist/aos.css";
import animation from "./helpers/animation";
import CookiesContainer from "./components/CookiesContainer";

export default function App() {
  useEffect(() => {
    animation();
  }, []);

  return (
    <Router>
      <CursorLight />
      <Navbar />
      <AllRoutes />
      <CookiesContainer />
    </Router>
  );
}
