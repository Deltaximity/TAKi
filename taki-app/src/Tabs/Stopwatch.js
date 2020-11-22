import React from 'react';
import ReactDOM from 'react-dom';
import { ActionPanel } from '../components/ActionPanel';
import { useStopwatch } from '../customHooks';

function Stopwatch() {
    const {isRunning, elapsedTime, startTimer, stopTimer, resetTimer} = useStopwatch();

    const handleStartStop = () => {
        isRunning ? stopTimer() : startTimer();
    };

    function onKeyPressed(e) {
        if (e.keyCode === 32) {
            handleStartStop();
        }
    }

    return (
        // tabIndex is used to make an element focusable (tabbable)
        <div className="card stopwatch" onKeyDown={onKeyPressed} tabIndex="0">
            {/* Keyboard events: onKeyDown, onKeyPress, onKeyUp */}
            <p className="guides">Press Space to Pause/Play</p>
            <div>{elapsedTime}s</div>
            <button disabled={elapsedTime === "0.0"} onClick={resetTimer}>Reset</button>
            <button onClick={handleStartStop}>
                {isRunning ? "Pause" : "Start"}
            </button>
        </div>
    )
}

export default Stopwatch;