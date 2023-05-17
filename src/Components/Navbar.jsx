import React from "react";
import propTypes from 'prop-types'
import { Link } from "react-router-dom";
// import About from "./About";

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.navTitle}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About </Link>
              </li>
            </ul>
          </div>
    
          <div className={`form-check form-switch text-${props.mode === "dark" ? "light" : "dark"} mx-3`} >
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === "dark" ? "light" : "dark"} Mode</label>
          </div>

        </div>
      </nav>
    </>
  )
}

Navbar.propTypes = {
  navTitle: propTypes.string.isRequired,
  mailUs: propTypes.string.isRequired,
}

Navbar.defaultProps = {
  navTitle: "Enter title here",
  mailUs: "Write Email us here"
}