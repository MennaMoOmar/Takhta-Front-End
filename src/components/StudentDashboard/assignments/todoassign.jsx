import React from "react";

const TodoAssignment = () => {
  return (
    <React.Fragment>
      <div className="assignment__card">
        <div className="stdassignments__title stdassignments__title--todo">
          To Do
        </div>
        <div className="stdassignments__content">
          <div className="stdassignments__content__assign">
            <span>assignment2</span>
            <input type="file" name="assignment" />
          </div>

          <div className="stdassignments__content__assign">
            <span>assignment3</span>
            <input type="file" name="assignment" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TodoAssignment;
