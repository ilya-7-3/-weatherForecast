import React from 'react'
import { useSelector } from 'react-redux'
import './descr-weather.css'
import { getFixTime, getFixPercent } from '../../utilities'

const DescrWeather = () => {
    const weatherData=useSelector((state)=>state.weatherData)

    return(
        <div className="weather__current">
            <div className="weather__current_descr border-bottom border-top container-fluid">
                {`Сегодня: Сейчас ${weatherData.current.weather[0].description}.
                 Максимальная температура воздуха ${Math.round(weatherData.daily[0].temp.max)}°.
                 Минимальная температура воздуха ${Math.round(weatherData.daily[0].temp.min)}°.`}
            </div>

            <div className="flex-item border-bottom">
                <div className="width">
                  <small>ВОСХОД СОЛНЦА</small>
                <span>
                {getFixTime(new Date(weatherData.current.sunrise*1000).getHours())}:{getFixTime(new Date(weatherData.current.sunrise*1000).getMinutes())}
                </span>
                </div>
                <div className="width">
                <small>ЗАХОД СОЛНЦА</small>
                <span>
                {getFixTime(new Date(weatherData.current.sunset*1000).getHours())}:{getFixTime(new Date(weatherData.current.sunset*1000).getMinutes())}
                </span>
                </div>
            </div>

            <div className="flex-item  border-bottom">
                <div className="width">
                <small>ВЕРОЯТНОСТЬ ДОЖДЯ</small>
                <span>
                {getFixPercent(weatherData.daily[0].pop)}
                </span>
                </div>
                <div className="width">
                <small>ВЛАЖНОСТЬ</small>
                <span>
                {weatherData.current.humidity}%
                </span>
                </div>
            </div>

            <div className="flex-item  border-bottom">
                <div className="width">
                <small>ВЕТЕР</small>
                <span>
                {weatherData.current.wind_speed} км/ч
                </span>
                </div>
                <div className="width">
                <small>ВИДИМОСТЬ</small>
                <span>
                {weatherData.current.visibility/1000} км
                </span>
                </div>
            </div>
        </div>
    )
}

export default DescrWeather