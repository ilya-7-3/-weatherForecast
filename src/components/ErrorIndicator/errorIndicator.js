import errorImg from '../ErrorIndicator/error.png'
import './errorIndicator.css'

const ErrorIndicator = ()=> {
    return(
        <div className="error">
        <img src={errorImg} alt="Error"/>
        <div className="alert alert-danger mt-2" role="alert">
        Извините, произошла ошибка загрузки данных...
        </div>
        </div>
    )
}

export default ErrorIndicator