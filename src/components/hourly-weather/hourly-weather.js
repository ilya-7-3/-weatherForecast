import React from 'react'
import { useSelector } from 'react-redux'
import './hourly-weather.css'
import { getFixTime } from '../../utilities'

const HourlyWeather = () =>{
    const weatherData = useSelector((state)=>state.weatherData)
    const hourlyelements=weatherData.hourly.map((el,count)=>{
        return(
            <div className="element" key={count}>
            <div className="element__time">
                {getFixTime(new Date(el.dt*1000).getHours())}
            </div>
            <div className="element__descr">
              <img src={`https://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`} alt="img"/>
            </div>
            <div className="element__temp">
            {Math.round(el.temp)}°
            </div>
            </div>
        )
    })
    return(
        <div className="hourly-elements border-top border-bottom pt-2 pb-2 d-flex mt-5 ">
        {hourlyelements}
        </div>
    )
}

export default HourlyWeather 