import React, { useState } from "react";
import style from "./Protfolio.module.css";
import img1 from "../../assets/poert1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";
import Card from "../Card/Card";
export default function Portfolio() {
  let [imgSrc, setImgSrc] = useState();
  function changeImgSrc(x) {
    setImgSrc(x);
  }
  let imgs = [
    { id: "img1", src: img1 },
    { id: "img2", src: img2 },
    { id: "img3", src: img3 },
    { id: "img4", src: img1 },
    { id: "img5", src: img2 },
    { id: "img6", src: img3 },
  ];
  return (
    <>
      <div className="text-center m-5">
        <h2 className="text-uppercase mb-1 fs-1 fw-bolder">
          portfolio component
        </h2>
        <div className="lineIcon pb-4">
          <i className="fa-solid fa-star"></i>
        </div>
        <div className="container">
          <div className="row g-4">
            {imgs.map((img) => (
              <Card key={img.id} img={img} changeImgSrc={changeImgSrc} />
            ))}
          </div>
        </div>
        {imgSrc ? (
          <div
            onClick={() => changeImgSrc()}
            className="bg-black bg-opacity-50 position-fixed top-0 bottom-0 start-0 end-0 bg-light-blue d-flex justify-content-center align-items-center z-1"
          >
            <div className="w-50">
              <img src={imgSrc} alt="" className="w-100 rounded-1" />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
