import {WeatherApp, status} from './components/fetch.js';
import React, { useState, useEffect } from 'react';
import Status from './components/status.jsx';
import './App.css';
let color
function App() {
  let [sharedState, setSharedState] = useState('')
  switch(status){
    case 'Clear':
      color='rgb(7, 114, 202)'
      break;
    case 'Clouds':
      color='rgb(63, 66, 68)'
      break;
    case 'Rain':
    case 'Thunderstorm':
      color="rgb(0, 57, 104)"
      break;
    case 'Snow':
      color="white"
      break;
    default:
      color="royalblue"
  }
  return (
    <div className="body" style={{background: color}}>
      <Status sharedState={sharedState}/>
      <WeatherApp sharedState={sharedState} setSharedState={setSharedState}/>
    </div>
  );
}

export default App;
