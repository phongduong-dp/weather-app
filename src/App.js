import Search from "./components/search/Search";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import "./App.css";
import { useState } from "react";
import ForeCast from "./components/ForeCast/ForeCast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, long] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(
      `${process.env.WEATHER_API_URL}/weather?lat=${lat}&lon=${long}&exclude={part}&appid=${process.env.WEATHER_API_KEY}&units=metric`
    );
    const forecastWeatherFetch = fetch(
      `${process.env.FORECAST_API_URL}/forecast?lat=${lat}&lon=${long}&appid=${process.env.WEATHER_API_KEY}&units=metric`
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
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <ForeCast data={forecast} />}
    </div>
  );
}

export default App;
