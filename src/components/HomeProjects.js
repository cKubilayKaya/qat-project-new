import React, { useEffect, useState } from "react";
import BrightnessIcon from "../assets/images/icons/brightness.svg";
import RightArrow from "../assets/images/icons/right-arrow.svg";
import WhiteRightArrow from "../assets/images/icons/white-right-arrow.svg";
import HomeProjectImage1 from "../assets/images/home-projects/01.webp";
import HomeProjectImage2 from "../assets/images/home-projects/02.webp";
import HomeProjectImage3 from "../assets/images/home-projects/03.webp";
import HomeProjectImage4 from "../assets/images/home-projects/04.webp";
import { Link } from "react-router-dom";
import { data } from "../data/projects";

export default function HomeProjects() {
  const [listView, setListView] = useState([]);
  const [activeButton, setActiveButton] = useState(1);
  const [allRange, setAllRange] = useState(100);
  const [range1, setRange1] = useState(100);
  const [range1Active, setRange1Active] = useState(true);
  const [range2, setRange2] = useState(100);
  const [range2Active, setRange2Active] = useState(false);
  const [range3, setRange3] = useState(100);
  const [range3Active, setRange3Active] = useState(false);
  const [range4, setRange4] = useState(100);
  const [range4Active, setRange4Active] = useState(false);

  function handleResize() {
    if (window.innerWidth <= 768) {
      setActiveButton(1);
    }
  }

  window.addEventListener("resize", handleResize);

  const [projects] = useState([
    {
      id: 1,
      title: "Accomodation",
      name: "Goldmann Tuzla",
      link: "project/all/accomodation/21",
      image: HomeProjectImage1,
    },
    {
      id: 2,
      title: "Municipality",
      name: "TRT Ulus",
      link: "project/all/municipality/60",
      image: HomeProjectImage2,
    },
    {
      id: 3,
      title: "Jewellery",
      name: "Musalli Jewelry",
      link: "project/all/jewellery/82",
      image: HomeProjectImage3,
    },
    {
      id: 4,
      title: "Residential",
      name: "Mevsim İstanbul",
      link: "project/architecture/residences/14",
      image: HomeProjectImage4,
    },
  ]);

  useEffect(() => {
    const slicedArray = data[0].items.slice(0, 10);
    setListView(slicedArray[3].items);
  }, []);

  return (
    <div className="home-projects">
      <div className="home-projects-title d-flex align-items-center justify-content-between">
        <h1 data-aos="fade-right">PROJECTS</h1>
        <div className="home-projects-title-list d-flex flex-column">
          <button
            onClick={() => setActiveButton(1)}
            className={activeButton === 1 ? "active d-flex align-items-center justify-content-end" : "d-flex align-items-center justify-content-end"}
          >
            <img src={RightArrow} alt="" data-aos="fade-right" />
            <span data-aos="fade-right">OVER VIEW</span>
          </button>
          <button
            onClick={() => setActiveButton(2)}
            className={activeButton === 2 ? "active d-flex align-items-center justify-content-end" : "d-flex align-items-center justify-content-end"}
          >
            <img src={RightArrow} alt="" data-aos="fade-right" />
            <span data-aos="fade-right">LIST VIEW</span>
          </button>
        </div>
      </div>
      <div className={`${activeButton === 1 ? "home-project-list-one" : "home-project-list-one hidden"}`}>
        <div className="home-project-brightness-wrapper">
          <p data-aos="fade-left">Picture brightness</p>
          <div className="d-flex align-items-center home-project-brightness">
            <img src={BrightnessIcon} alt="" data-aos="fade-left" />
            <input
              type="range"
              value={allRange}
              onChange={(e) => {
                setAllRange(e.target.value);
                setRange1(allRange);
                setRange2(allRange);
                setRange3(allRange);
                setRange4(allRange);
              }}
            />
          </div>
        </div>
        <div className="home-project-items">
          <div className="home-project-item">
            <img src={projects[0].image} className="w-100 img-fluid home-project-item-image" alt="" />
            <div className="home-project-item-wrapper d-flex align-items-center justify-content-between">
              <div className="home-project-item-overlay" style={{ opacity: range1 / 100 === 1 ? "" : range1 / 100 }}></div>
              <div className="home-project-item-desc">
                <p className="title" style={{ opacity: range1 / 100 === 1 ? "" : range1 / 100 }} data-aos="fade-up">
                  {projects[0].title}
                </p>
                <h1 className="home-project-item-title-name" style={{ opacity: range1 / 100 === 1 ? "" : range1 / 100 }} data-aos="fade-up">
                  {projects[0].name}
                </h1>
                <Link
                  to={projects[0].link}
                  className="home-project-item-title-link"
                  style={{ opacity: range1 / 100 === 1 ? "" : range1 / 100 }}
                  data-aos="fade-up"
                >
                  {projects[0].name}
                </Link>
              </div>
              <Link className="home-project-view" to={projects[0].link} data-aos="fade-up">
                View
              </Link>
              <div className="single-project-brightness d-flex align-items-center">
                <img src={BrightnessIcon} onClick={() => setRange1Active(!range1Active)} alt="" data-aos="fade-up" />
                <input
                  type="range"
                  className={`${range1Active === true ? "" : "hidden"}`}
                  value={range1}
                  onChange={(e) => {
                    setRange1(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="home-project-item">
            <img src={projects[1].image} className="w-100 img-fluid home-project-item-image" alt="" data-aos="fade-up" />
            <div className="home-project-item-wrapper d-flex align-items-center justify-content-between">
              <div className="home-project-item-overlay" style={{ opacity: range2 / 100 === 1 ? "" : range2 / 100 }}></div>
              <div className="home-project-item-desc">
                <p className="title" style={{ opacity: range2 / 100 === 1 ? "" : range2 / 100 }} data-aos="fade-up">
                  {projects[1].title}
                </p>
                <h1 className="home-project-item-title-name" style={{ opacity: range2 / 100 === 1 ? "" : range2 / 100 }} data-aos="fade-up">
                  {projects[1].name}
                </h1>
                <Link
                  to={projects[1].link}
                  className="home-project-item-title-link"
                  style={{ opacity: range2 / 100 === 1 ? "" : range2 / 100 }}
                  data-aos="fade-up"
                >
                  {projects[1].name}
                </Link>
              </div>
              <Link className="home-project-view" to={projects[1].link} data-aos="fade-up">
                View
              </Link>
              <div className="single-project-brightness d-flex align-items-center">
                <img src={BrightnessIcon} onClick={() => setRange2Active(!range2Active)} alt="" data-aos="fade-up" />
                <input
                  type="range"
                  className={`${range2Active === true ? "" : "hidden"}`}
                  value={range2}
                  onChange={(e) => {
                    setRange2(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="home-project-item">
            <img src={projects[2].image} className="w-100 img-fluid home-project-item-image" alt="" data-aos="fade-up" />
            <div className="home-project-item-wrapper d-flex align-items-center justify-content-between">
              <div className="home-project-item-overlay" style={{ opacity: range3 / 100 === 1 ? "" : range3 / 100 }}></div>
              <div className="home-project-item-desc">
                <p className="title" style={{ opacity: range3 / 100 === 1 ? "" : range3 / 100 }} data-aos="fade-up">
                  {projects[2].title}
                </p>
                <h1 className="home-project-item-title-name" style={{ opacity: range3 / 100 === 1 ? "" : range3 / 100 }} data-aos="fade-up">
                  {projects[2].name}
                </h1>
                <Link
                  to={projects[2].link}
                  className="home-project-item-title-link"
                  style={{ opacity: range3 / 100 === 1 ? "" : range3 / 100 }}
                  data-aos="fade-up"
                >
                  {projects[2].name}
                </Link>
              </div>
              <Link className="home-project-view" to={projects[2].link} data-aos="fade-up">
                View
              </Link>
              <div className="single-project-brightness d-flex align-items-center">
                <img src={BrightnessIcon} onClick={() => setRange3Active(!range3Active)} alt="" data-aos="fade-up" />
                <input
                  type="range"
                  className={`${range3Active === true ? "" : "hidden"}`}
                  value={range3}
                  onChange={(e) => {
                    setRange3(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="home-project-item">
            <img src={projects[3].image} className="w-100 img-fluid home-project-item-image" alt="" data-aos="fade-up" />
            <div className="home-project-item-wrapper d-flex align-items-center justify-content-between">
              <div className="home-project-item-overlay" style={{ opacity: range4 / 100 === 1 ? "" : range4 / 100 }}></div>
              <div className="home-project-item-desc">
                <p className="title" style={{ opacity: range4 / 100 === 1 ? "" : range4 / 100 }} data-aos="fade-up">
                  {projects[3].title}
                </p>
                <h1 className="home-project-item-title-name" style={{ opacity: range4 / 100 === 1 ? "" : range4 / 100 }} data-aos="fade-up">
                  {projects[3].name}
                </h1>
                <Link
                  to={projects[3].link}
                  className="home-project-item-title-link"
                  style={{ opacity: range4 / 100 === 1 ? "" : range4 / 100 }}
                  data-aos="fade-up"
                >
                  {projects[3].name}
                </Link>
              </div>
              <Link className="home-project-view" to={projects[3].link} data-aos="fade-up">
                View
              </Link>
              <div className="single-project-brightness d-flex align-items-center">
                <img src={BrightnessIcon} onClick={() => setRange4Active(!range4Active)} alt="" data-aos="fade-up" />
                <input
                  type="range"
                  className={`${range4Active === true ? "" : "hidden"}`}
                  value={range4}
                  onChange={(e) => {
                    setRange4(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${activeButton === 2 ? "home-project-list-two" : "home-project-list-two hidden"}`}>
        <div className="home-project-list-two-header">
          <h2 data-aos="fade-up">Project</h2>
          <h2 data-aos="fade-up">Client</h2>
          <h2 data-aos="fade-up">Years</h2>
          <h2 data-aos="fade-up">Location</h2>
        </div>
        <div className="home-project-list-two-items">
          {listView.map((item) => (
            <div className="home-project-list-two-item" key={item.id}>
              <p data-aos="fade-up">{item.title}</p>
              <p data-aos="fade-up">{item.client ? item.client : "-"}</p>
              <p data-aos="fade-up">{item.years ? item.years : "-"}</p>
              <p data-aos="fade-up">{item.location ? item.location : "-"}</p>
              <div>
                <Link to={`/project/architecture/urban-scale/${item.id}`} data-aos="fade-up">
                  <img src={WhiteRightArrow} alt="" data-aos="fade-up" />
                </Link>
              </div>
              <img src={item.images[0]} className="list-view-image img-fluid" alt="" data-aos="fade-up" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
