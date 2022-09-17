import React from "react";
import { formatToLocalTime } from "../services/WeatherService";


 function TimeAndLoc({ weather: { dt, timezone, name, country } }) {

   return( 
   <div className='timeandloc'>
    <div>
        <p className='time'>
        {formatToLocalTime(dt, timezone)}
        </p>
    </div>
    <div>
      <p className='loc'>{`${name}, ${country}`}</p>
    </div>

   </div>);
 }
 
 export default TimeAndLoc