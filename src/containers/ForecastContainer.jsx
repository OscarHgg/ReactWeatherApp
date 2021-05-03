import React, { useState } from "react";

import ForecastSearch from "../components/ForecastSearch";
import ForecastList from "../components/ForecastList";

import { Grid } from "semantic-ui-react";
import ForecastStockholm from "../components/ForecastStockholm";
import ForecastSelected from "../components/ForecastSelected";

const ForecastContainer = () => {
  const [result, setResult] = useState([]);
  const [resultList, setResultList] = useState([]);

  var lat = "";
  var lon = "";
  var CityName = "";
  //eventhandler, uppdaterar state - triggas av SWAPISearch

  const search = async (cityName) => {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=59e394efef4a5501b7e18277939a2ed3";

    await fetch(url)
      .then((response) => response.json())
      .then((result) => {

        CityName = cityName;

        lat = result.coord.lat;
        lon = result.coord.lon;

        setResult(result);
        searchList(lat, lon);
      });
  };

  const searchList = async (lat, lon) => {
    const url2 =
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      lat +
      "&lon=" +
      lon +
      "&exclude=minutely,current,hourly&appid=59e394efef4a5501b7e18277939a2ed3";

    await fetch(url2)
      .then((response) => response.json())
      .then((resultlist) => {

        setResultList(resultlist);
      });
  };

  //triggar search-event
  return (
    <>
      <ForecastSearch search={search} />
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column>
            <ForecastStockholm />
          </Grid.Column>
          <Grid.Column>
            {typeof resultList.daily != "undefined" ? (
              <ForecastSelected weatherData={result} />
            ) : (
              <div></div>
            )}
          </Grid.Column>
          <Grid.Column>
            {typeof resultList.daily != "undefined" ? (
              //<Forecast forecast={result} />
              <ForecastList list={resultList} cityName={CityName} />
            ) : (
              <div></div>
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default ForecastContainer;
