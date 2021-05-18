import React from "react";

const Services = () => {
  return (
    <React.Fragment>
      <section className="service">
        <div className="container">
          <div className="heading">
            <h2>Servises</h2>
          </div>
          <div className="row  justify-content-md-center">
            <div className="col-lg-3 cardservice">
              <img
                src="/images/service1.png"
                alt="logo"
                className="cardservice__img"
              ></img>
              <p className="cardservice__para">Join your school with your ID</p>
            </div>
            <div className="col-lg-3 cardservice">
              <img
                src="/images/service2.png"
                alt="logo"
                className="cardservice__img"
              ></img>
              <p className="cardservice__para">
                Login with your device every day
              </p>
            </div>
          </div>

          <div className="row  justify-content-md-center">
            <div className="col-lg-3 cardservice">
              <img
                src="/images/service3.png"
                alt="logo"
                className="cardservice__img"
              ></img>
              <p className="cardservice__para">
                Attend your online classes every day
              </p>
            </div>
            <div className="col-lg-3 cardservice">
              <img
                src="/images/service4.png"
                alt="logo"
                className="cardservice__img"
              ></img>
              <p className="cardservice__para">Have your quizes and exams</p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Services;
