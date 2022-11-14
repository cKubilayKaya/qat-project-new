import React, { useState } from "react";
import Instagram from "../assets/images/icons/instagram.svg";
import Linkedin from "../assets/images/icons/linkedin.svg";
import Facebook from "../assets/images/icons/facebook.svg";
import Square from "../assets/images/icons/square.svg";
import { Link } from "react-router-dom";

export default function BannerSocialBar() {
  const [active, setActive] = useState(false);
  window.onscroll = function (e) {
    if (window.scrollY > 434) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <div className={`social-media-slide-left d-flex flex-column align-items-center justify-content-between ${active ? "social-media-slide-left-active" : ""}`}>
      <div className="social-media-icons d-flex flex-column">
        <Link to="#" onClick={() => window.open("https://www.instagram.com/qatproject/", "_blank")}>
          <img src={Instagram} alt="" data-aos="fade-up" />
        </Link>
        <Link to="#" onClick={() => window.open("https://www.linkedin.com/company/qat-project/?originalSubdomain=tr", "_blank")}>
          <img src={Linkedin} alt="" data-aos="fade-up" />
        </Link>
        <Link to="#" onClick={() => window.open("https://www.facebook.com/qatproject/", "_blank")}>
          <img src={Facebook} alt="" data-aos="fade-up" />
        </Link>
      </div>
      <div className="all-projects">
        <Link to="/projects" className="d-flex flex-column align-items-center justify-content-center" data-aos="fade-down">
          <span>All Projects</span>
          <img src={Square} alt="" />
        </Link>
      </div>
    </div>
  );
}
