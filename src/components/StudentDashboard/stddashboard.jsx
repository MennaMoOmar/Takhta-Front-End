import React from "react";

import StdNavBar from "./stdnavbar";
import StdSideNav from "./stdsidenav";
import StdHeader from "./stdheader";
// import StdContent from "./stdcontent";

const StdDashboard = () => {
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
              <StdHeader></StdHeader>
              {/* <StdContent></StdContent> */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StdDashboard;
