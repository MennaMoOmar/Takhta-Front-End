import React from "react";
import { NavLink } from "react-router-dom";

const StdNavBar = () => {
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
                to="/subject"
              >
                Subject
              </NavLink>
            </li>
            <li className="navBar__list__item nav-item">
              <NavLink
                className="navBar__list__item__link nav-link"
                to="/schedule"
              >
                Schedule
              </NavLink>
            </li>
            <li className="navBar__list__item nav-item">
              <NavLink
                className="navBar__list__item__link nav-link"
                to="/profile"
              >
                Profile
              </NavLink>
            </li>
          </ul>
          <a className="navbar-brand" href="/">
            <img className="navBar__image__user" src="/images/user.png" alt="user"></img>
            <span className="navBar__span">Hi, Menna</span>
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default StdNavBar;
