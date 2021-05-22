import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Router } from "react-router";
// import { createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import thunk from "redux-thunk";

// import reducers from "./reducers";
import App from "./components/App";
import history from "./components/history";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../node_modules/@fortawesome/fontawesome-free/js/all.js";

// const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <BrowserRouter>
    <Router history={history}>
      <App />
    </Router>
  </BrowserRouter>,
  document.querySelector("#root")
);
