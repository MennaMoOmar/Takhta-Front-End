import React from "react";

import TodoAssignment from './todoassign'
import PendingAssignment from './pendingassign'
import DoneAssignment from "./doneassign";

const StdAssignments = () => {
  return (
    <React.Fragment>
      <section className="stdassignments">
        <div className="row  justify-content-md-center">
          <div className="col-md-4">
            <TodoAssignment></TodoAssignment>
          </div>

          <div className="col-md-4">
            <PendingAssignment></PendingAssignment>
          </div>

          <div className="col-md-4">
            <DoneAssignment></DoneAssignment>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default StdAssignments;
