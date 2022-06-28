import React from "react";
import "./style.css";

export default function App() {
  let weatherData = {
    city: "Perth",
    temperature: 19,
    date: "Monday, 13th June",
    time: "11:30",
    description: "Sunny",
    currentConditionIcon:
      "https://raw.githubusercontent.com/niku153/Weather-application/main/media/01d.svg",
    humidity: "30%",
    wind: "10km/h",
    rainfall: "0mm",
    sunrise: "5:25am",
    sunset: "6:49pm",
  };

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
            <h1 id="current-city">{weatherData.city}</h1>
            <h2>
              <span id="current-date">{weatherData.date}</span>
              <span className="current-time" id="current-time">
                {weatherData.time}
              </span>
            </h2>
            <div className="current-temperature-wrapper">
              <span className="current-temperature" id="current-temperature">
                {weatherData.temperature}
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
                  src={weatherData.currentConditionIcon}
                  alt=""
                  className="current-condition-icon"
                  id="current-condition-icon"
                />
              </span>
              <div className="weather-description" id="weather-description">
                {weatherData.description}
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
                  {weatherData.wind}
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
                  {weatherData.rainfall}
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
                  {weatherData.humidity}
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
                  {weatherData.sunrise}
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
                  {weatherData.sunset}
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
}
