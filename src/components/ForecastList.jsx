import React from "react";
import Forecast from "./Forecast";

const ForecastList = ({ list, cityName }) => {
  var forecastList = list.daily;

  const values = forecastList.slice(1, 6).map((forecast) => {
    
    return <Forecast weatherData={forecast} key={forecast.dt}/>;
  });

  return (
    <>
      {cityName}
      {values}
    </>
  );
};

export default ForecastList;
