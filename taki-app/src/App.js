import React from 'react';
import NavMenu from './components/NavMenu';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
    <Router>
      <NavMenu />
      <Header />
      <Switch>
        {/* use "exact" to make the main path valid */}
        <Route exact path="/"></Route> 
        <Route path="/checklist"></Route>
        <Route path="/countdown"></Route>
        <Route path="/focus"></Route>
        <Route path="/stopwatch"></Route>
        <Route path="/notepad"></Route>
      </Switch>
    </Router>
  );
}

export default App;
