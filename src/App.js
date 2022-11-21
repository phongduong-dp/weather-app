import Search from "./components/search/Search";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import "./App.css";
import { WEATHER_API_KEY, WEATHER_API_URL, FORECAST_API_URL } from "./api";

function App() {
  const handleOnSearchChange = (searchData) => {
    const [lat, long] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${long}&exclude={part}&appid=${WEATHER_API_KEY}`
    );
    const forecastWeatherFetch = fetch(
      `${FORECAST_API_URL}/forecast?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}`
    );
  };
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
