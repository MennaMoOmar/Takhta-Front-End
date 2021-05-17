import React from "react";

const HeroSection = () => {
  return (
    <React.Fragment>
      <section className="herosection">
        <div className="container">
          <div className="sectionOne">
            <div className="row">
              <div className="col-lg-6">
                <h2>Your School here in one place</h2>
                <p>Login to start your new day</p>
                <button className="button btn">
                  <span className="button__link">Get Started</span>
                </button>
              </div>
              <div className="col-lg-6">
                {/* <img src="/images/asset1.png" alt="logo"></img> */}
              </div>
            </div>
          </div>
          <div className="sectionTwo">
            <div className="row">
              <div className="col-lg-6"></div>
              <div className="col-lg-6">
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
