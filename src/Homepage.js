import React, { useEffect } from "react";
import BannerSlide from "./components/BannerSlide";

import SlideText from "./components/SlideText";
import BannerAbout from "./components/BannerAbout";
import HomeTeamSection from "./components/HomeTeamSection";
import SlideLogo from "./components/SlideLogo";
import HomeProjects from "./components/HomeProjects";
import HomeContact from "./components/HomeContact";
import BannerSocialBar from "./components/BannerSocialBar";
import ReactHelmet from "./components/ReactHelmet";

export default function Homepage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <ReactHelmet
        canonical=""
        description="QAT is more than just an architectural and interior design team. It constantly improves itself in order to offer flawless and timeless designs in every aspect."
      />
      <SlideText />
      <div className="homepage-wrapper">
        <BannerSlide />
        <BannerSocialBar />
        <div className="banner-about-container">
          <BannerAbout />{" "}
        </div>
        <HomeTeamSection />
        <SlideLogo />
        <HomeProjects />
        <HomeContact />
      </div>
    </>
  );
}
