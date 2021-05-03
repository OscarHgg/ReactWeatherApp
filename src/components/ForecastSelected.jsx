import React from "react";
import { Card, Image } from "semantic-ui-react";
import moment from "moment";

const ForecastSelected = ({ weatherData }) => {

  if (weatherData !== undefined) {
    var iconUrl =
    "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
  }

  return (
    <>
      {typeof weatherData != "undefined" ? (
        <Card>
          <Card.Content>
            <Card.Header>
              {weatherData.name} <br></br><Image src={iconUrl} size="tiny" />
            </Card.Header>
            <Card.Description> {moment().format("dddd")}
              <br></br> {moment().format("LL")}</Card.Description>
            <Card.Description>{weatherData.weather[0].description}</Card.Description>
            <Card.Description>
              <br/>
              Feels like {(weatherData["main"].feels_like - 273.15).toFixed()}°C <br/>
              Max {(weatherData["main"].temp_max - 273.15).toFixed()} °C<br></br>
              Min {(weatherData["main"].temp_min - 273.15).toFixed()} °C<br></br>
              Humidity {weatherData["main"].humidity.toFixed()} % <br/>
            </Card.Description>
          </Card.Content>
        </Card>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default ForecastSelected;
