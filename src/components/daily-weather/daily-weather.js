import React from 'react'
import { useSelector } from 'react-redux'
import getDay from '../../utilities'
import './daily-weather.css'

const DailyWeather = () => {
    const weatherData = useSelector((state)=>state.weatherData)
    const dailyElements=weatherData.daily.map((el,count)=>{
        if(count===0){
           return false
        }
            return(
            <div className="daily-element" key={count}>
                <div className="daily-element__day">
                    {getDay(new Date(el.dt*1000).getDay())}
                </div>
                
                <div className="daily-element__img">
                    <img src={`https://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`} alt='img'/>
                </div>
                
                <div className="daily-element__max-temp">
                    {Math.round(el.temp.max)}°
                </div>
                
                <div className="daily-element__min-temp">
                    {Math.round(el.temp.min)}°
                </div>
               </div>
        )
        
        
        
    })

    return(
        <div className="daily-elements container-fluid">
        {dailyElements}
        </div>
    )
}

export default DailyWeather