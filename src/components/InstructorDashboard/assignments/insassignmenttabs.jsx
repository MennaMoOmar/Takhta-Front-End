import React from "react";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const InsAssignmentsTabs = () => {
  return (
    <React.Fragment>
        
      <div className="insassignmenttabs">
        <ButtonGroup className="insassignmenttabs__btngroup" aria-label="outlined primary button group">
          <Button className="insassignmenttabs__btn">Pending</Button>
          <Button className="insassignmenttabs__btn">Accepted</Button>
          <Button className="insassignmenttabs__btn">Rejected</Button>
        </ButtonGroup>
      </div>
    </React.Fragment>
  );
};

export default InsAssignmentsTabs;
