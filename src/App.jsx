import Search from "./components/search/Search";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import "./App.css";
import { useState } from "react";
import ForeCast from "./components/ForeCast/ForeCast";
import React from "react";
import Details from "./components/Details/Details";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, long] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(
      `${
        import.meta.env.VITE_WEATHER_API_URL
      }/weather?lat=${lat}&lon=${long}&exclude={part}&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&units=metric`
    );
    const forecastWeatherFetch = fetch(
      `${
        import.meta.env.VITE_FORECAST_API_URL
      }/forecast?lat=${lat}&lon=${long}&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&units=metric`
    );
    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <Details data={currentWeather} />}
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <ForeCast data={forecast} />}
    </div>
  );
}

export default App;
