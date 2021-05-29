import React from "react";

import StdNavBar from "../stdnavbar";
import StdSideNav from "../../StudentDashboard/stdsidenav";
import InsSideNav from "../../InstructorDashboard/inssidenav";
import CoursesHeader from "./coursesheader";
import Courses from "./courses";

const StdDashboardCourses = () => {
  const logginas = "ins";

  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#F6FCFB" }}>
        <StdNavBar></StdNavBar>
        <div className="container-fluid dashboard">
          <div className="row dashboard__row">
            <div className="col-lg-2 dashboard__sidenav">
              {logginas === "std" && <StdSideNav></StdSideNav>}
              {logginas === "ins" && <InsSideNav></InsSideNav>}
            </div>
            <div className="col-lg-9 dashboard__content">
              <CoursesHeader></CoursesHeader>
              <Courses></Courses>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StdDashboardCourses;
