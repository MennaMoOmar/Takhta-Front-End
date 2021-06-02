import React from "react";
import { useHistory } from "react-router";

const StudentForm = () => {
  /* history */
  const history = useHistory();
  //   addLectureHandler
  const addStudentHandler = (id) => {
    history.push(`/adminscdashboardstudent`);
  };

  return (
    <React.Fragment>
      <div className="adminform">
        <h3 className="adminform__header">Add Student</h3>
        <form action="">
          <div className="form-group">
            <label for="techname" className="adminform__label">
              Name
            </label>
            <input
              type="text"
              id="techname"
              className="adminform__input"
              placeholder="enter teacher name"
            />
          </div>
          <div className="form-group">
            <label for="techphone" className="adminform__label">
              Phone
            </label>
            <input
              type="text"
              id="techphone"
              className="adminform__input"
              placeholder="enter teacher phone"
            />
          </div>
          <div className="form-group">
            <label for="techaddress" className="adminform__label">
              Address
            </label>
            <input
              type="text"
              id="techaddress"
              className="adminform__input"
              placeholder="enter teacher address"
            />
          </div>
          <div className="form-group">
            <label for="techemail" className="adminform__label">
              Email
            </label>
            <input
              type="email"
              id="techemail"
              className="adminform__input"
              placeholder="enter teacher email"
            />
          </div>
          <div className="form-group">
            <label for="techpassword" className="adminform__label">
              Password
            </label>
            <input
              type="password"
              id="techpassword"
              className="adminform__input"
              placeholder="enter teacher password"
            />
          </div>
          <div className="form-group">
            <label for="techcrmpassword" className="adminform__label">
              Confirm Password
            </label>
            <input
              type="password"
              id="techcrmpassword"
              className="adminform__input"
              placeholder="confirm passowrd"
            />
          </div>
          <div className="form-group">
            <label for="techcourses" className="adminform__label">
              Grade
            </label>
            <select
              class="form-control"
              id="techcourses"
              className="adminform__input"
            >
              <option>Grade 1</option>
              <option>Grade 2</option>
              <option>Grade 3</option>
            </select>
          </div>
          <div className="form-group">
            <label for="techcourses" className="adminform__label">
              Courses
            </label>
            y5tar l courses mn select 3la 7sb l grade
          </div>
          <button
            className="button  adminform__addbtn"
            onClick={() => addStudentHandler(1)}
          >
            Add
          </button>
          <button
            className="button adminform__cancelbtn"
            onClick={() => addStudentHandler(1)}
          >
            Cancel
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default StudentForm;
