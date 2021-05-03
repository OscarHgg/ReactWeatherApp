import React, { useEffect, useState } from "react";
import { Card } from "semantic-ui-react";
import moment from "moment";

const ForecastStockholm = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=59e394efef4a5501b7e18277939a2ed3";

    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((result) => {

        setData(result);
      });
  }, []);

  return (
    <>
      {typeof data.main != "undefined" ? (
        <Card>
          <Card.Content>
            <Card.Header>{data.name}</Card.Header>
            <Card.Description>
              {moment().format("dddd")}
              <br></br> {moment().format("LL")} {moment().format("hh:mm")}
            </Card.Description>
            <Card.Meta>{(data["main"].temp - 273.15).toFixed()} °C</Card.Meta>
          </Card.Content>
        </Card>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default ForecastStockholm;
