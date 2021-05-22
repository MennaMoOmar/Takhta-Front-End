import React from "react";

const StdLectureHeader = () => {
  return (
    <React.Fragment>
      <div className="stdheader">
        <div className="row">
          <div className="col-sm-9 stdheader__content">
            <h2 className="stdheader__header">React</h2>
            <p className="stdheader__para">Mr.Hamada</p>
          </div>
          <div className="col-sm-3">
          <img className="stdheader__image" src="/images/courses.png" alt="logo"></img>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StdLectureHeader;
