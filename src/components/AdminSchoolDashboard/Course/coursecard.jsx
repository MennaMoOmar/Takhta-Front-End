import React from "react";
import { useHistory } from "react-router";

const Courses = () => {
  const logginas = "std";

  /* history */
  const history = useHistory();

  const handleChooseCourse = (id) => {
    if (logginas === "std") {
      history.push(`/dashboardlectures/${id}`);
    }
  };

  return (
    <React.Fragment>
      <div className="col-md-4 col-sm-6 stdcourses__coursecard">
        <div
          className="stdcourses__coursename"
          onClick={() => handleChooseCourse(1)}
        >
          React
        </div>
        <div className="stdcourses__courseteacher">
          <p>
            Code: <span>12345</span>
          </p>
          <p>
            Teacher: <span>Malak</span>
          </p>
          <p>
          <i className="far fa-edit stdcourses__edit"></i>
          <i className="far fa-trash-alt stdcourses__delete"></i>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Courses;
