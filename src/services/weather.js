export default class Weather{
    async getWeather(lat,lon){
       return await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&lang=ru&appid=5fcd831e17b56bd735b23b58efc91296`)
    }      
    
}
