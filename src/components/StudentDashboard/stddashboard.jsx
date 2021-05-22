import React from "react";

import StdNavBar from "./stdnavbar";
import StdSideNav from "./stdsidenav";
import StdHeader from "./stdheader";
import MainCourses from "./maincourses";
import TodoAssignment from "./assignments/todoassign";

import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

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
              <div className="dashboard__lectures">
                <MainCourses></MainCourses>
              </div>
              <div className="row dashboard__row">
                <div className="col-md-5" className="dashboard__exams">
                  <h4>Exams</h4>
                  <p>No Exams Untill Now <InsertEmoticonIcon></InsertEmoticonIcon></p>
                </div>
                <div className="col-md-5" className="dashboard__assignments">
                  <h4>Assignments</h4>
                  <TodoAssignment></TodoAssignment>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StdDashboard;
