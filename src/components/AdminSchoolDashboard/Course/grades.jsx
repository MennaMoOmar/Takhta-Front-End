import React from "react";
import { useHistory } from "react-router";

const Grades = () => {
  const logginas = "std";

  /* history */
  const history = useHistory();

  const handleChooseGrade = (id) => {
    if (logginas === "std") {
      history.push(`/adminscdashboardcourses/${id}`);
    }
  };

  return (
    <React.Fragment>
      <div className="col-md-4 col-sm-6 grade">
        <div className="grade__card" onClick={() => handleChooseGrade(1)}>
          <span className="grade__span">First Grade</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Grades;
