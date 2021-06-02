import React from "react";
import { useHistory } from "react-router";

import StdNavBar from "../../Shared/stdnavbar";
import AdminScSideNav from "../adminsidenav";
import AdminHeaderSchool from "./adminheaderschool";
import School from "./school";

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

const AdminDashboardSchool = () => {
  const classes = useStyles();

  /* history */
  const history = useHistory();
  //   addLectureHandler
  const addSchoolHandler = (id) => {
    history.push("/admindashboardschool/create");
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
              <AdminHeaderSchool></AdminHeaderSchool>
              <School></School>
              <School></School>

            <div className={classes.root}>
              <Fab
                className="lectures__add"
                aria-label="add"
                onClick={addSchoolHandler}
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

export default AdminDashboardSchool;
