import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "../Sass/main.scss"

import Home from "./Home/home"
import Login  from "./login"
import HeroSection  from "./Home/herosection"
import Services  from "./Home/services"
import StdDashboard from "./StudentDashboard/stddashboard"
import NotFound from "./notfound"
import Totop from "./totop"
import StdDashboardCourses from "./StudentDashboard/Courses/stddashboardcourses"
import StdDashboardAssignments from "./StudentDashboard/assignments/stddashboardassignments";
import StdDashboardLectures from "./StudentDashboard/Lectures/stddashboardlectures";

const App = () => {
  return (
    <>
      <main>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/herosection" component={HeroSection} />
            <Route path="/services" component={Services} />
            <Route path="/stddashboard" component={StdDashboard} />
            <Route path="/stddashboardcourses" component={StdDashboardCourses} />
            <Route path="/stddashboardassignments" component={StdDashboardAssignments} />
            <Route path="/stddashboardlectures/:id" component={StdDashboardLectures} />
            <Route path="/notfound" component={NotFound} />
            <Route path="/home" component={Home} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/notfound" />
        </Switch>
      </main>
    <Totop></Totop>
    </>
  );
};

export default App;