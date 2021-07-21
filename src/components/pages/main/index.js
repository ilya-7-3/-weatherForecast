import React,{Component} from 'react'
import WithWeatherService from '../../hoc/withWeatherService'
import {getWeatherThunkCreator} from '../../../actions/index'
import { connect } from 'react-redux'
import './index.css'
import HourlyWeather from '../../hourly-weather/hourly-weather'
import DailyWeather from '../../daily-weather/daily-weather'
import DescrWeather from '../../descr-weather/descr-weather'
import ErrorIndicator from '../../ErrorIndicator/errorIndicator'
import Spiner from '../../spiner/spiner'

class Main extends Component{
    
    componentDidMount(){
        this.props.getWeather(this.props.weather)
    }
    
    
    render(){
      const {weatherData,weatherError,loadingWeather} = this.props
      if(weatherData.length!==0){
        return(
            <div className="weather">
            <div className="weather__location">
                {weatherData.timezone}
                </div>
            <div className="weather__descr">
                {weatherData.current.weather[0].description}
            </div>
            <div className="weather__temp">
                {Math.round(weatherData.current.temp)}°
            </div>
            <div className="weather__min__max">
                <div>
                    Макс. {Math.round(Math.round(weatherData.daily[0].temp.max))}°,
                    Мин. {Math.round(Math.round(weatherData.daily[0].temp.min))}°
                </div>
            </div>
            <HourlyWeather/>
            <DailyWeather/>
            <DescrWeather/>
            </div>
            )
      }
      if(weatherError){
        return(<ErrorIndicator/>)
      }
      if(loadingWeather){
        return(<Spiner/>)
      }
      else{
          return (<h3 className="text-center mt-5">Загрузка данных...</h3>)
      }
      
      
}
}
const mapStateToProps = ({weatherData,weatherError,loadingWeather}) =>{
    return{
        weatherData,
        weatherError,
        loadingWeather
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getWeather:(weather)=>{
            dispatch(getWeatherThunkCreator(weather))
        }
    }
} 

export default WithWeatherService()(connect(mapStateToProps,mapDispatchToProps)(Main))
