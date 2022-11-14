import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ id, image, title, year, category, subCategory }) {
  return (
    <Link to={`/project/${category}/${subCategory}/${id}`} className="project-list-item">
      <img src={image} className="w-100 img-fluid" alt="" data-aos="fade-up" />
      <span className="project-list-item-desc">
        <p className="name">{title}</p>
        {year ? <p className="date">{year}</p> : ""}
        <p id="view-project">View Project</p>
      </span>
    </Link>
  );
}
