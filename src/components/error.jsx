import React from "react";

const Loading = () => (
  <>
    <div className="error">
      <img className="error__img" src="/images/error.png" alt="" />
      <div className="error__button">
        <button className="error__btn btn">
          <span className="error__link">Back Home</span>
        </button>
      </div>
    </div>
  </>
);

export default Loading;
