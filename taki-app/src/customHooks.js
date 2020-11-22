import { useState, useEffect } from 'react';

// data saving function using localStorage
// function useStickyState(defaultValue, key) {
//     const [value, setValue] = useState(() => {
//         const stickyValue = window.localStorage.getItem(key);

//         return stickyValue !== null
//             ? JSON.parse(stickyValue)
//             : defaultValue;
//     });

//     useEffect(() => {
//         window.localStorage.setItem(key, JSON.stringify(value));
//     }, [key, value]);

//     return [key, setValue];
// }

// export default useStickyState;

export const useInputValue = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        onChange: (e) => setValue(e.target.value)
    };
};

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