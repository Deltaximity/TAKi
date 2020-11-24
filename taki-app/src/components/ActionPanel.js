import React, { useRef, useState } from 'react';
import { Switch, Route } from "react-router-dom";

import Modal from './Modals/Modal';

// import Notepad from '../Tabs/Notepad';
// import AddToDo from './Modals/Modal';

import Add from '../icons/add.svg';
import Trash from '../icons/trash.svg';
import Save from '../icons/save.svg';
import Reset from '../icons/reset.svg';
import Play from '../icons/play.svg';
import Pause from '../icons/pause.svg';
import Copy from '../icons/copy.svg';
import Cross from '../icons/cross.svg';

function ActionPanel(props) {
    // const Note = document.querySelector('.note');
    // function showValue() {
    //     console.log(Note);
    // }

    // Modal State
    const [isOpen, setIsOpen] = useState(false);
    // const node = useRef();

    // const handleClick = e => {
    //     if (node.current.contains(e.target))
    //         return;

    //     setIsOpen(false);
    // }

    // useEffect(() => {
    //     document.addEventListener("click", handleClick);
    //     return () => {
    //         document.removeEventListener("click", handleClick);
    //     };
    // }, []);

    // Todo State
    const [todoInput, setTodoInput] = useState('');

    const handleInputChange = e => {
        setTodoInput(e.target.value);
    }

    const handleTaskSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: todoInput
        });

        setTodoInput('');
        setIsOpen(false);
    };

    const handleTaskDiscard = e => {
        e.preventDefault();
        setTodoInput('');
        setIsOpen(false);
    }

    // Notepad States
    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);

    function copyToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess('Copied!');
    };

    function clearText(e) {
        textAreaRef.current.select();
        document.execCommand('delete');
        e.target.focus();
        setCopySuccess('Deleted!');
    }

    return (
        <div className="action-panel">
            <Switch>
                <Route path="/checklist">
                    <button className="tooltip"><img src={Add} alt="Add item" onClick={() => setIsOpen(true)}/><span className="tooltip-text">Add New Task</span></button>
                    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                        <form onSubmit={handleTaskSubmit}>
                            <p>Add new task:</p>
                            <input className="todo-input" type="text" value={todoInput} onChange={handleInputChange} autoFocus />
                            <button className="add-item" type="submit">Add item</button>
                            <button className="cancel" onClick={handleTaskDiscard}>Cancel</button>
                        </form>
                    </Modal>
                </Route>
            </Switch>
            <Switch>
                <Route path="/countdown">
                    <button className="tooltip"><img src={Add} alt="Add" onClick={() => setIsOpen(true)}/><span className="tooltip-text">Add New Date</span></button>
                    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                        <button className="close-modal" onClick={() => setIsOpen(false)}><img src={Cross} alt="Close modal"/></button>
                        some shit
                    </Modal>
                </Route>
            </Switch>
            <Switch>
                <Route path="/focus">
                    <button className="tooltip"><img src={Reset} alt="Reset" /><span className="tooltip-text">Reset Session</span></button>
                </Route>
            </Switch>
            <Switch>
                <Route path="/stopwatch">
                    <button className="tooltip"><img src={Reset} alt="Reset" /><span className="tooltip-text">Reset Timer</span></button>
                    <button className="tooltip"><img src={Play} alt="Play" /><span className="tooltip-text">Start Timer</span></button>
                    <button className="tooltip"><img src={Pause} alt="Pause" /><span className="tooltip-text">Pause Timer</span></button>
                </Route>
            </Switch>
            <Switch>
                <Route path="/notepad">
                    <button className="tooltip"><img src={Save} alt="Download text file" /><span className="tooltip-text">Download .txt File</span></button>
                    <button className="tooltip"><img src={Copy} alt="Copy to clipboard" onClick={copyToClipboard} /><span className="tooltip-text">Copy to Clipboard</span></button>
                    {copySuccess}

                    <textarea ref={textAreaRef} />
                    <button className="tooltip"><img src={Trash} alt="Clear text" onClick={clearText} /><span className="tooltip-text">Delete Note</span></button>
                </Route>
            </Switch>
        </div>
    )
}

export default ActionPanel;