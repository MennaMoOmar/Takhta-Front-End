import React from "react";

const StdScheduleHeader = () => {
  return (
    <React.Fragment>
      <div className="stdheader">
        <div className="row">
          <div className="col-sm-9 stdheader__content">
            <h2 className="stdheader__header">Schedule</h2>
            <p className="stdheader__para">Know your lectures time</p>
          </div>
          <div className="col-sm-3">
            <img
              className="stdheader__image"
              src="/images/schedule.png"
              alt="logo"
            ></img>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StdScheduleHeader;
