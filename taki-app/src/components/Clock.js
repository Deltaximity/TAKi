import React from 'react';

const time = new Date().toLocaleTimeString();

// setInterval(() => this.time(), 1000)
// https://stackoverflow.com/questions/43827846/displaying-the-gethours-and-getminutes-in-double-digits-using-reactjs

function Clock() {
    return (
        <p id="clock">{time}</p>
    )
}

export default Clock;