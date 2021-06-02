import React from "react";

const AdminScTeachersHeader = () => {
  return (
    <React.Fragment>
      <div className="stdheader">
        <div className="row">
          <div className="col-sm-9 stdheader__content">
            <h2 className="stdheader__header">Teachers</h2>
            <p className="stdheader__para">Manage your school staff</p>
          </div>
          <div className="col-sm-3">
            <img
              className="stdheader__image"
              src="/images/lectures.png"
              alt="logo"
            ></img>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminScTeachersHeader;
