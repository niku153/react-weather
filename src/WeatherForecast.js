import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function displayForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="col-12">
        <ul className="weather-forecast">
          <WeatherForecastDay data={forecast[0]} />
          <WeatherForecastDay data={forecast[1]} />{" "}
          <WeatherForecastDay data={forecast[2]} />{" "}
          <WeatherForecastDay data={forecast[3]} />{" "}
          <WeatherForecastDay data={forecast[4]} />{" "}
          <WeatherForecastDay data={forecast[5]} />{" "}
        </ul>
      </div>
    );
  } else {
    let apiKey = "06bc256f164c93573001cb99d320c17d";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);
    return null;
  }
}
