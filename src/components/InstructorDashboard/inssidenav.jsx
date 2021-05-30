import React, { useState } from "react";

import { NavLink } from "react-router-dom";

const InsSideNav = () => {
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
                  to="/insdashboard"
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
                  to={`/dashboardlectures/${1}`}
                >
                  <i className="fas fa-chalkboard-teacher sidenav__list__item__icon"></i>
                  Lectures
                </NavLink>
              </li>
              <li className="sidenav__list__item">
                <NavLink
                  className="sidenav__list__item__a"
                  activeClassName="sidenav--is-active"
                  to="/aa"
                >
                  <i className="far fa-calendar-alt sidenav__list__item__icon"></i>
                  Schedule
                </NavLink>
              </li>
              <li className="sidenav__list__item">
                <NavLink
                  className="sidenav__list__item__a"
                  activeClassName="sidenav--is-active"
                  to={`/insdashboardassignmentslist/${1}`}
                >
                  <i className="fas fa-tasks sidenav__list__item__icon"></i>
                  Assignment
                </NavLink>
              </li>
              <li className="sidenav__list__item">
                <NavLink
                  className="sidenav__list__item__a"
                  activeClassName="sidenav--is-active"
                  to={`/insdashboardstudents/${1}`}
                >
                  <i className="fas fa-users sidenav__list__item__icon"></i>
                  Students
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default InsSideNav;
