import { useState, useEffect, useRef } from 'react';

export const useTimer = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(
        () => {
            let interval;
            if (isRunning) {
                interval = setInterval(() => setElapsedTime(prevElapsedTime => prevElapsedTime + 0.01), 10);
            }
            return () => clearInterval(interval);
        },
        [isRunning]
    );

    return {
        isRunning,
        setIsRunning,
        elapsedTime,
        setElapsedTime
    };
};

export const useStopwatch = () => {
    const { isRunning, setIsRunning, elapsedTime, setElapsedTime } = useTimer();

    const handleReset = () => {
        setIsRunning(false);
        setElapsedTime(0);
    };

    return {
        // toFixed() is a function that fixes decimal problem, you decide how many decimals you want
        elapsedTime: elapsedTime.toFixed(2),
        resetTimer: () => handleReset(),
        startTimer: () => setIsRunning(true),
        stopTimer: () => setIsRunning(false),
        isRunning
    };
};

export const useCopyToClipboard = () => {
    const textAreaRef = useRef(null);

    const copyToClipboard = e => {
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
    };

    return {
        textAreaRef,
        useCopyToClipboard
    };
}

export const useClearNote = () => {
    const textAreaRef = useRef(null);

    const clearNote = e => {
        textAreaRef.current.select();
        document.execCommand('delete');
        e.target.focus();
    };

    return {
        textAreaRef,
        clearNote
    };
}