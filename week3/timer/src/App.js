import './App.css';
import React, {useState} from 'react'
import Clock from './Clock';
import Timer from './Timer';

function App() {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [status, setStatus] = useState(0);
  const [interv, setInterv] = useState();
  const [laps, setLap] = useState([]);

  const start = () => {console.log("Hello")
  run();
  setInterv(setInterval(run, 10))
  setStatus(1);
};

const save = () => {console.log("Saving Lap")
var curLap = time.h+":"+time.m+":"+time.s+":"+time.ms;
setLap(laps => [...laps, curLap])
console.dir(laps.length)
};

const stop = () => {console.log("Whoa ..")
clearInterval(interv);
setStatus(2);

};

const resume = () => {console.log("Hello Again")
start();

};

const reset = () => {console.log("Good bye")
clearInterval(interv);
setStatus(0);
setTime({ms:0, s:0, m:0, h:0})
setLap([])

};
  var newMs = time.ms;
  var newS = time.s;
  var newM = time.m;
  var newH = time.h;

  const run = () => {
    if(newM === 60){
      newH++;
      newM=0;
    }
    if(newS === 60){
      newM++;
      newS=0;
    }
    if(newMs === 100){
      newS++;
      newMs=0;
    }
    newMs++;
    return setTime({ms:newMs, s:newS, m:newM, h:newH})
  }
  return (
    <div className="main_container">
     <div className="clock">
     <div className="timer">
     <Clock time={time}/>
     <Timer start={start} save={save} stop={stop} resume={resume} reset={reset} status={status} laps={laps}/>
     </div>
     </div>
    </div>
  );
}

export default App;
