import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const timeRef = useRef(null);

  function startTimer() {
    if (timeRef.current) return;
    timeRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  }

  function stopTime() {
    clearInterval(timeRef.current);
    timeRef.current = null;
  }

  function resetTimer() {
    stopTime();
    setTime(0);
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-100 to-purple-200">
      <div className="backdrop-blur-md bg-white/30 rounded-xl p-10 shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">⏱ Stopwatch</h1>
        <div className="text-6xl font-mono font-bold mb-10 text-gray-900">{time} s</div>
        <div className="flex gap-4 justify-center">
          <button
            onClick={startTimer}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition"
          >
            Start
          </button>
          <button
            onClick={stopTime}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition"
          >
            Stop
          </button>
          <button
            onClick={resetTimer}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
