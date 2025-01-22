import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./Navbar.module.css";

export default function Navbar() {
  return (
  <nav className={`navbar navbar-expand-lg ${style.navStyle}`}>
    <div className="container text-uppercase ">
      <a className="navbar-brand text-white fw-bolder fs-2" href="#">Start Framework</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link text-white fw-bold" aria-current="page" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white fw-bold" to="/portfolio">portfolio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white fw-bold" to="/contact">contact</NavLink>
          </li>
         </ul>
      </div>
    </div>
  </nav>
  )
}
