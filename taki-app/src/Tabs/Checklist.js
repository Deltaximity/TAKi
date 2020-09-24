import React from 'react';
import AddToDo from '../components/Modals/AddItem';

function Checklist() {
    return (
        <>
        <AddToDo />
            <div className="card checklist">
                <p className="corner-label">To-Do</p>
            </div>
            <div className="card done-list">
                <p className="corner-label">Done</p>
            </div>
        </>
    )
}

export default Checklist;