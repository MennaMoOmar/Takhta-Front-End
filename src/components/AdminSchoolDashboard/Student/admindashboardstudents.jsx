import React from "react";
import { useHistory } from "react-router";


import StdNavBar from "../../Shared/stdnavbar";
import AdminScSideNav from "../adminscsidenav";
import AdminScStudentHeader from "./adminsscstudentheader";
import StudentTable from "./studentstable";

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

const AdminScDashboardStudents = () => {
  const classes = useStyles();

    /* history */
    const history = useHistory();
    //   addLectureHandler
    const addStudentHandler = (id) => {
      history.push(`/adminscdashboardstudent/create`);
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
              <AdminScStudentHeader></AdminScStudentHeader>
                <StudentTable></StudentTable>
                <div className={classes.root}>
                  <Fab
                    className="lectures__add"
                    aria-label="add"
                    onClick={() => addStudentHandler(1)}
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

export default AdminScDashboardStudents;
