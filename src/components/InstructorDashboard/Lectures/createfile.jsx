import React, { useState } from "react";

import CreateFileForm from "./createfileform";

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

const CreateFiles = () => {
  const classes = useStyles();

  const [show, setShow] = useState(false);

  //   addLectureHandler
  const addLectureHandler = () => {
    setShow(true);
  };

  return (
    <React.Fragment>
      {show && <CreateFileForm></CreateFileForm>}
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

export default CreateFiles;
