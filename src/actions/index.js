const weatherRequested = () =>{
    return{
        type:'FETCH_WEATHER_REQUEST'
    }
}

const weatherSuccess = (weather) =>{
    return{
        type:'FETCH_WEATHER_SUCCESS',
        payload:weather
    }
}
const weatherError = () =>{
    return{
        type:'FETCH_WEATHER_FAILED'
    }
}


const getWeatherThunkCreator = (weather) =>{
    return (dispatch)=>{
        navigator.geolocation.getCurrentPosition(function(position) {
            dispatch(weatherRequested());
            weather.getWeather(position.coords.latitude,position.coords.longitude)
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                dispatch(weatherSuccess(data))
            })
            .catch(()=>{
                dispatch(weatherError())
            })
            }); 
        
            
    }

}

export{
    weatherRequested,
    weatherSuccess,
    getWeatherThunkCreator
}