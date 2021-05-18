import React from "react";

const StdCourses = () => {
  return (
    <React.Fragment>
      <section className="stdcourses">
        <div className="row  justify-content-md-center">
          <div className="col-lg-4 stdcourses__coursecard">
            <div className="stdcourses__coursename">
              Science
              <img
                className="navBar__image stdcourses__img"
                src="/images/science.png"
                alt="logo"
              ></img>
            </div>
            <div className="stdcourses__courseteacher">Teacher: Malak</div>
          </div>

          <div className="col-lg-4 stdcourses__coursecard">
            <div className="stdcourses__coursename">
              Science
              <img
                className="navBar__image stdcourses__img"
                src="/images/science.png"
                alt="logo"
              ></img>
            </div>
            <div className="stdcourses__courseteacher">Teacher: Menna</div>
          </div>

          <div className="col-lg-4 stdcourses__coursecard">
            <div className="stdcourses__coursename">
              Math
              <img
                className="navBar__image stdcourses__img"
                src="/images/math.png"
                alt="logo"
              ></img>
            </div>
            <div className="stdcourses__courseteacher">Teacher: Malak</div>
          </div>

          <div className="col-lg-4 stdcourses__coursecard">
            <div className="stdcourses__coursename">
              English
              <img
                className="navBar__image stdcourses__img"
                src="/images/english.png"
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

export default StdCourses;
