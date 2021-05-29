import React from "react";

import StdNavBar from "../stdnavbar";
import StdSideNav from "../../StudentDashboard/stdsidenav";
import StdLectureHeader from "./lectureheader";
import StdLectureTabs from "./lecturetabs";
import Files from "../../StudentDashboard/Lectures/files";
import CreateFiles from "../../InstructorDashboard/Lectures/createfile";

const StdFilesTab = () => {
  const logginas = "std";

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
                {logginas === "ins" && <CreateFiles></CreateFiles>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StdFilesTab;
