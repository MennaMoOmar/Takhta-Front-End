import React from "react";

const Assignments = () => {
  return (
    <React.Fragment>
      <div className="lectures">
          <span className="lectures__title">Title: </span>
          <span className="lectures__data">Day1</span>
          <br />
          <span className="lectures__title">Date: </span>
          <span className="lectures__data">15/10/2020</span>
          <br />
          <span className="lectures__title">Descriprtion: </span>
          <span className="lectures__data">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
          <br />
          <span className="lectures__title">Download Assignment: </span>
          <a href="http://www.google.com" target="_blank" rel="noreferrer" className="lectures__data">http://www.google.com</a>
      </div>
    </React.Fragment>
  );
};

export default Assignments;
