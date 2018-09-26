import React from "react";

const Weather = props => (
  <div id="weather">
    {props.city &&
      props.country && (
        <p className="weather_key">Location City: {props.city}</p>
      )}

    {props.city &&
      props.country && <p className="weather_key">Country :{props.country}</p>}
    {props.temperature && (
      <p className="weather_key"> Temperatue :{props.temperature}</p>
    )}
    {props.erros && <p className="weather_key">{props.erros}</p>}
  </div>
);

export default Weather;
