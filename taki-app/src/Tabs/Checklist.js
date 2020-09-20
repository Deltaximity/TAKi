import React from 'react';

function Checklist() {
    return (
        <>
            <div className="card checklist">
                <p className="corner-label">Checklist</p>
            </div>
            <div className="card done-list">
                <p className="corner-label">Things Done</p>
            </div>
        </>
    )
}

export default Checklist;