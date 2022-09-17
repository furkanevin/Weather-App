import React from 'react'
import { UilMapMarker } from '@iconscout/react-unicons'
function TopButtons({ setQuery }) {

    const cities = [
        {
            id:1,
            title:'London'
        },
        {
            id:2,
            title:'Sydney'
        },
        {
            id:3,
            title:'Istanbul'
        },
        {
            id:4,
            title:'Tokyo'
        },
        {
            id:5,
            title:'Paris'
        },    
    ]
    
    return <div className='topButtons'>
            {cities.map((city) => (
             <button key={city.id}   onClick={() => setQuery({ q: city.title })} > <UilMapMarker className="marker"/>{city.title} </button>
            ))}
         </div>
}
export default TopButtons