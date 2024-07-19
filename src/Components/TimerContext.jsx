import React, { createContext, useState, useRef } from 'react';
import './TimerContext.css';

export const TimerContext = createContext({});

export const TimerContextProvider = ({ children }) => {
    const [mins, setMins] = useState(0);
    const [secs, setSecs] = useState(0);
    const [hrs, setHrs] = useState(0); // Fixed typo here
    const [running, setRunning] = useState(false);
    const intervalRef = useRef(null);

    function Start() {
        if (!running) {
            setRunning(true);
            intervalRef.current = setInterval(() => {
                setSecs((prevSecs) => {
                    if (prevSecs === 59) {
                        setMins((prevMins) => {
                            if (prevMins === 59) {
                                setHrs((prevHrs) => prevHrs + 1);
                                return 0;
                            } else {
                                return prevMins + 1;
                            }
                        });
                        return 0;
                    } else {
                        return prevSecs + 1;
                    }
                });
            }, 1000);
        }
    }

    function Stop() {
        if (running) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setRunning(false);
        }
    }

    function Reset() {
        Stop();
        setMins(0);
        setSecs(0);
        setHrs(0);
    }

    const DisplayTimer = () => {
        return (
            <div className="timer-container">
            <div className="timer">
                {hrs < 10 ? <span>0{hrs}</span> : <span>{hrs}</span>}
                <span> : </span>
                {mins < 10 ? <span>0{mins}</span> : <span>{mins}</span>}
                <span> : </span>
                {secs < 10 ? <span>0{secs}</span> : <span>{secs}</span>}
            </div>
        </div>
        );
    };

    const stateObj = { DisplayTimer, Start, Stop, Reset };

    return (
        <TimerContext.Provider value={stateObj}>
            {children}
        </TimerContext.Provider>
    )

    
}