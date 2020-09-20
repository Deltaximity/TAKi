import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavMenu from './components/NavMenu';
import Header from './components/Header';
import ActionPanel from './components/ActionPanel';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Switch>
          {/* use "exact" to make the main path valid '/' */}
          <Route exact path="/"></Route> 
          <Route path="/checklist"></Route>
          <Route path="/countdown"></Route>
          <Route path="/focus"></Route>
          <Route path="/stopwatch"></Route>
          <Route path="/notepad"></Route>
        </Switch>
        <Header />
        <ActionPanel />
        <Main />
      </Router>
      <Footer />
    </>
  );
}

export default App;
