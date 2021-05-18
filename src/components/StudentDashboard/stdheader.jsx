import React from "react";

const StdHeader = () => {
  return (
    <React.Fragment>
      <div className="stdheader">
        <div className="row">
          <div className="col-sm-9">
            <h2 className="stdheader__header">Welcome Back, Ahmed</h2>
            <p className="stdheader__para">Portsaid School</p>
            <button className="button btn">
              <span className="button__link3">View Profile</span>
            </button>
          </div>
          <div className="col-sm-3">
          <img className="stdheader__image" src="/images/header.png" alt="logo"></img>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StdHeader;
