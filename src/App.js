import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLoc from './components/TimeAndLoc';
import TempratureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/WeatherService';
import { useEffect, useState } from 'react';
import DateTime from 'luxon'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [query, setQuery] = useState({ q: "izmir" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);


  const formatBg=()=>{
    if(!weather) return 'cold-body-bg'
    const threshold = units === 'metric' ?20 :60
    if(weather.temp <= threshold) return 'cold-body-bg'
    return 'hot-body-bg'
  }

  return (
    <div className={`screen ${formatBg()}`}>
    <div className="mainContainer">
      <TopButtons setQuery={setQuery}/>
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>

    {weather && (
      <div>
      <TimeAndLoc weather={weather}/>
      <TempratureAndDetails weather={weather}/>

      <Forecast title="HOURLY FORECAST" items={weather.hourly}/>
      <Forecast title="DAILY FORECAST" items={weather.daily} />        
      <p className='footer'> made by <a href="https://www.linkedin.com/in/furkan-evin/">Furkan Evin</a></p>

      </div>
    )}
    </div>
    <ToastContainer position="top-right"
    autoClose={1500}
    hideProgressBar={false}
    newestOnTop={true}
    closeOnClick={true}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    className="toast"
    />
    </div>
    
  );

}

export default App;
