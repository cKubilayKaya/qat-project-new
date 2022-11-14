import React, { useEffect, useState } from "react";
import { validate } from "react-email-validator";
import { Link } from "react-router-dom";
import ContactArrow from "../assets/images/icons/contact-arrow.svg";
import RightArrow from "../assets/images/icons/right-arrow.svg";

export default function HomeContact() {
  const [kvkkActive, setKvkkActive] = useState(false);

  const [name, setName] = useState("");
  const [nameText, setNameText] = useState(false);
  const [mail, setMail] = useState("");
  const [mailText, setMailText] = useState(false);
  const [message, setMessage] = useState("");
  const [messageText, setMessageText] = useState(false);
  const [kvkk, setKvkk] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  function contactHandle() {
    if (name === "") {
      setNameText(true);
    }
    if (mail === "") {
      setMailText(true);
    }
    if (message === "") {
      setMessageText(true);
    }
    if (kvkkActive === true) {
      setKvkk(true);
    } else {
      setKvkk(false);
    }
    if (!validate(mail)) {
      setMailText(true);
    }
    if (name !== "" && mail !== "" && message !== "" && kvkkActive !== false && validate(mail)) {
      console.log("başarılı");
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setName("");
        setNameText(false);
        setMail("");
        setMailText(false);
        setMessage("");
        setMessageText(false);
        setKvkk(true);
        setKvkkActive(false);
      }, 3000);
    }
  }

  useEffect(() => {
    if (kvkkActive === true) {
      setKvkk(true);
    }
  }, [kvkkActive]);

  return (
    <div className="home-contact ">
      <h1 className="home-contact-title">
        START YOUR <br /> PROJECT <br /> NOW <img src={ContactArrow} alt="" />
      </h1>
      <div className="home-contact-grid">
        <div className="home-contact-form">
          <div className="home-contact-form-item">
            <input
              type="text"
              placeholder="Name"
              className={`${nameText ? "error" : ""}`}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (e.target.value.length === 0) {
                  setNameText(true);
                }
                if (e.target.value.length >= 1) {
                  setNameText(false);
                }
              }}
              onFocus={(e) => {
                if (e.target.value.length === 0) {
                  setNameText(true);
                }
              }}
            />
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              color="red"
              className={` ${!nameText ? "hidden" : ""}`}
              height="28"
              width="28"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "rgb(255, 96, 96)" }}
            >
              <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z"></path>
            </svg>
          </div>
          <div className="home-contact-form-item">
            <input
              type="email"
              placeholder="Mail"
              value={mail}
              className={`${mailText ? "error" : ""}`}
              onChange={(e) => {
                setMail(e.target.value);
                if (e.target.value.length === 0) {
                  setMailText(true);
                }
                if (e.target.value.length >= 1) {
                  setMailText(false);
                }
                if (!validate(mail)) {
                  setMailText(true);
                }
              }}
              onFocus={(e) => {
                if (e.target.value.length === 0) {
                  setMailText(true);
                }
              }}
            />
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              color="red"
              className={` ${!mailText ? "hidden" : ""}`}
              height="28"
              width="28"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "rgb(255, 96, 96)" }}
            >
              <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z"></path>
            </svg>
          </div>
          <div className="home-contact-form-item home-contact-form-item-textarea">
            <textarea
              cols="30"
              rows="4"
              value={message}
              placeholder="Message"
              className={`${messageText ? "error" : ""}`}
              onChange={(e) => {
                setMessage(e.target.value);
                if (e.target.value.length === 0) {
                  setMessageText(true);
                }
                if (e.target.value.length >= 1) {
                  setMessageText(false);
                }
              }}
              onFocus={(e) => {
                if (e.target.value.length === 0) {
                  setMessageText(true);
                }
              }}
            ></textarea>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              color="red"
              className={` ${!messageText ? "hidden" : ""}`}
              height="28"
              width="28"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "rgb(255, 96, 96)" }}
            >
              <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z"></path>
            </svg>
          </div>

          <div className="checkbox d-flex align-items-center">
            <input type="checkbox" id="kvkk" onClick={() => setKvkkActive(!kvkkActive)} />
            <div className={`checkbox-item ${kvkkActive ? "active" : ""}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
              </svg>
            </div>
            <label htmlFor="kvkk">
              <Link to="#" onClick={() => window.open("/kvkk", "_blank")}>
                KVKK Text {""}
              </Link>
              I have read, I agree.
            </label>
            <div className={`checkbox-error ${kvkk ? "hidden" : ""}`}>
              <p>Required.</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M9.39 265.4l127.1-128C143.6 131.1 151.8 128 160 128s16.38 3.125 22.63 9.375l127.1 128c9.156 9.156 11.9 22.91 6.943 34.88S300.9 320 287.1 320H32.01c-12.94 0-24.62-7.781-29.58-19.75S.2333 274.5 9.39 265.4z" />
              </svg>
            </div>
          </div>

          <button
            className={`d-flex justify-content-end align-items-center ${!isLoading ? "" : "input-disabled"}`}
            onClick={() => contactHandle()}
            disabled={!isLoading ? false : true}
          >
            {!isLoading ? (
              <>
                Send <img src={RightArrow} alt="" />
              </>
            ) : (
              <div className="loader">Loading...</div>
            )}
          </button>
        </div>
        <div className="home-contact-info">
          <div className="home-contact-info-header">
            <h1>
              TURKEY <br /> <span>OFFICE</span>
            </h1>
          </div>
          <div className="home-contact-info-title">
            <h2>Phone</h2>
            <Link to="#" onClick={() => window.open("tel:+90 216 572 55 25", "_blank")}>
              +90 216 572 55 25
            </Link>
            <Link to="#" onClick={() => window.open("tel:+90 216 330 55 25", "_blank")}>
              +90 216 330 55 25
            </Link>
          </div>
          <div className="home-contact-info-title">
            <h2>Email</h2>
            <Link to="#" onClick={() => window.open("mailto:info@qatproject.com", "_blank")}>
              info@qatproject.com
            </Link>
          </div>
          <div className="home-contact-info-title">
            <h2>Address</h2>
            <Link to="#" onClick={() => window.open("https://goo.gl/maps/2VP3WHpq3TQA9zZq9", "_blank")}>
              Fenerbahçe, Fener Kalamış Cd. No:93/4, 34726 Kadıköy/İstanbul
            </Link>
          </div>
        </div>
        <div className="home-contact-info">
          <div className="home-contact-info-header">
            <h1>
              SPAIN <br /> <span>OFFICE</span>
            </h1>
          </div>
          <div className="home-contact-info-title">
            <h2>Phone</h2>
            <Link to="#" onClick={() => window.open("tel:+34 666 39 57 69", "_blank")}>
              +34 666 39 57 69
            </Link>
          </div>
          <div className="home-contact-info-title">
            <h2>Address</h2>
            <Link to="#" onClick={() => window.open("https://goo.gl/maps/x6rnsbUYnzJVnPsy9", "_blank")}>
              Carrer de Pere Martell 49-51 3E 43005{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
