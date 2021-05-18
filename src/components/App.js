import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "../Sass/main.scss"

import Home from "./Home/home"
import Login  from "./login"
import HeroSection  from "./Home/herosection"
import Services  from "./Home/services"
import StdDashboard from "./StudentDashboard/stddashboard"
import StdDashboardCourses from "./StudentDashboard/stddashboardcourses"
import NotFound from "./notfound"
import Totop from "./totop"

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