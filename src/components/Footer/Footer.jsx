import React from "react";
import style from "./Footer.module.css";
export default function Footer() {
  return (
    <>
      <div className={`${style.footerBg}`}>
        <div className="container">
          <div className="row text-center g-3 p-5 text-white">
            <div className="col-md-4">
              <div className="location">
                <h3 className="text-uppercase">location</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>

            <div className="col-md-4">
              <h3 className="text-uppercase">around the web</h3>
              <div className="row">
                <div className="col-lg-6 text-center m-auto p-1 m-4">
                  <div>
                    <i
                      className={`fa-brands fa-facebook mx-1 ${style.icon}`}
                    ></i>
                    <i
                      className={`fa-brands fa-twitter mx-1 ${style.icon}`}
                    ></i>
                    <i
                      className={`fa-brands fa-linkedin-in mx-1 ${style.icon}`}
                    ></i>
                    <i className={`fa-solid fa-globe mx-1 ${style.icon}`}></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <h3 className="text-uppercase">about freelancer</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
        <div className={`p-3 ${style.Copyright}`}>
          <p className="text-center text-white">
            &copy; Copyright © Your Website 2021
          </p>
        </div>
      </div>
    </>
  );
}
