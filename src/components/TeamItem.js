import React from "react";
import LinkedinIcon from "../assets/images/icons/linkedin.svg";
import { Link } from "react-router-dom";

export default function TeamItem({ avatar, title, name, social }) {
  return (
    <div className="team-member-item">
      <div className="team-member-avatar" data-aos="fade-up">
        <img src={avatar} className="w-100 img-fluid avatar" alt="" />
        <div className="team-member-avatar-overlay"></div>
        <Link to="#" onClick={() => window.open(social, "blank")}>
          <img src={LinkedinIcon} className="sm-icon" alt="" />
        </Link>
      </div>
      <div className="team-member-desc">
        <p className="name" data-aos="fade-down">
          {name}
        </p>
        <p className="title" data-aos="fade-down">
          {title}
        </p>
      </div>
    </div>
  );
}
