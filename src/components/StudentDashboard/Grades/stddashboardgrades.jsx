import React from "react";

import StdNavBar from "../stdnavbar";
import StdSideNav from "../stdsidenav";
import StdGradesHeader from "./stdgradesheader";
import StdGrades from "./stdgrades";

const StdDashboardGrades = () => {
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#F6FCFB" }}>
        <StdNavBar></StdNavBar>
        <div className="container-fluid dashboard">
          <div className="row dashboard__row">
            <div className="col-lg-2 dashboard__sidenav">
              <StdSideNav></StdSideNav>
            </div>
            <div className="col-lg-9 dashboard__content">
              <StdGradesHeader></StdGradesHeader>
              <StdGrades></StdGrades>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StdDashboardGrades;
