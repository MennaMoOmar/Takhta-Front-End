import React from "react";

const AdminScParentsHeader = () => {
  return (
    <React.Fragment>
      <div className="stdheader">
        <div className="row">
          <div className="col-sm-9 stdheader__content">
            <h2 className="stdheader__header">Parents</h2>
            <p className="stdheader__para">Manage your student's parents</p>
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

export default AdminScParentsHeader;
