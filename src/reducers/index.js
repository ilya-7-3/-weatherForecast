const initialState={
    weatherData:[],
    loadingWeather:false,
    weatherError:false
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'FETCH_WEATHER_REQUEST':
            return{
                ...state,
                loadingWeather:true
            }
        case 'FETCH_WEATHER_SUCCESS':
            return{
                ...state,
                loadingWeather:false,
                weatherData:action.payload
            }
        case 'FETCH_WEATHER_FAILED':
            return{
                ...state,
                weatherError:true
            }    
        default:
            return state;
    }
}

export default reducer