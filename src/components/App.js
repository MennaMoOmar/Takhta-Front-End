import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "../Sass/main.scss"

import Home from "./Home/home"
import StdDashboard from "./StudentDashboard/stddashboard"
import NotFound from "./notfound"
import Totop from "./totop"

const App = () => {
  return (
    <>
      <main>
        <Switch>
            <Route path="/stddashboard" component={StdDashboard} />
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
