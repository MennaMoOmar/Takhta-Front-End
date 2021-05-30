import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "../Sass/main.scss"

// home
import Home from "./Home/home"
import Login  from "./login"
import HeroSection  from "./Home/herosection"
import Services  from "./Home/services"
import StdDashboard from "./StudentDashboard/stddashboard"
import NotFound from "./notfound"
import Totop from "./totop"

// student
import StdDashboardAssignments from "./StudentDashboard/assignments/stddashboardassignments";
import StdLecturesTab from "./Shared/Lectures/lecturestab";
import StdRecordingTab from "./Shared/Lectures/recordingtab";
import StdAssignmentsTab from "./Shared/Lectures/assignmentstab";
import StdFilesTab from "./Shared/Lectures/filestab";
import StdDashboardGrades from "./StudentDashboard/Grades/stddashboardgrades";
import StdDashboardSchedule from "./StudentDashboard/Schedule/stddashboardschedule";

// instructor
import InsDashboard from "./InstructorDashboard/insdashboard";
import InsDashboardAssignmentsList from "./InstructorDashboard/assignments/insdashboardassignmentslist";
import InsDashboardAssignments from "./InstructorDashboard/assignments/insdashboardassignments";
import InsAssignmentPending from "./InstructorDashboard/assignments/insassignmentpending";
import InsAssignmentAccepted from "./InstructorDashboard/assignments/insassignmentaccepted";
import InsAssignmentRejected from "./InstructorDashboard/assignments/insassignmentrejected";
import InsdashDoardStudents from "./InstructorDashboard/Students/insdashboardstudents";

// parent
import PrtDashboard from "./ParentDashboard/prtdashboard";


// st-ins
import DashboardCourses from "./Shared/Course/dashboardcourses"
import DashboardLectures from "./Shared/Lectures/dashboardlectures";

const App = () => {
  return (
    <>
      <main>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/herosection" component={HeroSection} />
            <Route path="/services" component={Services} />
            {/* student */}
            <Route path="/stddashboard" component={StdDashboard} />
            {/* <Route path="/stddashboardassignments" component={StdDashboardAssignments} /> */}
            <Route path="/stddashboardgrades" component={StdDashboardGrades} />
            <Route path="/stddashboardschedule" component={StdDashboardSchedule} />
            <Route path="/dashboardlectures/:id/lectures" component={StdLecturesTab} />
            <Route path="/dashboardlectures/:id/recording" component={StdRecordingTab} />
            <Route path="/dashboardlectures/:id/assignments" component={StdAssignmentsTab} />
            <Route path="/dashboardlectures/:id/files" component={StdFilesTab} />

            {/* instructot */}
            <Route path="/insdashboard" component={InsDashboard} />
            <Route path="/insdashboardassignments/:id/pending" component={InsAssignmentPending} />
            <Route path="/insdashboardassignments/:id/accepted" component={InsAssignmentAccepted} />
            <Route path="/insdashboardassignments/:id/rejected" component={InsAssignmentRejected} />

            {/* parent */}
            <Route path="/prtdashboard" component={PrtDashboard} />


            {/* ins-std */}
            <Route path="/dashboardcourses" component={DashboardCourses} />

            {/* home */}
            <Route path="/notfound" component={NotFound} />
            <Route path="/home" component={Home} />
            <Redirect from="/" exact to="/home" />
            <Route path="/dashboardlectures/:id" component={DashboardLectures} />
            <Redirect from="/stddashboardlectures/:id" exact to="/stddashboardlectures/:id" />
            <Route path="/stddashboardassignments/:id" component={StdDashboardAssignments} />
            <Redirect from="/stddashboardassignments/:id" exact to="/stddashboardassignments/:id" />
            <Route path="/insdashboardassignments/:id" component={InsDashboardAssignments} />
            <Redirect from="/insdashboardassignments/:id" exact to="/insdashboardassignments/:id" />
            <Route path="/insdashboardassignmentslist/:id" component={InsDashboardAssignmentsList} />
            <Redirect from="/insdashboardassignmentslist/:id" exact to="/insdashboardassignmentslist/:id" />
            <Route path="/insdashboardstudents/:id" component={InsdashDoardStudents} />
            <Redirect from="/insdashboardstudents/:id" exact to="/insdashboardstudents/:id" />
            <Redirect to="/notfound" />
        </Switch>
      </main>
    <Totop></Totop>
    </>
  );
};

export default App;