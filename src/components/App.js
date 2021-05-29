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
import StdDashboardCourses from "./StudentDashboard/Courses/stddashboardcourses"
import StdDashboardAssignments from "./StudentDashboard/assignments/stddashboardassignments";
import StdDashboardLectures from "./StudentDashboard/Lectures/stddashboardlectures";
import StdLecturesTab from "./StudentDashboard/Lectures/stdlecturestab";
import StdRecordingTab from "./StudentDashboard/Lectures/stdrecordingtab";
import StdAssignmentsTab from "./StudentDashboard/Lectures/stdassignmentstab";
import StdFilesTab from "./StudentDashboard/Lectures/stdfilestab";
import StdDashboardGrades from "./StudentDashboard/Grades/stddashboardgrades";
import StdDashboardSchedule from "./StudentDashboard/Schedule/stddashboardschedule";
// instructor
import InsDashboard from "./InstructorDashboard/insdashboard";

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
            <Route path="/stddashboardcourses" component={StdDashboardCourses} />
            <Route path="/stddashboardassignments" component={StdDashboardAssignments} />
            <Route path="/stddashboardgrades" component={StdDashboardGrades} />
            <Route path="/stddashboardschedule" component={StdDashboardSchedule} />
            <Route path="/stddashboardlectures/:id/lectures" component={StdLecturesTab} />
            <Route path="/stddashboardlectures/:id/recording" component={StdRecordingTab} />
            <Route path="/stddashboardlectures/:id/assignments" component={StdAssignmentsTab} />
            <Route path="/stddashboardlectures/:id/files" component={StdFilesTab} />
            {/* instructot */}
            <Route path="/insdashboard" component={InsDashboard} />
            {/* home */}
            <Route path="/notfound" component={NotFound} />
            <Route path="/home" component={Home} />
            <Redirect from="/" exact to="/home" />
            <Route path="/stddashboardlectures/:id" component={StdDashboardLectures} />
            <Redirect from="/stddashboardlectures/:id" exact to="/stddashboardlectures/:id" />
            <Redirect to="/notfound" />
        </Switch>
      </main>
    <Totop></Totop>
    </>
  );
};

export default App;