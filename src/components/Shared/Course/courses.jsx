import React from "react";
import { useHistory } from "react-router";

const Courses = () => {
  const logginas = "prt";

  /* history */
  const history = useHistory();

  const handleChooseCourse = (id) => {
    if (logginas === "std") {
      history.push(`/dashboardlectures/${id}`);
    }
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
              React
              <img
                className="navBar__image stdcourses__img"
                src="/images/science.png"
                alt="logo"
              ></img>
            </div>
            <div className="stdcourses__courseteacher">Teacher: Malak</div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Courses;
