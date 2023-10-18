import { useEffect } from 'react';
import { useState } from 'react'
import './App.css'

export default function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    const positionId = setInterval(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Getting geolocation:", error);
        }
      );
    }, 1000);
    return () => clearInterval(positionId);
  }, []);

  return (
    <div>
      <img src="./src/location.gif" alt="location" height="200px" />
      <h1>Geolocation App</h1>
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
    </div>
  )
}


//navigator.geolocation.getCurrentPosition to obtain the current geolocation information.this function is part of the browser's Geolocation API

//(position) => {
//When the geolocation is successfully obtained, the success callback function is called with the position parameter. Inside this function, we update the latitude and longitude state variables with the latitude and longitude from position.coords.