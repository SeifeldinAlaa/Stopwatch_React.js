import React from 'react';

import './App.css';

function App() {

  const [time, setTime] = React.useState(0);

  const [timerOn, setTimeOn] = React.useState(false);

  React.useEffect(() => {

    let interval = null;



    if (timerOn) {

      interval = setInterval(() => {

        setTime(prevTime => prevTime + 10)

      }, 10)
    } else {

      clearInterval(interval)
    }

    return () => clearInterval(interval)

  }, [timerOn])




  return (
    <div className="App">
      <h1 className="headline">Timer.js</h1>
      <br />
      <br />
      <div className="number">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>

        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>

        <span>{("0" + (time / 10) % 100).slice(-2)}</span>
      </div>
      <div >
        <button type="button" className="btn btn-success" onClick={() => setTimeOn(true)}>Start</button>
        <button type="button" className="btn btn-danger" onClick={() => setTimeOn(false)}>Stop</button>
        <button type="button" className="btn btn-warning text-white" onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;
