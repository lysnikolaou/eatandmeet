import React, { Component } from "react";
// import { HashRouter as Router, Route, Switch } from "react-router";
// import "../node_modules/jquery/dist/jquery.min.js";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
// import NavBar from "./components/layout/NavBar";
// import Dashboard from "./components/layout/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Eat&Meet</h1>
        {/* <Router>
          <NavBar />
          <Dashboard />
        </Router> */}
      </div>
    );
  }
}

export default App;
