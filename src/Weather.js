import React, { useState } from "react";
import "./style.css";
import axios from "axios";

export default function Weather(props) {
  let [loaded, setLoaded] = useState(false);
  let [conditions, setConditions] = useState({});
  function handleResponse(response) {
    setConditions({
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      name: response.data.name,
      description: response.data.weather[0].main,
      icon: `https://raw.githubusercontent.com/niku153/Weather-application/main/media/${response.data.weather[0].icon}.svg`,
      humidity: response.data.main.humidity,
      rainfall: "0mm",
      sunrise: "5:25am",
      sunset: "6:49pm",
    });
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Weather">
        <div className="container shadow">
          <form id="search-form">
            <div className="row">
              <div className="col-8">
                <input
                  type="search"
                  placeholder="Search for a city"
                  className="form-control search-input-box"
                  id="search-input-box"
                  autoComplete="off"
                />
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  value="Search"
                  className="form-control search-button"
                />
              </div>
              <div className="col-1">
                <input
                  type="submit"
                  value="📍"
                  className="form-control current-location-button"
                  id="current-location-button"
                />
              </div>
            </div>
          </form>
          <div className="row">
            <div className="col-sm-8 current-conditions shadow">
              <h1 id="current-city">{conditions.name}</h1>
              <h2>
                <span id="current-date">5th June</span>
                <span className="current-time" id="current-time">
                  0700
                </span>
              </h2>
              <div className="current-temperature-wrapper">
                <span className="current-temperature" id="current-temperature">
                  {conditions.temperature}
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
                    src={conditions.icon}
                    alt={conditions.description}
                    className="current-condition-icon"
                    id="current-condition-icon"
                  />
                </span>
                <div className="weather-description" id="weather-description">
                  {conditions.description}
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
                    {conditions.wind}km/h
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
                  <span
                    className="rainfall-value other-parameter-values"
                    id="rainfall"
                  >
                    {" "}
                    {conditions.rainfall}
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
                  <span
                    className="humidity-value other-parameter-values"
                    id="humidity"
                  >
                    {" "}
                    {conditions.humidity}%
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
                  <span
                    className="sunrise-time other-parameter-values"
                    id="sunrise"
                  >
                    {" "}
                    {conditions.sunrise}
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
                  <span
                    className="sunset-time other-parameter-values"
                    id="sunset"
                  >
                    {" "}
                    {conditions.sunset}
                  </span>
                </li>
              </ul>
            </div>

            <div className="col-sm-4 forecast shadow" id="forecast"></div>
          </div>
        </div>
        <footer>
          <a
            href="https://github.com/niku153/react-weather"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            open source code{" "}
          </a>
          by{" "}
          <a
            href="https://vermillion-froyo-c5f38e.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            nirali parikh
          </a>
          , hosted on{" "}
          <a
            href="https://bejewelled-cranachan-510a11.netlify.app/?"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            netlify
          </a>
        </footer>
      </div>
    );
  } else {
    const apiKey = "06bc256f164c93573001cb99d320c17d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
