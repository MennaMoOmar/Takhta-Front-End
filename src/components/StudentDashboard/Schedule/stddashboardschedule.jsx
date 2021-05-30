import React from "react";

import StdNavBar from "../../Shared/stdnavbar";
import StdSideNav from "../stdsidenav";
import PrtSideNav from "../../ParentDashboard/prtsidenav";
import StdScheduleHeader from "./stdscheduleheader";
import StdSchedule from "./stdschedule";

const StdDashboardSchedule = () => {
  const logginas = "prt";

  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#F6FCFB" }}>
        <StdNavBar></StdNavBar>
        <div className="container-fluid dashboard">
          <div className="row dashboard__row">
            <div className="col-lg-2 dashboard__sidenav">
              {logginas === "std" && <StdSideNav></StdSideNav>}
              {logginas === "prt" && <PrtSideNav></PrtSideNav>}
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
