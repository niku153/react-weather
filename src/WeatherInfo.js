import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import Rainfall from "./Rainfall";
import UnitConversion from "./UnitConversion";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.name}</h1>
      <h2>
        <span>
          <FormattedDate date={props.data.date} />
        </span>
        <span className="current-time">
          <FormattedTime date={props.data.time} />
        </span>
      </h2>
      <div className="current-temperature-wrapper">
        <UnitConversion celsius={props.data.temperature} />

        <span>
          <img
            src={props.data.icon}
            alt={props.data.description}
            className="current-condition-icon"
          />
        </span>
        <div className="weather-description">{props.data.description}</div>
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
          <span className="wind-value other-parameter-values">
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
          1h Rainfall:
          <span className="rainfall-value other-parameter-values">
            {" "}
            <Rainfall rainfall={props.data.rainfall} />
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
          <span className="humidity-value other-parameter-values">
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
          <span className="sunrise-time other-parameter-values">
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
          <span className="sunset-time other-parameter-values">
            {" "}
            <FormattedTime date={props.data.sunset} />
          </span>
        </li>
      </ul>
    </div>
  );
}
