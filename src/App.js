import {WeatherApp} from './components/fetch.js';
import React, { useState, useEffect } from 'react';
import Status from './components/status.jsx';
import './App.css';

function App() {
  let [sharedState, setSharedState] = useState('')
  return (
    <div className="App">
      <header className="App-header">
        <Status sharedState={sharedState}/>
        <WeatherApp sharedState={sharedState} setSharedState={setSharedState}/>
      </header>
    </div>
  );
}

export default App;
