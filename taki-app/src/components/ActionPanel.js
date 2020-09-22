import React from 'react';
import { Switch, Route } from "react-router-dom";
import Add from '../icons/add.svg';
import Trash from '../icons/trash.svg';
import Save from '../icons/save.svg';
import Reset from '../icons/reset.svg';
import Pause from '../icons/pause.svg';
import Play from '../icons/play.svg';
// USE REQUIRE() IN ORDER FOR WEBPACK TO PROCESS INTERNAL FILES

function ActionPanel() {
    return (
        <div className="action-panel">
            <Switch>
                <Route path="/checklist">
                    <button><abbr title="Add"><img src={Add} alt="Add" /></abbr></button>
                </Route>
            </Switch>
            <Switch>
                <Route path="/notepad">
                    <button><img src={Save} /></button>
                    <button><img src={Trash} /></button>
                </Route>
            </Switch>
        </div>
    )
}

export default ActionPanel;