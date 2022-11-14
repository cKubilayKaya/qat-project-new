import React, { useState } from "react";
import Marquee from "react-fast-marquee";

export default function SlideText() {
  const [speed, setSpeed] = useState(150);
  function handleResize() {
    if (window.innerWidth <= 991) {
      setSpeed(50);
    } else {
      setSpeed(150);
    }
  }

  window.addEventListener("resize", handleResize);
  return (
    <div className="slide-text">
      <Marquee speed={speed} gradient={false} direction="left">
        <h1 data-aos="fade-left">&nbsp;ARCHITECTS • ARCHITECTS • ARCHITECTS • ARCHITECTS • ARCHITECTS • ARCHITECTS • </h1>
      </Marquee>
      <Marquee speed={speed} gradient={false} direction="right" className="slide-text-white">
        <h1 data-aos="fade-right">&nbsp;INTERIORS • INTERIORS • INTERIORS • INTERIORS • INTERIORS • INTERIORS • </h1>
      </Marquee>
    </div>
  );
}
