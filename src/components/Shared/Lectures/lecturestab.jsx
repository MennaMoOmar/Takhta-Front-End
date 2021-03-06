import React from "react";

import StdNavBar from "../stdnavbar";
import StdSideNav from "../../StudentDashboard/stdsidenav";
import InsSideNav from "../../InstructorDashboard/inssidenav";

import StdLectureHeader from "./lectureheader";
import StdLectureTabs from "./lecturetabs";
import Lectures from "../../StudentDashboard/Lectures/lectutres";
import CreateLectures from "../../InstructorDashboard/Lectures/createlecture";

const StdLecturesTab = () => {
  const logginas = "std";

  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#F6FCFB" }}>
        <StdNavBar></StdNavBar>
        <div className="container-fluid dashboard">
          <div className="row dashboard__row">
            <div className="col-lg-2 dashboard__sidenav">
              {logginas === "std" && <StdSideNav></StdSideNav>}
              {logginas === "ins" && <InsSideNav></InsSideNav>}
            </div>
            <div className="col-lg-9">
              <StdLectureHeader></StdLectureHeader>
              <div className="dashboardcontent">
                <StdLectureTabs></StdLectureTabs>
                <Lectures></Lectures>
                {logginas === "ins" && <CreateLectures></CreateLectures>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StdLecturesTab;
