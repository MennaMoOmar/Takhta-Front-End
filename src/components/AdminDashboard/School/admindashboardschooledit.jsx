import React from "react";

import StdNavBar from "../../Shared/stdnavbar";
import AdminSideNav from "../adminsidenav";
import AdminHeaderSchool from "./adminheaderschool";
import SchoolForm from "./schoolform";

const EditSchoolForm = () => {

  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#F6FCFB" }}>
        <StdNavBar></StdNavBar>
        <div className="container-fluid dashboard">
          <div className="row dashboard__row">
            <div className="col-lg-2 dashboard__sidenav">
              <AdminSideNav></AdminSideNav>
            </div>
            <div className="col-lg-9 dashboard__content">
              <AdminHeaderSchool></AdminHeaderSchool>
              ediiiit
              <section className="addcourse">
                  <SchoolForm></SchoolForm>
              </section>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditSchoolForm;
