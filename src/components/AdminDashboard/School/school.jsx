import React from "react";
import { useHistory } from "react-router";

const School = () => {
  /* history */
  const history = useHistory();

  const handleChooseSchool = (id) => {
    history.push(`/admindashboardschool/create/${id}`);
  };

  return (
    <React.Fragment>
      <div className="col-md-4 col-sm-6 school">
        <div className="school__card" onClick={() => handleChooseSchool(1)}>
          <div className="school__card__img">
            <img src="./images/school.png" alt="" className="school__card__image"/>
          </div>
          <h4 className="school__card__title">ITI</h4>
        </div>
      </div>
    </React.Fragment>
  );
};

export default School;
