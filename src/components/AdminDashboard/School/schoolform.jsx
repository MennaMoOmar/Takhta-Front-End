import React from "react";
import { useHistory } from "react-router";

const SchoolForm = () => {
  /* history */
  const history = useHistory();
  //   addLectureHandler
  const addSchoolHandler = (id) => {
    history.push("/admindashboardschool");
  };

  return (
    <React.Fragment>
      <div className="adminform">
        <h3 className="adminform__header">Add School</h3>
        <form action="">
        <div className="form-group">
            <label for="scimage" className="adminform__label">School Image</label>
            <input
              type="file"
              id="scimage"
              className="adminform__input"
            />
          </div>
          <div className="form-group">
            <label for="scname" className="adminform__label">School Name</label>
            <input
              type="text"
              id="scname"
              className="adminform__input"
              placeholder="enter school name"
            />
          </div>
          <div className="form-group">
            <label for="scdesc" className="adminform__label">Description</label>
            <input
              type="text"
              id="scdesc"
              className="adminform__input"
              placeholder="enter description about school"
            />
          </div>
          <div className="form-group">
            <label for="scgrades" className="adminform__label">Grades</label>
            l grades l fl school
          </div>
          <button
            className="button  adminform__addbtn"
            onClick={addSchoolHandler}
          >
            Add
          </button>
          <button
            className="button adminform__cancelbtn"
            onClick={addSchoolHandler}
          >
            Cancel
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default SchoolForm;
