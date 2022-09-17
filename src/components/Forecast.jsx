import React from 'react'
import { formatToLocalTime } from '../services/WeatherService';
import getFormattedWeatherData from '../services/WeatherService';
import { iconUrlFromCode } from "../services/WeatherService";

function Forecast({ title, items }){
    return(
        <div className="forecastContainer">
            <div>
                <p className="forecastTitle">{title}</p>
            </div>
            <hr />

            <div className="hourly " id='scrollbar'>

            {items.map((item, index) => (
          <div
            key={index}
            className="singlehour"
          >
            <p className="hour">{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              className="sun-1"
            />
            <p className="degree">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;