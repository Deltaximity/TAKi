import React from 'react';
import { Link } from "react-router-dom";
import variables from '../sass/base/_variables.scss';
// import { useSpring, animated } from 'react-spring';

function NavMenu() {
  const linkColor = {color: variables.colorlink}
  const noDecoration = {textDecoration: 'none'}

  return (
    <nav>
      <div className="container">
        <div id="logo">LOGO</div>
      </div>
      <div className="links">
          <ul>
            <Link style={noDecoration} to="/"><li style={linkColor}>Overview</li></Link>
            <Link style={noDecoration} to="/checklist"><li style={linkColor}>Checklist</li></Link>
            <Link style={noDecoration} to="/countdown"><li style={linkColor}>Countdown Timer</li></Link>
            <Link style={noDecoration} to="/focus"><li style={linkColor}>Focus Timer</li></Link>
            <Link style={noDecoration} to="/stopwatch"><li style={linkColor}>Stopwatch</li></Link>
            <Link style={noDecoration} to="/notepad"><li style={linkColor}>Notepad</li></Link>
          </ul>
      </div>
      <div className="control-center">
        <label type="text">Dark Mode</label>
        <label className="switch">
          <input type="checkbox"/>
          <span className="slider"></span>
        </label>
      </div>
    </nav>
  );
}

export default NavMenu;
