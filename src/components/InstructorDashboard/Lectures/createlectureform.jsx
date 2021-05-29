import React from "react";

const CreateLectureForm = () => {
  return (
    <React.Fragment>
      <div className="lectures">
        <form action="">
          <div className="lectures__div">
            <span className="lectures__title">Title: </span>
            <input
              type="text"
              placeholder="enter title"
              className="lectures__input"
            />
          </div>
          <div className="lectures__div">
            <span className="lectures__title">Zoom Link: </span>
            <input
              type="text"
              placeholder="enter zoom link"
              className="lectures__input"
            />
          </div>
          <button className='button  lectures__addbtn'>Add</button>
          <button className='button lectures__cancelbtn'>Cancel</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default CreateLectureForm;
