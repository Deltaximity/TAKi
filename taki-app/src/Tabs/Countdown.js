import React from 'react';

function Countdown() {
    let daysUntil = 15;
    return (
        <div className="countdown-cards">
            <div className="card">
                <div>
                    <h2>{daysUntil}</h2>
                    <p>Days</p>
                </div>
                <p>Until New Year</p>
            </div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
        </div>
    )
}

export default Countdown;