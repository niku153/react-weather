import React, { useState } from "react";

export default function UnitConversion(props) {
  let [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span>
        <span className="current-temperature">{props.celsius}</span>
        <span className="units">
          <span className="celsius">°C</span> |{" "}
          <a href="/" className="fahrenheit" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <span>
        <span className="current-temperature">{fahrenheit}</span>
        <span className="units">
          <span className="celsius">°F</span> |{" "}
          <a href="/" className="fahrenheit" onClick={showCelsius}>
            °C
          </a>
        </span>
      </span>
    );
  }
}
