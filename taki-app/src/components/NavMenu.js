import React from 'react';
import { Link } from "react-router-dom";
import { useSpring, animated } from 'react-spring';

function NavMenu() {
  return (
    <nav>
      <div className="container">
        <div id="logo">LOGO</div>
      </div>
      <div className="links">
          <ul>
            <Link style={{textDecoration: 'none'}} to="/"><li>Overview</li></Link>
            <Link style={{textDecoration: 'none'}} to="/checklist"><li>Checklist</li></Link>
            <Link style={{textDecoration: 'none'}} to="/countdown"><li>Countdown Timer</li></Link>
            <Link style={{textDecoration: 'none'}} to="/focus"><li>Focus Timer</li></Link>
            <Link style={{textDecoration: 'none'}} to="/stopwatch"><li>Stopwatch</li></Link>
            <Link style={{textDecoration: 'none'}} to="/notepad"><li>Notepad</li></Link>
          </ul>
      </div>
    </nav>
  );
}

export default NavMenu;
