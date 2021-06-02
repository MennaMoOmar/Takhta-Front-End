import React from "react";
import { useHistory } from "react-router";

const CourseForm = () => {
  /* history */
  const history = useHistory();
  //   addLectureHandler
  const addCourseHandler = (id) => {
    history.push(`/adminscdashboardcourse/${id}`);
  };

  return (
    <React.Fragment>
      <div className="adminform">
        <h3 className="adminform__header">Add Course</h3>
        <form action="">
          <div className="form-group">
            <label for="crsname" className="adminform__label">Course Name</label>
            <input
              type="text"
              id="crsname"
              className="adminform__input"
              placeholder="enter course name"
            />
          </div>
          <div className="form-group">
            <label for="crsteacher" className="adminform__label">Teacher</label>
            <input
              type="text"
              id="crsteacher"
              className="adminform__input"
              placeholder="enter teacher name"
            />
          </div>
          <button
            className="button  adminform__addbtn"
            onClick={() => addCourseHandler(1)}
          >
            Add
          </button>
          <button
            className="button adminform__cancelbtn"
            onClick={() => addCourseHandler(1)}
          >
            Cancel
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default CourseForm;
