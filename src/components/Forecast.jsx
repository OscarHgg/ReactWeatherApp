import React from "react";
import { Card, Image } from "semantic-ui-react";
import moment from "moment";

const Forecast = ({ weatherData, dt }) => {

  var weekDay = moment.unix(weatherData.dt).format('dddd');

  var iconUrl = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';

  return (
    <>
      {typeof weatherData != "undefined" ? (
        <Card>
          <Card.Content>
            <Card.Header>{weekDay}</Card.Header>
            <Card.Meta>
              {/* insert icon  */}
              <Image src={iconUrl} size='mini' /><br/>
              Max {(weatherData["temp"].max - 273.15).toFixed()} °C <br></br>
              Min {(weatherData["temp"].min - 273.15).toFixed()} °C
            </Card.Meta>
          </Card.Content>
        </Card>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Forecast;
