import React from "react";

const HeroSection = () => {
  return (
    <React.Fragment>
      <section className="herosection">
        <div className="container">
          <div className="herosection__sectionOne">
            <div className="row">
              <div className="col-lg-6 herosection__sectionOne__content">
                <h2>Your School here in one place</h2>
                <p>Login to start your new day</p>
                <button className="button btn">
                  <span className="button__link">Get Started</span>
                </button>
              </div>
              <div className="col-lg-6">
                <img src="/images/HeroSec3.png" alt="logo" className="herosection__img"></img>
              </div>
            </div>
          </div>
          <div className="herosection__sectionTwo">
            <div className="row">
              <div className="col-lg-6">
              <img src="/images/HeroSec4.png" alt="logo" className="herosection__img"></img>
              </div>
              <div className="col-lg-6 herosection__sectionTwo__content">
                <h2>Parents can track their child school progress</h2>
                <p>Be one of our parents group</p>
                <button className="button btn">
                  <span className="button__link2">Join Us</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HeroSection;
