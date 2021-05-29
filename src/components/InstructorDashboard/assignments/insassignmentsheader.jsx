import React from "react";

const InsAssignmentsHeader = () => {
  return (
    <React.Fragment>
      <div className="stdheader">
        <div className="row">
          <div className="col-sm-9 stdheader__content">
            <h2 className="stdheader__header">Assignments</h2>
            <p className="stdheader__para">Check your students assignments</p>
          </div>
          <div className="col-sm-3">
          <img className="stdheader__image" src="/images/assignments.png" alt="logo"></img>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default InsAssignmentsHeader;
