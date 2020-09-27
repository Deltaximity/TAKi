import React from 'react';
import { useState } from 'react';
// import ActionPanel from '../components/ActionPanel';

function Notepad() {
    return (
        <div className="card notepad">
            <textarea className="note" type="text" placeholder="Type something..."></textarea>
        </div>
    )
}

export default Notepad;