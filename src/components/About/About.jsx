import React from "react";
import style from "./About.module.css";
export default function About() {
  return (
    <>
      <div className={`text-white text-center ${style.aboutBody}`}>
        <h2 className="text-uppercase mb-3 fs-1 fw-bolder pt-4">about component</h2>
        <div className={`${style.lineIcon}`}>
          <i className="fa-solid fa-star"></i>
        </div>
        <div className={`d-flex justify-content-center align-items-center ${style.aboutContent}`}>
          <p className="p-4">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className="p-4">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </>
  );
}
