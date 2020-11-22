import React from 'react';

function Countdown() {
    let daysUntil = 15;

    let countdownDates = [{
        title: "New Year",
        days: 20,
        hours: 12,
        minutes: 54,
        seconds: 32
    }, {
        title: "Birthday",
        days: 15,
        hours: 5,
        minutes: 34,
        seconds: 18
    }];
    
    const countdownJsx = countdownDates.map((item, index) => {
        
        return (
            <div key={index} className="card">
                <div>
                    <h2>{countdownDates.days}</h2>
                    <p>Days</p>
                </div>
                <p>Until {countdownDates.title}</p>
            </div>
        )
    });

    for (const property in countdownDates) {
        console.log(property);
    }

    return (
        <div className="countdown-cards">
            {/* <div className="card">
                <div>
                    <h2>{daysUntil}</h2>
                    <p>Days</p>
                </div>
                <p>Until New Year</p>
            </div> */}
            {countdownJsx}
            {/* <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div> */}
        </div>
    )
}

export default Countdown;