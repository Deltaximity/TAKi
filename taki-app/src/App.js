import React from 'react';
import NavMenu from './components/NavMenu';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
      <NavMenu />
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/checklist"></Route>
        <Route path="/countdown"></Route>
        <Route path="/focus"></Route>
        <Route path="/stopwatch"></Route>
        <Route path="/notepad"></Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
