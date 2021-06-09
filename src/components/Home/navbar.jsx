import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";

const Navbar = (props) => {
  /* history */
  const history = useHistory();

  const login = () => {
    history.push("/login");
  };

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <React.Fragment>
      <nav className="navBar navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              className="navBar__image"
              src="/images/logo.png"
              alt="logo"
            ></img>
            <span className="navBar__span">Takhta</span>
          </a>

          <button
            className="custom-toggler navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample09"
            aria-controls="navbarsExample09"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon">
              <i className="fas fa-bars"></i>
            </span>
          </button>
          <div
            className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          >
            <ul className="navBar__list navbar-nav" id="navbarsExample09">
              <li className="navBar__list__item nav-item">
                <NavLink
                  className="navBar__list__item__link navBar__list__item__link--active nav-link"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="navBar__list__item nav-item">
                <NavLink
                  className="navBar__list__item__link nav-link"
                  to="/services"
                >
                  Services
                </NavLink>
              </li>
              <li className="navBar__list__item nav-item">
                <NavLink
                  className="navBar__list__item__link nav-link"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="navBar__list__item nav-item">
                <NavLink
                  className="navBar__list__item__link nav-link"
                  to="/parentfeedback"
                >
                  Feedback
                </NavLink>
              </li>
              <li className="navBar__list__item nav-item">
                <NavLink
                  className="navBar__list__item__link nav-link"
                  to="/feedback"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <button className="button btn" onClick={login}>
              <span className="button__link">Login</span>
            </button>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
