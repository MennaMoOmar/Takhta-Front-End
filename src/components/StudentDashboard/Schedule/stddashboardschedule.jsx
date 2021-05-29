import React from "react";

import StdNavBar from "../../Shared/stdnavbar";
import StdSideNav from "../stdsidenav";
import StdScheduleHeader from "./stdscheduleheader";
import StdSchedule from "./stdschedule";

const StdDashboardSchedule = () => {
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
              <StdScheduleHeader></StdScheduleHeader>
              <StdSchedule></StdSchedule>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StdDashboardSchedule;
