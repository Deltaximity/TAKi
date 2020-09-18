import React from 'react';
import { Link } from "react-router-dom";

function NavMenu() {
  return (
    <div className="nav-menu">
      <div className="container">
        <div id="logo">logo</div>
      </div>
      <div className="links">
          <ul>
            <li><Link to="/">Overview</Link></li>
            <li><Link to="/checklist">Checklist</Link></li>
            <li><Link to="/countdown">Countdown Timer</Link></li>
            <li><Link to="/focus">Focus Timer</Link></li>
            <li><Link to="/stopwatch">Stopwatch</Link></li>
            <li><Link to="/notepad">Notepad</Link></li>
          </ul>
      </div>
    </div>
  );
}

export default NavMenu;
