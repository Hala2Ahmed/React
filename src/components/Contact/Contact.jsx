import React from 'react'
import style from "./Contact.module.css";
export default function Contact() {
  return (
    <>
      <div className={`text-center p-4 ${style.contact}`}>
        <h2 className="text-uppercase mb-1 fs-1 fw-bolder">conatct section</h2>
        <div className="lineIcon">
          <i className="fa-solid fa-star"></i>
        </div>
      </div>
      <form className="w-50 mb-5 mx-auto">
      <input id="userName" type="text" placeholder="userName" name="userName" className="form-control border-0 border-bottom py-3 position-relative"></input>
      <input id="userName" type="number" placeholder="userAge" name="userAge" className="form-control border-0 border-bottom py-3 position-relative pt-4 pb-4"></input>
      <input id="userName" type="email" placeholder="userEmail" name="userEmail" className="form-control border-0 border-bottom py-3 position-relative pt-4 pb-4"></input>
      <input id="userName" type="text" placeholder="userPassword" name="userPassword" className="form-control border-0 border-bottom py-3 position-relative"></input>
      <button className={`btn mt-4 text-white ${style.btnStyle}`}> send Message </button>
      </form>
    </>
  )
}

