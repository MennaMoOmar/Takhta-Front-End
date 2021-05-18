import React from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";

const Navbar = (props) => {
  /* history */
  const history = useHistory();

  const login = () => {
      history.push("/login");
  };

  return (
    <React.Fragment>
      <nav className="navBar navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img className="navBar__image" src="/images/logo.png" alt="logo"></img>
            <span className="navBar__span">Takhta</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="navBar__list navbar-nav">
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
                to="/contactUs"
              >
                Contact Us
              </NavLink>
            </li>
            <li className="navBar__list__item nav-item">
              <NavLink
                className="navBar__list__item__link nav-link"
                to="/ourteam"
              >
                Our Team
              </NavLink>
            </li>
          </ul>
          <button className="button btn" onClick={login}>
            <span className="button__link">Login</span>
          </button>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
