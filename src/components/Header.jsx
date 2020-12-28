import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const {
    DarkMode,
    themeObject: { theme, bgColor, textColor, btnColor }
  } = props;

  return (
    <div>
      <nav
        className={`navbar navbar-expand-sm navbar-light bg-light ${bgColor}`}
      >
        <div className="container">
          <Link className={`navbar-brand  ${textColor}`} to="/Home">
            LOGO
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link ${textColor} active`} to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${textColor}`} to="/Card">
                  Card
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${textColor}`} to="/about-us">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <button className="btn btn-dark ms-4" onClick={DarkMode}>
            Dark
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
