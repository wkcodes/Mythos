import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Profile from './pages/Profile';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import World from './pages/World'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/world" component={World} />
      </div>
    </Router>
  );
}

export default App;
