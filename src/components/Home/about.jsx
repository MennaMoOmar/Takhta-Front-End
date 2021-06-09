import React from "react";

const About = () => {
  return (
    <React.Fragment>
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 about__content">
              <div className="about__heading">
                <h2>About</h2>
              </div>
              <p>
                Takhta is a School Management System for educational
                institutions and schools. involves various schools, each of them
                has abilities such as registration of students in classes, the
                teachers, adding their schedules, courses, lectures,
                assignments...etc. In trying to simulate a real school.
              </p>
            </div>
            <div className="col-lg-6 about__image">
              <img
                src="/images/about.png"
                alt="about"
                className="about__img"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
