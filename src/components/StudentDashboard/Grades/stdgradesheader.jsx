import React from "react";

const StdGradesHeader = () => {
  return (
    <React.Fragment>
      <div className="stdheader">
        <div className="row">
          <div className="col-sm-9 stdheader__content">
            <h2 className="stdheader__header">Grades</h2>
            <p className="stdheader__para">Take a look on your grades</p>
          </div>
          <div className="col-sm-3">
            <img
              className="stdheader__image"
              src="/images/grades2.png"
              alt="logo"
            ></img>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StdGradesHeader;
