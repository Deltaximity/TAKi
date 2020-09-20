import React from 'react';
import { Switch, Route } from "react-router-dom";
import Overview from '../Tabs/Overview';
import Checklist from '../Tabs/Checklist';
import Countdown from '../Tabs/Countdown';
import Focus from '../Tabs/Focus';
import Stopwatch from '../Tabs/Stopwatch';
import Notepad from '../Tabs/Notepad';

function Main() {
    return (
        <div id="main">
            <Switch><Route exact path="/"><Overview/></Route></Switch>
            <Switch><Route path="/checklist"><Checklist/></Route></Switch>
            <Switch><Route path="/countdown"><Countdown/></Route></Switch>
            <Switch><Route path="/focus"><Focus/></Route></Switch>
            <Switch><Route path="/stopwatch"><Stopwatch/></Route></Switch>
            <Switch><Route path="/notepad"><Notepad/></Route></Switch>
        </div>
    )
}

export default Main;