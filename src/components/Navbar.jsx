import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-light" style={{ padding: "30px 0" }}>
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          <img src={props.img} alt="" width={"40px"} className="rounded-circle" /> <span className="ms-2">{props.name}</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <div className="custom-nav">Home</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/about"} style={{ textDecoration: "none" }}>
                <div className="custom-nav">About</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/skills"} style={{ textDecoration: "none" }}>
                <div className="custom-nav">Skills</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/blog"} style={{ textDecoration: "none" }}>
                <div className="custom-nav">Blog</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
