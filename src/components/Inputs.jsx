import React from 'react'
import { UilSearch,UilMapMarker } from '@iconscout/react-unicons'
import { useState } from 'react';
function Inputs({ setQuery ,units ,setUnits}) {
  const [city, setCity] = useState("");

  const handleSearchClick = ()=>{
    if (city !== '')setQuery({q: city})
  }
  const handleLocation = () => {
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        let lat=position.coords.latitude;
        let lon= position.coords.longitude;
        setQuery({
          lat,
          lon,
        })
      } )
    }
  }
  const handleUnits =(e)=>{
    const selectedUnit = e.currentTarget.name
    if(units!==selectedUnit) setUnits(selectedUnit);
  }
  return (
  <div className='inputs'>
    <div className='searchBar'>
        <input onChange={(e)=>setCity(e.currentTarget.value)} type="text" className='search' placeholder='Search for City...'/>
        <UilSearch onClick={handleSearchClick} size={20}className='icon' /><UilMapMarker onClick={handleLocation} size={23}className='icon' />
    </div>
    <div className='celcius'>
        <button onClick={handleUnits} name='metric' className='celciusBtn icon'>°C</button>
        <p className='celciusP' >/</p>
        <button onClick={handleUnits} name='imperial' className='celciusBtn icon'>°F</button>
    </div>
  </div>)
}

export default Inputs