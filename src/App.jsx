import React, { useContext,useState, useRef } from 'react';

import './App.css';
import { TimerContext } from './components/TimerContext';

function App() {
  const {DisplayTimer,Start,Stop,Reset} = useContext(TimerContext)
  return (
    <React.Fragment>
      <h2>Stopwatch</h2>
      <div className="main-div">
        <p className="timer">
          Timer
        </p>
        <DisplayTimer />
        <button className="start-button" onClick={Start}>Start</button>
        <button className="stop-button" onClick={Stop}>Stop</button>
        <button className="reset-button" onClick={Reset}>Reset</button>
      </div>
    </React.Fragment>
  );
}

export default App;