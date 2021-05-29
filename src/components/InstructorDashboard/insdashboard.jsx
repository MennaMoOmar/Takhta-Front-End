import React from "react";

import StdNavBar from "../StudentDashboard/stdnavbar";
import InsSideNav from "./inssidenav";
import StdHeader from "../StudentDashboard/stdheader";

const InsDashboard = () => {
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#F6FCFB" }}>
        <StdNavBar></StdNavBar>
        <div className="container-fluid dashboard">
          <div className="row dashboard__row">
            <div className="col-lg-2 dashboard__sidenav">
              <InsSideNav></InsSideNav>
            </div>
            <div className="col-lg-9 dashboard__content">
              <StdHeader></StdHeader>
              <div className="dashboard__lectures">
                aa
              </div>
              <div className="row dashboard__row">
                <div className="col-md-5 dashboard__exams">
                  ss
                </div>
                <div className="col-md-5 dashboard__assignments">
                  fd
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default InsDashboard;
