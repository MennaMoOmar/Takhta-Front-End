import React from "react";

const MainCourses = () => {
  return (
    <React.Fragment>
      <section className="maincourses">
        <div className="row  justify-content-md-center">
          <div className="col-lg-2 col-sm-5 cardservice">
            <img
              src="/images/science.png"
              alt="logo"
              className="cardservice__img"
            ></img>
            <p className="cardservice__para">Science</p>
          </div>
          <div className="col-lg-2 col-sm-5 cardservice">
            <img
              src="/images/english.png"
              alt="logo"
              className="cardservice__img"
            ></img>
            <p className="cardservice__para">Languages</p>
          </div>
          <div className="col-lg-2 col-sm-5 cardservice">
            <img
              src="/images/math.png"
              alt="logo"
              className="cardservice__img"
            ></img>
            <p className="cardservice__para">Math</p>
          </div>
          <div className="col-lg-2 col-sm-5 cardservice">
            <img
              src="/images/geography.png"
              alt="logo"
              className="cardservice__img"
            ></img>
            <p className="cardservice__para">Geography</p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default MainCourses;
