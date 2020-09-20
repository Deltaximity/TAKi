import React from 'react';
import { Switch, Route } from "react-router-dom";
import Clock from './Clock';

function Header() {
    return (
        <header>
            <Switch><Route exact path="/"><h1>Welcome Back.</h1></Route></Switch>
            <Switch><Route path="/checklist"><h1>Checklist.</h1></Route></Switch>
            <Switch><Route path="/countdown"><h1>Countdown Timer.</h1></Route></Switch>
            <Switch><Route path="/Focus"><h1>Focus Timer.</h1></Route></Switch>
            <Switch><Route path="/stopwatch"><h1>Stopwatch.</h1></Route></Switch>
            <Switch><Route path="/notepad"><h1>Notepad.</h1></Route></Switch>
            <Clock />
        </header>
    )
}

export default Header;