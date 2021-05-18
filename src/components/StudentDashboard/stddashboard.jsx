import React from "react";

import StdNavBar from "./stdnavbar";
import StdSideNav from "./stdsidenav";
import StdContent from "./stdcontent";

const StdDashboard = () => {
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#F6FCFB" }}>
        <StdNavBar></StdNavBar>
        <div className="container-fluid dashboard">
          <div className="row dashboard__row">
            <div className="col-lg-3 dashboard__sidenav">
              <StdSideNav></StdSideNav>
            </div>
            <div className="col-lg-8 dashboard__content">
              <StdContent></StdContent>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StdDashboard;
