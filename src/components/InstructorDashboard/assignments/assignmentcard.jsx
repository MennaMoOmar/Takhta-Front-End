import React from "react";
import { useHistory } from "react-router";

const AssignmentCard = () => {
  /* history */
  const history = useHistory();

  const handleChooseCourse = (id) => {
    history.push(`/insdashboardassignments/${id}`);
  };

  return (
    <React.Fragment>
      <section className="stdcourses">
        <div className="row  justify-content-md-center">
          <div className="col-md-4 col-sm-6 stdcourses__coursecard">
            <div
              className="stdcourses__coursename"
              onClick={() => handleChooseCourse(1)}
            >
              Task1
            </div>
            <div className="stdcourses__courseteacher">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AssignmentCard;
