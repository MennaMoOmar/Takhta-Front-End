import React, { useState } from "react";

import { NavLink } from "react-router-dom";

const PrtSideNav = () => {
  /*start collapse navbar*/
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  /*end collapse navbar*/

  return (
    <React.Fragment>
      <nav className="navBar navbar navbar-expand-lg">
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
            <i className="fas fa-ellipsis-v"></i>
          </span>
        </button>
        <div className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}>
          <div className="container sidenav">
            <ul className="sidenav__list">
              <li className="sidenav__list__item">
                <NavLink
                  className="sidenav__list__item__a"
                  activeClassName="sidenav--is-active"
                  to="/prtdashboard"
                >
                  <i className="fas fa-binoculars sidenav__list__item__icon"></i>
                  Overview
                </NavLink>
              </li>
              <li className="sidenav__list__item">
                <NavLink
                  className="sidenav__list__item__a"
                  activeClassName="sidenav--is-active"
                  to="/dashboardcourses"
                >
                  <i className="fas fa-book sidenav__list__item__icon"></i>
                  Courses
                </NavLink>
              </li>
              <li className="sidenav__list__item">
                <NavLink
                  className="sidenav__list__item__a"
                  activeClassName="sidenav--is-active"
                  to="/stddashboardschedule"
                >
                  <i className="far fa-calendar-alt sidenav__list__item__icon"></i>
                  Schedule
                </NavLink>
              </li>
              <li className="sidenav__list__item">
                <NavLink
                  className="sidenav__list__item__a"
                  activeClassName="sidenav--is-active"
                  to="/stddashboardgrades"
                >
                  <i className="fas fa-percent sidenav__list__item__icon"></i>
                  Grade
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default PrtSideNav;
