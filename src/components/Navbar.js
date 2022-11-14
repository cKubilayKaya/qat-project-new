import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo/logo.svg";
import Instagram from "../assets/images/icons/instagram.svg";
import Linkedin from "../assets/images/icons/linkedin.svg";
import Facebook from "../assets/images/icons/facebook.svg";
import { useNavigate } from "react-router-dom";
import $ from "jquery";

export default function Navbar() {
  const [active, setActive] = useState(false);
  let history = useNavigate();

  useEffect(() => {
    setActive(false);
  }, [history]);

  function handleResize() {
    if (window.innerWidth < 991) {
      setActive(false);
    }
  }

  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight;

  $(window).scroll(function (event) {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
    navbarHeight = $(".navbar-container").outerHeight();
  }, 1);

  function hasScrolled() {
    var st = $(window).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $(".navbar-container").removeClass("navbar-container-sticky").addClass("navbar-container-sticky-negative");
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $(".navbar-container").addClass("navbar-container-sticky").removeClass("navbar-container-sticky-negative");
      }
    }

    if (st < 10) {
      $(".navbar-container").removeClass("navbar-container-sticky");
    }

    lastScrollTop = st;
  }

  window.addEventListener("resize", handleResize);

  // window.addEventListener("scroll", handleScroll);

  return (
    <div className={`navbar-container  ${active ? "navbar-container-active" : ""}`}>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand" to="/" data-aos="fade-up">
            <img src={Logo} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setActive(!active)}
          >
            <svg
              stroke="currentColor"
              className={`${active ? "hidden" : ""}`}
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M80 160h352M80 256h352M80 352h352"></path>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" className={`${!active ? "hidden" : ""}`} viewBox="0 0 320 512" fill="#fff">
              <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
            </svg>
          </button>
          <div className={`collapse navbar-collapse ${active ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav d-flex justify-content-end">
              <li className="nav-item active" data-aos="fade-up">
                <Link className="nav-link d-flex" to="/projects">
                  Projects
                  <sup>24</sup>
                </Link>
              </li>
              <li className="nav-item" data-aos="fade-up">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item" data-aos="fade-up">
                <Link className="nav-link" to="/team">
                  Team
                </Link>
              </li>
              <li className="nav-item" data-aos="fade-up">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item d-flex align-items-center justify-content-center social-media-navbar" data-aos="fade-up">
                <Link to="#" onClick={() => window.open("https://www.instagram.com/qatproject/", "_blank")}>
                  <img src={Instagram} alt="" />
                </Link>
                <Link to="#" onClick={() => window.open("https://www.linkedin.com/company/qat-project/?originalSubdomain=tr", "_blank")}>
                  <img src={Linkedin} alt="" />
                </Link>
                <Link to="#" onClick={() => window.open("https://www.facebook.com/qatproject/", "_blank")}>
                  <img src={Facebook} alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
