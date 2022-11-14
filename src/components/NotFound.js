import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "../assets/images/not-found/rocket.gif";
import RightArrowIcon from "../assets/images/icons/right-arrow.svg";

export default function NotFound() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="not-found container">
      <h1>Yapılardan biraz uzaklaştık...</h1>
      <Link to="/" className="d-flex align-items-center">
        <span>Hemen geri dönelim</span>
        <img src={RightArrowIcon} alt="" />
      </Link>
      <img src={NotFoundImage} className="not-found-image w-75 img-fluid" alt="" />
    </div>
  );
}
