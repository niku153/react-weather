import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}`;
  }

  function minTemperature() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}`;
  }

  function formatForecastDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <li className="forecast-day-wrapper">
      <div>
        <div>
          <img
            src={`https://raw.githubusercontent.com/niku153/Weather-application/main/media/${props.data.weather[0].icon}.svg`}
            className="forecast-icons"
            alt="forecast-icon"
          />
        </div>
        <div className="forecast-day">{formatForecastDay()}</div>
      </div>
      <span className="temperature-range">
        <span className="temperature-maximum">{maxTemperature()}° </span>{" "}
        <span className="temperature-minimum">{minTemperature()}°</span>
      </span>
    </li>
  );
}
