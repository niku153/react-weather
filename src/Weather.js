import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  let [loaded, setLoaded] = useState(false);
  let [conditions, setConditions] = useState({});
  let [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setConditions({
      date: new Date(response.data.dt * 1000),
      time: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      name: response.data.name,
      description: response.data.weather[0].main,
      icon: `https://raw.githubusercontent.com/niku153/Weather-application/main/media/${response.data.weather[0].icon}.svg`,
      humidity: response.data.main.humidity,
      rainfall: "0mm",
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
    });
    setLoaded(true);
  }

  function searchCity() {
    const apiKey = "06bc256f164c93573001cb99d320c17d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Weather">
        <div className="container shadow">
          <form id="search-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-8">
                <input
                  type="search"
                  placeholder="Search for a city"
                  className="form-control search-input-box"
                  id="search-input-box"
                  autoComplete="off"
                  autoFocus="on"
                  onChange={handleCityChange}
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
              <WeatherInfo data={conditions} />

              <div className="col-sm-4 forecast shadow" id="forecast"></div>
            </div>
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
    searchCity();
    return "Loading...";
  }
}