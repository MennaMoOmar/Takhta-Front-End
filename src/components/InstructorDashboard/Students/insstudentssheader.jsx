import React from "react";

const InsStudentsHeader = () => {
  return (
    <React.Fragment>
      <div className="stdheader">
        <div className="row">
          <div className="col-sm-9 stdheader__content">
            <h2 className="stdheader__header">Students</h2>
            <p className="stdheader__para">Students attend this course</p>
          </div>
          <div className="col-sm-3">
            <img
              className="stdheader__image"
              src="/images/students3.png"
              alt="logo"
            ></img>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default InsStudentsHeader;
