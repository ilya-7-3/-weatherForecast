import React from 'react'
import ReactDOM  from 'react-dom'
import App from './components/app/index'
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry'
import {BrowserRouter as Router} from 'react-router-dom'
import Weather from './services/weather'
import { Provider } from 'react-redux'
import store from './store'
import { WeatherServiceProvider } from './components/weatherServiceContext/weatherServiceContext'

const weather = new Weather()

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <WeatherServiceProvider value={weather}>
                <Router>
                    <App/>
                </Router>
            </WeatherServiceProvider>
        </ErrorBoundry>
    </Provider>
    
,document.getElementById('root'));