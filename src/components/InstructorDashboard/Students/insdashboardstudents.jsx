import React from "react";

import StdNavBar from "../../Shared/stdnavbar";
import InsSideNav from "../inssidenav";
import InsStudentsHeader from "./insstudentssheader";
import InsStudentsTable from "./insstudentstable";

const InsDashboardStudents = () => {
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
              <InsStudentsHeader></InsStudentsHeader>
              <InsStudentsTable></InsStudentsTable>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default InsDashboardStudents;
