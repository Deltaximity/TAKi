import React from 'react';
import { Link } from "react-router-dom";

function NavMenu() {
  return (
    <nav>
      <div className="container">
        <div id="logo">LOGO</div>
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
    </nav>
  );
}

export default NavMenu;
