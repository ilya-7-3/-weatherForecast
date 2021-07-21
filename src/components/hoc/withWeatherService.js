import React from 'react'
import  {WeatherServiceConsumer} from '../weatherServiceContext/weatherServiceContext'

const WithWeatherService = () =>(Wrapped)=>{
    return (props)=>{
        return(
            <WeatherServiceConsumer>
            {
                (weather)=>{
                    return (<Wrapped {...props}
                    weather={weather}/>)
                }
            }
            </WeatherServiceConsumer>
        )
    }
}
export default WithWeatherService