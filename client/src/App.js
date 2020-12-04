import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Switch from "react-bootstrap/esm/Switch";
import World from "./pages/World";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/world" component={World} />
      </Switch>
    </Router>
  );
}

export default App;
