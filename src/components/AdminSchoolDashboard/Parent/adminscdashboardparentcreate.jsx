import React from "react";

import StdNavBar from "../../Shared/stdnavbar";
import AdminScSideNav from "../adminscsidenav";
import AdminScParentsHeader from "./adminsscparentheader";
import ParentForm from "./parentform";

const CreateParentForm = () => {

  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#F6FCFB" }}>
        <StdNavBar></StdNavBar>
        <div className="container-fluid dashboard">
          <div className="row dashboard__row">
            <div className="col-lg-2 dashboard__sidenav">
              <AdminScSideNav></AdminScSideNav>
            </div>
            <div className="col-lg-9 dashboard__content">
              <AdminScParentsHeader></AdminScParentsHeader>
              <section className="addcourse">
                  <ParentForm></ParentForm>
              </section>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateParentForm;
