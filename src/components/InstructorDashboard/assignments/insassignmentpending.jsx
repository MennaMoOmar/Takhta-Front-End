import React from "react";

import StdNavBar from "../../Shared/stdnavbar";
import InsSideNav from "../inssidenav";
import InsAssignmentHeader from "./insassignmentsheader";
import InsAssignmentTabs from "./insassignmenttabs";
import Pending from './pendding'

const InsAssignmentPending = () => {

  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#F6FCFB" }}>
        <StdNavBar></StdNavBar>
        <div className="container-fluid dashboard">
          <div className="row dashboard__row">
            <div className="col-lg-2 dashboard__sidenav">
              <InsSideNav></InsSideNav>
            </div>
            <div className="col-lg-9">
              <InsAssignmentHeader></InsAssignmentHeader>
              <div className="dashboardcontent">
                <InsAssignmentTabs></InsAssignmentTabs>
                <Pending></Pending>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default InsAssignmentPending;