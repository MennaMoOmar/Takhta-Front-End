import React from "react";

const ParentFeedback = () => {
  return (
    <React.Fragment>
      <section className="parentfeedback">
        <div className="container">
          <div className="parentfeedback__heading">
            <h2>Parents Feedbacks</h2>
          </div>
          <div className="parentfeedback__content">
            <div className="parentfeedback__content__card">
              <img src="/images/quotes.png" alt=""  className="parentfeedback__content__card__img"></img>
              <p>
                My son has become able to follow what is happening in his school
                life at home!.. He does not need to go to school.
              </p>
              <p>- Ali Ahmed</p>
              <p className="parentfeedback__content__card__parent">Parent of student Ahmed Ali </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ParentFeedback;
