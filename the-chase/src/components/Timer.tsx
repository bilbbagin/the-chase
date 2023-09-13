// import { useTimer } from 'react-timer-hook';

// interface Props {
//   expiryTimestamp: number;
//   setTurnFinished: (param: boolean) => void;
// }

// function Timer({ expiryTimestamp, setTurnFinished }: Props) {
//   const setTimer = () => {
//     const time = new Date();
//     time.setSeconds(time.getSeconds() + expiryTimestamp);

//     return time;
//   };

//   const { totalSeconds, seconds, minutes, hours, days, isRunning, start, pause, resume, restart } =
//     useTimer({ expiryTimestamp: setTimer(), onExpire: () => setTurnFinished(true) });

//   return (
//     <div className="text-light m-0">
//       <div style={{ fontSize: '50px' }}>
//         <span>{minutes}</span>:<span>{seconds}</span>
//       </div>
//       <p>{isRunning ? 'Running' : 'Not running'}</p>
//       <button onClick={start}>Start</button>
//       {/* <button onClick={() => restart(setTimer())}>Restart</button> */}
//     </div>
//   );
// }

// export default Timer;
import React, { useState } from 'react'; // Import useState
import { useTimer } from 'react-timer-hook';

interface Props {
  expiryTimestamp: number;
  setTurnFinished: (param: boolean) => void;
}

function Timer({ expiryTimestamp, setTurnFinished }: Props) {
  const setTimer = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + expiryTimestamp);
    return time;
  };

  const [isTimerRunning, setIsTimerRunning] = useState(false); // Track the timer's running state

  function formatTime(minutes: number, seconds: number): string {
    // Ensure that both minutes and seconds are non-negative integers
    const formattedMinutes = Math.max(0, Math.floor(minutes));
    const formattedSeconds = Math.max(0, Math.floor(seconds));

    // Use String padding to ensure two digits for seconds
    const formattedSecondsString = formattedSeconds.toString().padStart(2, '0');

    // Combine minutes and seconds with a colon
    return `${formattedMinutes}:${formattedSecondsString}`;
  }

  const { totalSeconds, seconds, minutes, hours, days, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp: setTimer(),
      onExpire: () => setTurnFinished(true),
      autoStart: false,
    }); // Set autoStart to false

  const handleStartClick = () => {
    start();
    setIsTimerRunning(true);
  };

  return (
    <div className="text-light m-0">
      <div style={{ fontSize: '50px' }}>
        <span>{formatTime(minutes, seconds)}</span>
      </div>
      {<button onClick={handleStartClick}>Start</button>}
    </div>
  );
}

export default Timer;
