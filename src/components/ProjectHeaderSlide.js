import React, { useState } from "react";
import { Navigation, Pagination } from "swiper";
import SwiperCore from "swiper";
import { data } from "../data/projects.js";
import { Tabs } from "react-bootstrap";
import { Tab } from "bootstrap";
import ProjectsSkeleton from "./ProjectsSkeleton.js";
import ProjectCard from "./ProjectCard.js";
import { useEffect } from "react";

SwiperCore.use([Pagination, Navigation]);

export default function ProjectHeaderSlide() {
  const [projects] = useState(data);
  const [activeProject, setActiveProject] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const changeCategory = (item) => {
    setActiveCategory(item);
  };

  useEffect(() => {
    setActiveProject(projects.find((p) => p.slug === activeCategory));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory]);

  return (
    <div className="container project-header-slide-wrapper">
      <div className="project-header-slide-wrapper-buttons d-flex align-items-center justify-content-end">
        {projects.map((item) => (
          <button className={`${activeCategory === item.slug && "active"}`} onClick={() => changeCategory(`${item.slug}`)} key={item.id}>
            {item.title}
          </button>
        ))}
      </div>

      {activeProject.items && (
        <Tabs defaultActiveKey={`${activeProject.items[0].name}`} data-aos="fade-down" key={activeProject.id}>
          {activeProject.items.map((item) => (
            <Tab eventKey={item.name} title={`${item.name} (${item.items.length})`} key={item.id}>
              <div className="project-list-items">
                {item.items.map((subItem) => (
                  <div key={subItem.id}>
                    <img
                      src={subItem.images[0]}
                      className="w-100 img-fluid projects-image-opacity-zero"
                      alt={subItem.title}
                      data-aos="fade-up"
                      onLoad={(_) => setIsLoading(true)}
                    />
                    {isLoading ? (
                      <ProjectCard
                        id={subItem.id}
                        image={subItem.images[0]}
                        title={subItem.title}
                        year={subItem.year}
                        category={activeCategory}
                        setIsLoading={setIsLoading}
                        subCategory={item.name}
                      />
                    ) : (
                      <ProjectsSkeleton />
                    )}
                  </div>
                ))}
              </div>
            </Tab>
          ))}
        </Tabs>
      )}
    </div>
  );
}
