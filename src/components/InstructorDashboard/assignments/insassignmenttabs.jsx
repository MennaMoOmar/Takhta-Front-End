import React from "react";
import { NavLink } from "react-router-dom";

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
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className="dashboardcontent">
        <div className={classes.root}>
          <ButtonGroup
            className="insassignmenttabs__btngroup"
            aria-label="outlined primary button group"
          >
            <Button className="insassignmenttabs__btn">
              <NavLink
                className="insassignmenttabs__btn__link"
                to={`/insdashboardassignments/${1}/pending`}
              >
                Pending
              </NavLink>
            </Button>
            <Button className="insassignmenttabs__btn">
              <NavLink
                className="insassignmenttabs__btn__link"
                to={`/insdashboardassignments/${1}/accepted`}
              >
                Accepted
              </NavLink>
            </Button>
            <Button className="insassignmenttabs__btn">
              <NavLink
                className="insassignmenttabs__btn__link"
                to={`/insdashboardassignments/${1}/rejected`}
              >
                Rejected
              </NavLink>
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </React.Fragment>
  );
};

export default InsAssignmentsTabs;
