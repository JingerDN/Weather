import React, { useEffect, useState,useContext } from "react";
import Viewer from "../Viewer/Viewer";
import {REACT_APP_API_URL,REACT_APP_API_KEY} from "../../keys";
import Spinner from 'react-bootstrap/Spinner';
export default function GetWeather() {
    
  const [latt, setLatt] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setResult] = useState([]);
 

  useEffect(() => {
    const fetchWeather = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLatt(position.coords.latitude);
        setLong(position.coords.longitude);
      });

  try{
  await fetch(`${REACT_APP_API_URL}/weather/?lat=${latt}&lon=${long}&units=metric&APPID=${REACT_APP_API_KEY}`)
  .then(res => {
       return res.json();
  })
  .then(result => {
     console.log(result);
     setResult(result)
 })}
 catch(e){
   console.log(e);
 }
}

    fetchWeather();
  }, [latt,long])

  return (
    
    <div className="GetWeather">
     {(typeof data.main != 'undefined') ? (
        <Viewer weatherData={data}/>
      ): (
        <div className="loading">
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
        </div>
      )}
    
 
      

    </div>
  );
}