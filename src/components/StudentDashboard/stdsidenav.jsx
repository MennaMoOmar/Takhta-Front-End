import React from "react";

import { NavLink } from "react-router-dom";

const StdSideNav = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default StdSideNav;
