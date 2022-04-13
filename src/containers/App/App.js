import './App.css'

import ErrorCard from '../../components/ErrorCard/ErrorCard';
import LoadingCard from '../../components/LoadingCard/LoadingCard';
import WeatherCard from '../../components/WeatherCard/WeatherCard'
import SearchBar from '../../components/SearchBar/SearchBar';

import { useState } from 'react';
import axios from 'axios'
import PreviewCard from '../../components/PreviewCard/PreviewCard';

const App = () => {
  const weather_api_key = process.env.REACT_APP_WEATHER_API_KEY

  const [weatherState, setWeatherState] = useState({
    searchBarInput: '',
    weatherDetails: {
      temperature: '',
      condition: '',
      place: '',
      date: '',
      icon: ''
    },
    loading: false,
    error: ''
  })

  const searchBarHandler = (event) => {
    setWeatherState({
      ...weatherState,
      searchBarInput: event.target.value
    })
  }

  const searchWeatherInfo = () => {
    setWeatherState({
      ...weatherState,
      loading: true
    })

    // Use openweathermap passing city as argument and necesarry api key
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${weatherState.searchBarInput}&units=metric&appid=${weather_api_key}`)
      .then(response => {
        const weatherIcon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`

        // Convert unix time to date, and substracts the local machine offset
        const auxDatetime = new Date((response.data.dt + response.data.timezone) * 1000)
        const datetime = new Date(auxDatetime.getTime() + auxDatetime.getTimezoneOffset() * 60000)
        const date = datetime.toLocaleString("en-US", { weekday: 'short', day: 'numeric' })

        setWeatherState({
          ...weatherState,
          weatherDetails: {
            temperature: Math.round(response.data.main.temp),
            condition: response.data.weather[0].description,
            place: response.data.name,
            date: date,
            icon: weatherIcon
          },
          loading: false,
          error: response.status
        })
      })
      .catch(err => {
        setWeatherState({
          ...weatherState,
          error: err.response.status
        })
      })
  }

  return (
    <div className="App">
      <div className='center-card'>
        <SearchBar filterText={weatherState.searchBarInput} searchBarHandler={searchBarHandler} searchButtonHandler={() => searchWeatherInfo()} />

        {weatherState.error === '' ?
          <PreviewCard /> :
          weatherState.error === 200 ?
            !weatherState.loading ?
              <WeatherCard weatherDetails={weatherState.weatherDetails} /> :
              <LoadingCard /> :
            <ErrorCard statusCode={weatherState.error} />
        }
      </div>
    </div>
  )
}

export default App;
