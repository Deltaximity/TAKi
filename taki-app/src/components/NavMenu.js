import React from 'react';
import { Link } from "react-router-dom";
import variables from '../sass/base/_variables.scss';
// import { useSpring, animated } from 'react-spring';

function NavMenu() {
  return (
    <nav>
      <div className="container">
        <div id="logo" style={{backgroundColor: variables.colorsecondary}}>LOGO</div>
      </div>
      <div className="links">
          <ul>
            <Link style={{textDecoration: 'none'}} to="/"><li style={{color: variables.colorlight}}>Overview</li></Link>
            <Link style={{textDecoration: 'none'}} to="/checklist"><li style={{color: variables.colorlight}}>Checklist</li></Link>
            <Link style={{textDecoration: 'none'}} to="/countdown"><li style={{color: variables.colorlight}}>Countdown Timer</li></Link>
            <Link style={{textDecoration: 'none'}} to="/focus"><li style={{color: variables.colorlight}}>Focus Timer</li></Link>
            <Link style={{textDecoration: 'none'}} to="/stopwatch"><li style={{color: variables.colorlight}}>Stopwatch</li></Link>
            <Link style={{textDecoration: 'none'}} to="/notepad"><li style={{color: variables.colorlight}}>Notepad</li></Link>
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
