import React from "react";

const CreateAssignmentForm = () => {
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
            <span className="lectures__title">Link: </span>
            <input
              type="text"
              placeholder="enter drive link"
              className="lectures__input"
            />
          </div>
          <div className="lectures__div">
            <span className="lectures__title">Description: </span>
            <textarea className="lectures__input" placeholder="enter brief for assignment" cols="25" rows="2"></textarea>
          </div>
          <button className="button  lectures__addbtn">Add</button>
          <button className="button lectures__cancelbtn">Cancel</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default CreateAssignmentForm;
