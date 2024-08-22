import React, { useState, useEffect } from 'react';
let status
const WeatherApp = ({sharedState, setSharedState}) => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Cairo'); // Default city

  const handleChange = (e) =>{
    setSharedState(e.target.value)
    setCity(e.target.value)
  }
  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  const fetchWeatherData = async (city) => {
    const apiKey = '7f0189af840e29fe4773f9749cdbf695';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      status=data.weather[0].main
      console.log(status)
      setSharedState(status)
      setWeatherData(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };
  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={handleChange}
        placeholder="Enter city"
      />
      <button onClick={() => fetchWeatherData(city)}>Get Weather</button>
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export {WeatherApp,status};
