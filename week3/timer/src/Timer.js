import React from 'react';
import Lap from './Lap';
//import uuidv4 from './uuid.v4';

function Timer({start, status, stop, save, reset, resume, laps}) {
    
    return (
        <div>
            {(status === 0) ?  <button className="timer-btn timer-btn-gre" onClick={start}>START</button>:""}
            {(status === 1) ?  <div><button className="timer-btn timer-btn-red" onClick={stop}>STOP</button>
                                <button className="timer-btn timer-btn-yel" onClick={reset}>RESET</button><br></br>
                                
                                </div>:""}
            {(status === 2) ?  <div><button className="timer-btn timer-btn-gre" onClick={resume}>RESUME</button>
                                <button className="timer-btn timer-btn-yel" onClick={save}>LAP</button>
                                <button className="timer-btn timer-btn-yel" onClick={reset}>RESET</button><br></br>
                               
                                {laps.map(lap => <Lap lap={lap}/>)}</div>:""}
                                
        </div>
      );
    }

 export default Timer;