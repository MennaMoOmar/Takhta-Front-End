import React from "react";
import { useHistory } from "react-router";

import StdNavBar from "../../Shared/stdnavbar";
import AdminScSideNav from "../adminscsidenav";
import AdminScParentHeader from "./adminsscparentheader";
import ParentTable from "./parentsstable";

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

const AdminScDashboardParents = () => {
  const classes = useStyles();

  /* history */
  const history = useHistory();
  //   addLectureHandler
  const addParentHandler = (id) => {
    history.push(`/adminscdashboardparent/create`);
  };

  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#F6FCFB" }}>
        <StdNavBar></StdNavBar>
        <div className="container-fluid dashboard">
          <div className="row dashboard__row">
            <div className="col-lg-2 dashboard__sidenav">
              <AdminScSideNav></AdminScSideNav>
            </div>
            <div className="col-lg-9 dashboard__content">
              <AdminScParentHeader></AdminScParentHeader>
              <ParentTable></ParentTable>
              <div className={classes.root}>
                <Fab
                  className="lectures__add"
                  aria-label="add"
                  onClick={() => addParentHandler(1)}
                >
                  <AddIcon />
                </Fab>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminScDashboardParents;
