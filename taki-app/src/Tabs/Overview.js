import React from 'react';
import Header from '../components/Header';

function Overview() {
    return (
        <>
            <div className="card checklist">
                <p className="corner-label">Checklist</p>
            </div>
            <div className="card things-done">
                <p className="card-label">Things Done</p>
            </div>
            <div className="card focus-sessions">
                <p className="card-label">Focus Sessions</p>
            </div>
            <div className="card activity-log">
                <p className="corner-label">Activity Log</p>
            </div>
        </>
    )
}

export default Overview;