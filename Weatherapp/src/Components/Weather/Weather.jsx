import { useState } from "react";
import axios from "axios";
import styles from "./weather.module.css"

const Weather = () => {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

  const handleCityName = (e) => {
    setCity(e.target.value);
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"638c3c0b5c147dc09309373910cb0ed9"}`);
      setWeather(response);
    } catch (error) {
      console.log("Error occured", error);
    }
  };

  const handleSubmit = () => {
    fetchWeather();
  };

  return (
    <>
     <div className={styles["weather-container"]}>
        <h2>Get your Climate Specifics </h2>
        <input
          type="text"
          placeholder="enter the city name"
          value={city}
          required
          onChange={handleCityName}
        />
        <button onClick={handleSubmit}>search</button>

        {weather && (
          <div>
            <h2>Weather Information</h2>
            <h4>Location:{weather.data.name}</h4>
            <p>{Math.floor(weather.data.main.temp - 273)} C</p>
            <p>Description:{weather.data.weather[0].description}</p>
            <p>Wind-speed:{weather.data.wind.speed}</p>
          </div>
        )}
      </div>
    </>
  );
};
export default Weather;