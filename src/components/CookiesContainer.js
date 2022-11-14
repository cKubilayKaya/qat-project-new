import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CookiesContainer() {
  const [active, setActive] = useState(localStorage.getItem("showCookie") ? true : false);

  useEffect(() => {
    if (active) {
      localStorage.setItem("showCookie", true);
    } else {
      localStorage.setItem("showCookie", false);
    }
  }, [active]);

  return (
    <div className={` ${active ? "hidden" : "cookies-container d-flex align-items-center"}`}>
      <div className="container d-flex align-items-center justify-content-between">
        <p>
          We use cookies on our website to see how you interact with it. By accepting, you agree to our use of such cookies.{" "}
          <Link to="/privacy-policy">Privacy Policy</Link>
        </p>
        <div className="cookies-button d-flex align-items-center">
          <button className="decline" onClick={() => setActive(true)}>
            Decline All
          </button>
          <button className="accept" onClick={() => setActive(true)}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
