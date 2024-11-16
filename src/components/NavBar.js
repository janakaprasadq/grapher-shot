import "../styles/NavBar.scss";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 50); // Adjust the threshold for when the effect starts
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            GRAPHER SHOT.
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  PORTOFOLIO
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  ABOUT ME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">
                  PORTFOLIO
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/price">
                  PRICE
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <nav className="navbar navbar-expand-lg custom-navbar ">
        <div className="container-fluid navBarItems">
          <div className="nav-brand-style">
            <a className="navbar-brand ">GRAPHER SHOT</a>
          </div>

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

          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav navbar-items">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${activeLink === "/" ? "active" : ""}`}
                  aria-current="page"
                >
                  PORTOFOLIO
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className={`nav-link ${
                    activeLink === "/about" ? "active" : ""
                  }`}
                >
                  ABOUT ME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/portfolio"
                  className={`nav-link ${
                    activeLink === "/portfolio" ? "active" : ""
                  }`}
                >
                  PORTFOLIO
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/price"
                  className={`nav-link ${
                    activeLink === "/price" ? "active" : ""
                  }`}
                >
                  PRICE
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className={`nav-link ${
                    activeLink === "/contact" ? "active" : ""
                  }`}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default NavBar;