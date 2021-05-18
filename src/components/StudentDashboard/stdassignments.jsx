import React from "react";

const StdAssignments = () => {
  return (
    <React.Fragment>
      <section className="stdassignments">
        <div className="row  justify-content-md-center">
          <div className="col-md-6">
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
          </div>

          <div className="col-md-6">
            <div className="assignment__card">
              <div className="stdassignments__title stdassignments__title--done">
                Done
              </div>
              <div className="stdassignments__content">assignments1</div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default StdAssignments;
