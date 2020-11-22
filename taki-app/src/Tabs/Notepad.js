import React, { useState } from 'react';
// import ActionPanel from '../components/ActionPanel';
import { useInputValue } from '../customHooks';

function Notepad() {
    const [writtenText, setWrittenText] = useState('');

    return (
        <div className="card notepad">
            <textarea className="note" type="text" placeholder="Type something..."
                value={writtenText} onChange={e => setWrittenText(e.target.value)}
            />
        </div>
    )
}

export default Notepad;