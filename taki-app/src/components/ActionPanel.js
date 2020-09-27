import React from 'react';
import { Switch, Route } from "react-router-dom";
import { useRef, useState } from 'react';
// import Notepad from '../Tabs/Notepad';
// import AddToDo from './Modals/AddItem';

const Add = require('../icons/add.svg');
const Trash = require('../icons/trash.svg');
const Save = require('../icons/save.svg');
const Reset = require('../icons/reset.svg');
const Play = require('../icons/play.svg');
const Pause = require('../icons/pause.svg');
// USE REQUIRE() IN ORDER FOR WEBPACK TO PROCESS INTERNAL FILES

function ActionPanel() {
    // const Note = document.querySelector('.note');
    // function showValue() {
    //     console.log(Note);
    // }

    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);

    function copyToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess('Copied!');
    };
    
    return (
        <div className="action-panel">
            <Switch>
                <Route path="/checklist">
                    <button><img src={Add} alt="Add" /></button>
                </Route>
            </Switch>
            <Switch>
                <Route path="/countdown">
                    <button><img src={Add} alt="Add" /></button>
                </Route>
            </Switch>
            <Switch>
                <Route path="/focus">
                    <button><img src={Reset} alt="Reset" /></button>
                </Route>
            </Switch>
            <Switch>
                <Route path="/stopwatch">
                    <button><img src={Reset} alt="Reset" /></button>
                    <button><img src={Play} alt="Play" /></button>
                    <button><img src={Pause} alt="Pause" /></button>
                </Route>
            </Switch>
            <Switch>
                <Route path="/notepad">
                    <button><img src={Save} alt="Save" onClick={copyToClipboard} /></button>
                    {copySuccess}

                    <textarea ref={textAreaRef} />
                    <button><img src={Trash} alt="Trash" /></button>
                </Route>
            </Switch>
        </div>
    )
}

export default ActionPanel;