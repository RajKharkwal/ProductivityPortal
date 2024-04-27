import React, { useState, useEffect } from 'react';
// import './style.css';

  function PomodoroTimer() {
    const [minutes, setMinutes] = useState(25); // 25 minutes in seconds
    const [seconds,setSeconds] = useState(0);
    const [timerRunning, setTimerRunning] = useState(false);
    const [currentMode, setCurrentMode] = useState('pomodoro');
  
    useEffect(() => {
      let interval;
      if (timerRunning) {
        interval = setInterval(startTimer,1000);
      } else {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [timerRunning]);
  
    useEffect(() => {
      switch (currentMode) {
        case 'pomodoro':
          setTime(1500);
          break;
        case 'shortBreak':
          setTime(300); // 5 minutes in seconds
          break;
        case 'longBreak':
          setTime(900); // 15 minutes in seconds
          break;
        default:
          setTime(1500);
      }
    }, [currentMode]);
    const formatTime(){
      return `${String(time/60).padStart(2,"0")} : ${String(0).padStart(2,"0")}`;
    }
    const startTimer = () => {
      setTimerRunning(true);
    };
  
    const stopTimer = () => {
      setTimerRunning(false);
    };
  
    const resetTimer = () => {
      setTimerRunning(false);
      switch (currentMode) {
        case 'pomodoro':
          setTime(1500);
          break;
        case 'shortBreak':
          setTime(300);
          break;
        case 'longBreak':
          setTime(900);
          break;
        default:
          setTime(1500);
      }
    };
  
    const handleModeChange = (mode) => {
      setCurrentMode(mode);
    };
  
    return (
      <div className="pomodoro-timer">
        <div className="timer">{formatTime(time)}</div>
        <div className="buttons">
          <button onClick={() => handleModeChange('pomodoro')} disabled={currentMode === 'pomodoro'}>Pomodoro</button>
          <button onClick={() => handleModeChange('shortBreak')} disabled={currentMode === 'shortBreak'}>Short Break</button>
          <button onClick={() => handleModeChange('longBreak')} disabled={currentMode === 'longBreak'}>Long Break</button>
          <button onClick={startTimer} disabled={timerRunning}>Start</button>
          <button onClick={stopTimer} disabled={!timerRunning}>Stop</button>
          <button onClick={resetTimer}>Reset</button>
        </div>
      </div>
    );
  }
  
//   function formatTime(seconds) {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
//   }
  
//   export default PomodoroTimer;
  
//   return (
//     <div className="pomo-container">
//       <div className="pomo-buttons">
//         <button className="pomo-btn" onClick={pomodoro}>Pomodoro</button>
//         <button className="pomo-btn" onClick={shortBreak}>Short Break</button>
//         <button className="pomo-btn" onClick={longBreak}>Long Break</button>
//       </div>
//       <div className="pomo-clock">
//         <div className="clock" id="clockCircle">
//           <h3 id="time">{formatTime(minutes, seconds)}</h3>
//         </div>
//       </div>
//       <div className="control-buttons">
//         <img src={isPause ? "./resume.png" : "./pause.png"} onClick={pauseToResume} id="play-btn" alt="play-pause" />
//         <svg onClick={resetTimer} id="reset-btn" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25C17.1336 25 21.1748 22.477 23.3338 18.7317L18.9331 16.2003C17.6504 18.4251 15.2526 19.9265 12.5 19.9265C8.39848 19.9265 5.07354 16.6015 5.07354 12.5C5.07354 8.39848 8.39848 5.07354 12.5 5.07354C14.2581 5.07354 15.8694 5.68856 17.1402 6.71081L13.858 9.04542L25 12.7609V1.11694L21.3715 3.69873C19.1068 1.41567 15.9699 0 12.5 0Z" fill="#D9D9D9" />
//         </svg>
//       </div>
//       <div class="music-play">
//                 <div className="search-music">
//                     <label for="add-music">
//                     <input id="add-music" type="text" placeholder="Paste your Spotify playlist link !"></input>
//                     </label>
//                 </div>
//                 <div id="music-info">
//                     <svg className="now-playing-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M8 16C3.582 16 0 12.418 0 8C0 3.582 3.582 0 8 0C12.418 0 16 3.582 16 8C16 12.418 12.418 16 8 16ZM8 4C5.791 4 4 5.791 4 8C4 10.209 5.791 12 8 12C10.209 12 12 10.209 12 8C12 5.791 10.209 4 8 4Z" fill="#D9D9D9"/>
//                         </svg>
//                     <h3></h3>                     
//                 </div>
//       </div>
//     </div>
//   );
// }

export default PomodoroTimer;
