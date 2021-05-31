import React from "react";

const AdminScCoursesHeader = () => {
  return (
    <React.Fragment>
      <div className="stdheader">
        <div className="row">
          <div className="col-sm-9 stdheader__content">
            <h2 className="stdheader__header">Courses</h2>
            {/* <p className="stdheader__para">Browse your school subjects</p> */}
          </div>
          <div className="col-sm-3">
            <img
              className="stdheader__image"
              src="/images/courses.png"
              alt="logo"
            ></img>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminScCoursesHeader;
