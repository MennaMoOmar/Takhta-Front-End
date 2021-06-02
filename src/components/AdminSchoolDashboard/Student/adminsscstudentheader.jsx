import React from "react";

const AdminScStudentsHeader = () => {
  return (
    <React.Fragment>
      <div className="stdheader">
        <div className="row">
          <div className="col-sm-9 stdheader__content">
            <h2 className="stdheader__header">Teachers</h2>
            <p className="stdheader__para">Manage your students</p>
          </div>
          <div className="col-sm-3">
            <img
              className="stdheader__image"
              src="/images/students.png"
              alt="logo"
            ></img>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminScStudentsHeader;
