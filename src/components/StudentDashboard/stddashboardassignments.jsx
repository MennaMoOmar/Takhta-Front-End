import React from "react";

import StdNavBar from "./stdnavbar";
import StdSideNav from "./stdsidenav";
import StdAssignmentsHeader from "./stdassignmentsheader";
import StdAssignments from "./stdassignments";

const StdDashboardAssignments = () => {
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
              <StdAssignmentsHeader></StdAssignmentsHeader>
              <StdAssignments></StdAssignments>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StdDashboardAssignments;
