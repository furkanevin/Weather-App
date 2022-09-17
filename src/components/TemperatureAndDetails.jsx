import React from "react";
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/WeatherService";

function TempratureAndDetails({
    weather: {
        details,
        icon,
        temp,
        temp_min,
        temp_max,
        sunrise,
        sunset,
        speed,
        humidity,
        feels_like,
        timezone,
      },
}){
    return(



        <div>

        <div className="clouds">
            <p>{details}</p>
        </div>
        <div className="details">
            <img className="sun" src={iconUrlFromCode(icon)}/>
            <p className="temp">{`${temp.toFixed()}°`}</p>
            <div className="info">
                <div className="info-s">
                    <UilTemperature size={18} />
                    Real feel:
                    <span className="degree p-1">{`${feels_like.toFixed()}°`}</span>
                </div>
                <div className="info-s">
                    <UilTear size={18} />
                    Humudity:
                    <span className="degree p-1">{`${humidity.toFixed()}%`}</span>
                </div>
                <div className="info-s">
                    <UilWind size={18} />
                    Wind:
                    <span className="degree p-1">{`${speed.toFixed()} km/h`}</span>
                </div>
            </div>
        </div>
        <div className="sunsetContainer">
            <UilSun/>
            <p className="sunsetP">
                Rise: <span className="degree">   {formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
            </p>
            <p className="think">|</p>
            <UilSunset/>
            <p className="sunsetP">
                Set: <span className="degree">  {formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
            </p>
            <p className="think">|</p>
            <UilArrowUp/>
            <p className="sunsetP">
                High: <span className="degree">{`${temp_max.toFixed()}°`}</span>
            </p>
            <p className="think">|</p>
            <UilArrowDown/>
            <p className="sunsetP">
                Low: <span className="degree">{`${temp_min.toFixed()}°`}</span>
            </p>
        </div>
        </div>
 )}
export default TempratureAndDetails