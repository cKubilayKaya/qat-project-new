import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BannerSocialBar from "./components/BannerSocialBar";
import ProjectDetailSlide from "./components/ProjectDetailSlide";
import ReactHelmet from "./components/ReactHelmet";
import { data } from "./data/projects";

export default function ProjectDetail() {
  let { slug, category, subCategory } = useParams();
  const [projectItem, setProjectItem] = useState("");
  const [allItems] = useState(data);

  useEffect(() => {
    let mainCategory = allItems.find((i) => i.slug === category);
    let mainSubCategory = mainCategory.items.find((i) => i.name === subCategory);
    let mainItem = mainSubCategory.items.find((i) => parseInt(i.id) === parseInt(slug));
    setProjectItem(mainItem);
    window.scroll(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const styles = {
    background: `linear-gradient(0deg, rgb(0, 0, 0), rgba(0, 0, 0, 0.8)), url('/${projectItem && projectItem.images[0]}')`,
  };

  return (
    <>
      <ReactHelmet
        titleName="Geyikli Villa Projesi"
        canonical={`project/${slug}`}
        description="QAT is an innovative organization that produces architectural and interior design projects with its young and fresh-minded team. "
      />
      <div className="projects-wrapper homepage-wrapper project-detail-container-wrapper">
        <div className="project-detail-container" style={styles}>
          <div className="project-detail-wrapper">
            <h1 data-aos="fade-down">{projectItem.title}</h1>
            <div className="project-detail-wrapper-desc justify-content-between">
              <div className="left">
                <p data-aos="fade-up">
                  QAT is an innovative organization that produces architectural and interior design projects with its young and fresh-minded team. QAT sees
                  every customer and team member as part of the family. With its sustainability understanding in its business model, it aims to establish a
                  pleasant and long-term relationship with both its team and customers. While developing his perspective, he always looks for the best
                  alternative in design.
                </p>
              </div>
              <div className="right">
                <p data-aos="fade-up">
                  Client: <span>{projectItem.client ? projectItem.client : "-"}</span>
                </p>
                <p data-aos="fade-up">
                  Location: <span>{projectItem.location ? projectItem.location : "-"}</span>
                </p>
                <p data-aos="fade-up">
                  Year: <span>{projectItem.year ? projectItem.year : "-"}</span>
                </p>
                <p data-aos="fade-up">
                  Status: <span>{projectItem.status ? projectItem.status : "-"}</span>
                </p>
                <p data-aos="fade-up">
                  Services: <span>{projectItem.services ? projectItem.services : "-"}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="projects-wrapper-social-bar">
          <BannerSocialBar />
        </div>
        <ProjectDetailSlide images={projectItem.images} />
      </div>
    </>
  );
}
