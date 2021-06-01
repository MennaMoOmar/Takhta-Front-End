import React from "react";

import StdNavBar from "../../Shared/stdnavbar";
import AdminScSideNav from "../adminscsidenav";
import AdminScCoursesHeader from "./adminssccourseheader";
import Grades from "./grades";

const AdminScDashboardCourses = () => {
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#F6FCFB" }}>
        <StdNavBar></StdNavBar>
        <div className="container-fluid dashboard">
          <div className="row dashboard__row">
            <div className="col-lg-2 dashboard__sidenav">
              <AdminScSideNav></AdminScSideNav>
            </div>
            <div className="col-lg-9 dashboard__content">
              <AdminScCoursesHeader></AdminScCoursesHeader>
              <section className="stdcourses">
                <div className="row  justify-content-md-center">
                  <Grades></Grades>
                  <Grades></Grades>
                  <Grades></Grades>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminScDashboardCourses;
