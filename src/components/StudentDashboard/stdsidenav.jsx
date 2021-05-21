import React, { useState } from "react";

import { NavLink } from "react-router-dom";

const StdSideNav = () => {
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
                <i className="fas fa-binoculars sidenav__list__item__icon"></i>
                <NavLink className="sidenav__list__item__a" to="/stddashboard">
                  Overview
                </NavLink>
              </li>
              <li className="sidenav__list__item">
                <i className="fas fa-book sidenav__list__item__icon"></i>
                <NavLink
                  className="sidenav__list__item__a"
                  to="/stddashboardcourses"
                >
                  Courses
                </NavLink>
                {/* <span className="sidenav__list__item__span">Courses</span> */}
              </li>
              <li className="sidenav__list__item">
                <i className="far fa-calendar-alt sidenav__list__item__icon"></i>
                <NavLink
                  className="sidenav__list__item__a"
                  to="/stddashboardschedule"
                >
                  Schedule
                </NavLink>
                {/* <span className="sidenav__list__item__span">Schedule</span> */}
              </li>
              <li className="sidenav__list__item">
                <i className="fas fa-percent sidenav__list__item__icon"></i>
                <NavLink
                  className="sidenav__list__item__a"
                  to="/stddashboardgrades"
                >
                  Grade
                </NavLink>
                {/* <span className="sidenav__list__item__span">Grades</span> */}
              </li>
              <li className="sidenav__list__item">
                <i className="far fa-newspaper sidenav__list__item__icon"></i>
                <NavLink
                  className="sidenav__list__item__a"
                  to="/stddashboardassignments"
                >
                  Assignments
                </NavLink>
                {/* <span className="sidenav__list__item__span">Assignments</span> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default StdSideNav;
