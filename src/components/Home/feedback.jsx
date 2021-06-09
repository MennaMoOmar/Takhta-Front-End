import React from "react";

const Feedback = () => {
  return (
    <React.Fragment>
      <section className="feedback">
        <div className="container">
          <div className="feedback__heading">
            <h2>Send Us Your Feedback</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 feedback__content">
              <form className="feedback__form">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="feedback__form__input"
                ></input>
                <input
                  type="text"
                  placeholder="Email"
                  className="feedback__form__input"
                ></input>
                <input
                  type="text"
                  placeholder="Phone"
                  className="feedback__form__input"
                ></input>
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="feedback__form__input"
                ></textarea>
                <button className="button btn">
                  <span className="button__link">Send</span>
                </button>
              </form>
            </div>
            <div className="col-lg-6 feedback__image">
              <img
                src="/images/feedback.png"
                alt="feedback"
                className="feedback__img"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Feedback;
