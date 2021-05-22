import React from "react";

import StdSrcGradeAccordion from './stdcrsgradeaccordion'

const StdGrades = () => {
  return (
    <React.Fragment>
      <div className="stdgrades">
          <StdSrcGradeAccordion></StdSrcGradeAccordion>
          <StdSrcGradeAccordion></StdSrcGradeAccordion>
      </div>
    </React.Fragment>
  );
};

export default StdGrades;
