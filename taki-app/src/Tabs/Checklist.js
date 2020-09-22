import React from 'react';

function Checklist() {
    return (
        <>
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