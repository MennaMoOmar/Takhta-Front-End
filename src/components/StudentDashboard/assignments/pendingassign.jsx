import React from "react";

const PendingAssignment = () => {

  return (
    <React.Fragment>
      <div className="assignment__card">
        <div className="stdassignments__title stdassignments__title--pending">
          Pending
        </div>
        <div className="stdassignments__content">
          <div className="stdassignments__content__assign">
            <span>assignment2</span>
            {/* <input type="file" name="assignment" /> */}
            <input
              type="text"
              className="stdassignments__input"
              placeholder="add link here"
              value={"http://drive.com"}
              onChange={(e) => {}}
            />
            <button className="button stdassignments__edit">
              <i className="fas fa-edit stdassignments__edit__icon"></i> Edit
            </button>
          </div>

          <div className="stdassignments__content__assign">
            <span>assignment3</span>
            <input
              type="text"
              className="stdassignments__input"
              placeholder="add link here"
              value={"http://drive.com"}
              onChange={(e) => {}}
            />
            <button className="button stdassignments__edit">
              <i className="fas fa-edit stdassignments__edit__icon"></i> Edit
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PendingAssignment;
