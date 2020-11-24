import React, { useState } from 'react';
import useLocalStorage from '../useLocalStorage';
import { useCopyToClipboard, useClearNote } from '../customHooks';

function Notepad() {
    const [note, setNote] = useLocalStorage('note', () => '');

    return (
        <div className="card notepad">
            <textarea className="note" type="text" placeholder="Type something..."
                value={note} onChange={e => setNote(e.target.value)}
            />
        </div>
    )
}

export default Notepad;