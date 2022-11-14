import React, { useEffect } from "react";
import BannerSocialBar from "./components/BannerSocialBar";
import ProjectHeaderSlide from "./components/ProjectHeaderSlide";
import ReactHelmet from "./components/ReactHelmet";

export default function Projects() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <ReactHelmet
        titleName="Projects"
        canonical="projects"
        description="Take a look at our architectural designs that we approach with the understanding of universal perfection.
"
      />
      <div className="projects-wrapper homepage-wrapper">
        <ProjectHeaderSlide />
        <div className="projects-wrapper-social-bar">
          <BannerSocialBar />
        </div>
      </div>
    </>
  );
}
