import "./CurrentWeather.css";
import React from "react";

function getDaysArray(num) {
  const daysAWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return daysAWeek[num];
}
function getMonth(month) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthNames[month];
}

function CurrentWeather(props) {
  const currentDate = new Date();
  return (
    <div className="weather">
      <img
        src="../../../public/current-weather-bg.png"
        alt="Back ground beach"
        className="current-weather-bg"
      />
      <div className="top">
        <p className="current-day">{getDaysArray(currentDate.getDay())}</p>
        <p className="current-date">
          {currentDate.getDate() +
            " " +
            getMonth(currentDate.getMonth()) +
            " " +
            currentDate.getFullYear()}
        </p>
        <p className="city">
          <img src="../../../public/icons/location.png" alt="location icon" />
          {props.data.city}
        </p>
      </div>
      <div className="bottom">
        <img
          src={`icons/${props.data.weather[0].icon}.png`}
          alt="weather-icon"
          className="weather-icon"
        />
        <p className="temperature">{`${Math.round(props.data.main.temp)}°C`}</p>
        <p className="weather-description">
          {props.data.weather[0].description}
        </p>
      </div>
    </div>
  );
}

export default CurrentWeather;
