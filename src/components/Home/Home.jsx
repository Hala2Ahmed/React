import React from 'react'
import img1 from "../../assets/avataaars.svg";
import style from "./Home.module.css";
export default function Home() {
  return (
    <>
      <div className={`text-white p-4 ${style.homeStyle}`}>
      <img src={img1} alt="" className="mb-3" />
      <h2 className="text-uppercase mb-3 fs-1 fw-bolder text-white">start Framework</h2>
     <div className={`${style.lineIcon}`}>
     <i className='fa-solid fa-star'></i>
     </div>
      <p className='mt-3'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  )
}
