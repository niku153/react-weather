import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1 id="current-city">{props.data.name}</h1>
      <h2>
        <span id="current-date">
          <FormattedDate date={props.data.date} />
        </span>
        <span className="current-time" id="current-time">
          <FormattedTime date={props.data.time} />
        </span>
      </h2>
      <div className="current-temperature-wrapper">
        <span className="current-temperature" id="current-temperature">
          {props.data.temperature}
        </span>
        <span className="units">
          <a href="/" className="celsius" id="celsius">
            °C
          </a>{" "}
          |
          <a href="/" className="fahrenheit" id="fahrenheit">
            °F
          </a>
        </span>
        <span>
          <img
            src={props.data.icon}
            alt={props.data.description}
            className="current-condition-icon"
            id="current-condition-icon"
          />
        </span>
        <div className="weather-description" id="weather-description">
          {props.data.description}
        </div>
      </div>
      <ul className="other-parameters">
        <li className="Wind">
          <span>
            <img
              src="https://raw.githubusercontent.com/niku153/Weather-application/main/media/wind.svg"
              alt="wind-icon"
              className="other-parameter-icon"
            />
          </span>
          Wind:
          <span className="wind-value other-parameter-values" id="wind">
            {" "}
            {props.data.wind}km/h
          </span>
        </li>
        <li className="Rainfall">
          <span>
            <img
              src="https://raw.githubusercontent.com/niku153/Weather-application/main/media/raindrop.svg"
              alt="raindrop-icon"
              className="other-parameter-icon"
            />
          </span>
          Rainfall:
          <span className="rainfall-value other-parameter-values" id="rainfall">
            {" "}
            {props.data.rainfall}
          </span>
        </li>
        <li className="Humidity">
          <span>
            <img
              src="https://raw.githubusercontent.com/niku153/Weather-application/main/media/thermometer.svg"
              alt="humidity-icon"
              className="other-parameter-icon"
            />
          </span>
          Humidity:
          <span className="humidity-value other-parameter-values" id="humidity">
            {" "}
            {props.data.humidity}%
          </span>
        </li>
        <li className="Sunrise">
          <span>
            <img
              src="https://raw.githubusercontent.com/niku153/Weather-application/main/media/sunrise.svg"
              alt="sunrise-icon"
              className="other-parameter-icon"
            />
          </span>
          Sunrise:
          <span className="sunrise-time other-parameter-values" id="sunrise">
            {" "}
            <FormattedTime date={props.data.sunrise} />
          </span>
        </li>
        <li className="Sunset">
          <span>
            <img
              src="https://raw.githubusercontent.com/niku153/Weather-application/main/media/sunset.svg"
              alt="sunset-icon"
              className="other-parameter-icon"
            />
          </span>
          Sunset:
          <span className="sunset-time other-parameter-values" id="sunset">
            {" "}
            <FormattedTime date={props.data.sunset} />
          </span>
        </li>
      </ul>
    </div>
  );
}
