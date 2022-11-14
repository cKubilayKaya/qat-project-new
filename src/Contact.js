import React, { useEffect, useState } from "react";
import BannerSocialBar from "./components/BannerSocialBar";
import TurkeyMap from "./assets/images/contact/turkey.png";
import SpainMap from "./assets/images/contact/spain.png";
import ContactSection from "./components/ContactSection";
import JobAppForm from "./components/JobAppForm";
import ReactHelmet from "./components/ReactHelmet";
import { Link } from "react-router-dom";

export default function Contact() {
  const [activeButton, setActiveButton] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ReactHelmet titleName="Contact" canonical="contact" description="Contact our team for timeless architectural designs." />
      <div className="contact homepage-wrapper">
        <div className="container">
          <div className="office-buttons" data-aos="fade-up">
            <button className={`${activeButton === 1 ? "active" : ""}`} onClick={() => setActiveButton(1)}>
              Turkey Office
            </button>
            <button className={`${activeButton === 2 ? "active" : ""}`} onClick={() => setActiveButton(2)}>
              Spain Office
            </button>
          </div>
        </div>
        <div className={`turkey-contact-image-section ${activeButton === 2 ? "hidden" : ""}`}>
          <img src={TurkeyMap} className="w-100 img-fluid contact-image" alt="" />
          <Link to="#" onClick={() => window.open("https://goo.gl/maps/1agDuQLp2uZjxM956", "_blank")}>
            Konuma Git
          </Link>
          <div className="turkey-contact-image-section-overlay"></div>
        </div>
        <div className={`spain-contact-image-section ${activeButton === 1 ? "hidden" : ""}`}>
          <img src={SpainMap} className="w-100 img-fluid contact-image" alt="" />
          <Link to="#" onClick={() => window.open("https://goo.gl/maps/nhBp3VdZg69CyCXq8", "_blank")}>
            Konuma Git
          </Link>
          <div className="spain-contact-image-section-overlay"></div>
        </div>
        <div className="projects-wrapper-social-bar">
          <BannerSocialBar />
        </div>
        <div className="contact-form-section">
          <ContactSection />
          <JobAppForm />
        </div>
      </div>
    </>
  );
}
