import React from "react";
import AboutImage from "../assets/images/about/about-image.png";
// import AboutImage2 from "../assets/images/an.gif";

export default function BannerAbout() {
  return (
    <div className="banner-about">
      <h1 data-aos="fade-up">
        ABOUT <br /> <span data-aos="fade-down">US</span>
      </h1>
      <div className="banner-about-text">
        <p data-aos="fade-up">
          QAT is an innovative organization that produces architectural and interior design projects with its young and fresh-minded team. QAT sees every
          customer and team member as part of the family. With its sustainability understanding in its business model, it aims to establish a pleasant and
          long-term relationship with both its team and customers. While developing his perspective, he always looks for the best alternative in design.
        </p>
      </div>
      <div className="banner-about-image">
        <img src={AboutImage} alt="" data-aos="fade-left" />
      </div>
    </div>
  );
}
