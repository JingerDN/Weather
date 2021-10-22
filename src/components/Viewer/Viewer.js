import React,{useState} from "react";
import moment from 'moment';
import {Container} from 'react-bootstrap';

import map from "./map.png";
import "./style.scss";

export default function Viewer({weatherData}){
//const [theme,setTheme]=useState();//background-color: #fff700;

const iconcode = weatherData.weather[0].icon;

const iconurl=`https://openweathermap.org/img/wn/${iconcode}@2x.png`;

return( 
<div>
<Container>
    <div className="wrapper">
    <div className={weatherData.main.temp<-10?("theme_cold"):(weatherData.main.temp>10)?("theme_lemon"):("theme_hot")}>
    <div className="weather">
        <div className="weather_text">
            <div className="title">
                <div className="orange_date">
                    <h1 >{moment().format('MMM, DD')},&nbsp;&nbsp;{moment().format('hh:mm a')}</h1>
                </div>
                <div className="city_country">
                    <h1>{weatherData.name},&nbsp;&nbsp;{weatherData.sys.country}</h1>
                </div>
            </div>
            <div className="temp-icon">
                <div>
                    <img src={iconurl}/>
                </div>
                <div>
                <p>{weatherData.main.temp}&deg;C.</p>
                </div>
            </div>

            <div className="description">
            <span>Feels like {weatherData.main.feels_like}&deg;C.&nbsp;</span>
            <span>{weatherData.weather[0].description}.&nbsp;</span>
            <span>{weatherData.weather[0].main}</span>
            </div>

            <br/>

            <div className="details">
                <div>
                    <p>Wind:{weatherData.wind.speed}m/s WSW</p>
                    <p>Humidity: {weatherData.main.humidity} %</p>
                    <p>Visibility: 10km</p>
                    <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                    <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                </div>
                <div>
                    <p>Pressure: {weatherData.main.pressure}hPa</p>
                    <p>UV: 0</p>
                </div>
            </div>
        </div>
        </div>

        </div>
        <div className="weather_map">
            <img src={map}></img>
        </div>
    </div>
</Container>
</div>
)
}

      
