import React from "react";

import StdNavBar from "../../Shared/stdnavbar";
import AdminScSideNav from "../adminsidenav";
import AdminHeaderSchool from "./adminheaderschool";
import School from "./school"

const AdminDashboardSchool = () => {
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
              <AdminHeaderSchool></AdminHeaderSchool>
              <School></School>
              <School></School>
              <School></School>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminDashboardSchool;
