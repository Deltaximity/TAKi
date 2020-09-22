import React from 'react';
import {useSpring, animated } from 'react-spring';
import Header from '../components/Header';


function Overview() {
    // make these variables interchangable
    let thingsDone = 72;
    let focusSessions = 14;

    const slideIn = useSpring({from: {opacity: 0, height: 140}, to: {opacity: 1, height: 60}});
    
    return (
        <>
            <div className="card checklist">
                <p className="corner-label">Checklist</p>
            </div>
            <div className="card things-done">
                <p className="card-label">Things Done</p>
                <h2><animated.span>{useSpring({from: {number: 0}, to: {number: thingsDone}}).number.interpolate(number => Math.floor(number))}</animated.span></h2>
            </div>
            <div className="card focus-sessions">
                <p className="card-label">Focus Sessions</p>
                <h2><animated.span>{useSpring({from: {number: 0}, to: {number: focusSessions}}).number.interpolate(number => Math.floor(number))}</animated.span></h2>
            </div>
            <div className="card activity-log">
                <p className="corner-label">Activity Log</p>
            </div>
        </>
    )
}

export default Overview;