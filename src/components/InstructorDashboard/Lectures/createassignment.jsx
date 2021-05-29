import React, { useState } from "react";

import CreateAssignmentForm from "./createassignmentform";

// add btn
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const CreateAssignment = () => {
  const classes = useStyles();

  const [show, setShow] = useState(false);

  //   addLectureHandler
  const addLectureHandler = () => {
    setShow(true);
  };

  return (
    <React.Fragment>
      {show && <CreateAssignmentForm></CreateAssignmentForm>}
      <div className={classes.root}>
        <Fab
          className="lectures__add"
          aria-label="add"
          onClick={addLectureHandler}
        >
          <AddIcon />
        </Fab>
      </div>
    </React.Fragment>
  );
};

export default CreateAssignment;
