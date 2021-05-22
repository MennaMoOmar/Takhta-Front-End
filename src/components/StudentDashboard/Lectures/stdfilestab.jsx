import React from "react";

import StdNavBar from "../stdnavbar";
import StdSideNav from "../stdsidenav";
import StdLectureHeader from "./stdlectureheader";
import StdLectureTabs from "./stdlecturetabs";
import Files from "./files";

const StdFilesTab = () => {
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#F6FCFB" }}>
        <StdNavBar></StdNavBar>
        <div className="container-fluid dashboard">
          <div className="row dashboard__row">
            <div className="col-lg-2 dashboard__sidenav">
              <StdSideNav></StdSideNav>
            </div>
            <div className="col-lg-9">
              <StdLectureHeader></StdLectureHeader>
              <div className="dashboardcontent">
                <StdLectureTabs></StdLectureTabs>
                <Files></Files>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StdFilesTab;
