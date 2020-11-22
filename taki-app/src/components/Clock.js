import React, { useState, useEffect } from 'react';

function Clock() {
    const [minutes , setMinutes] = useState(0);
    let time = new Date().toLocaleTimeString([], {timeStyle: 'short'});

    useEffect(() => {
        const time = setInterval(() => {
            setMinutes(minutes + 1);
        }, 1000);
        return () => clearInterval(time);
    })

    return (
        <p id="clock">{time}</p>
    )
}

export default Clock;