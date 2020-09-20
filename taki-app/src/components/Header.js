import React from 'react';
import { Switch, Route } from "react-router-dom";
import {useSpring, animated, config} from 'react-spring';
import Clock from './Clock';

function Header() {
    // const fadeIn = useSpring({opacity: 1, from: {opacity: 0}});
    const slideIn = useSpring({from: {opacity: 0, height: 140}, to: {opacity: 1, height: 60}});
    return (
        <header>
            <Switch><Route exact path="/"><animated.div style={slideIn}><h1>Welcome Back.</h1></animated.div></Route></Switch>
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