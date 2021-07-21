const getDay = (num) => {
    var day=''
    switch (num){
         case 0:
         day='Воскресенье'  
             return day
         case 1:
             day='Понедельник'
             break
         case 2:
             day='Вторник'
             break
         case 3:
             day='Среда'
             break
         case 4:
             day='Четверг'
             break
         case 5:
             day='Пятница'
             break
         case 6:
             day='Суббота'
             break
                                                                                        
        default :
        break
    }
    return day
}

export default getDay

const getFixTime = (time)=>{
    if(time<10){
        time='0'+time
        return time
    }
    else{
        return time
    }
    
}

const getFixPercent = (percent)=>{
        return `${percent*100}%`
}

export {getFixTime,getFixPercent}