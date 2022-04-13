import './App.css'

import WeatherCard from '../../components/WeatherCard/WeatherCard'
import SearchBar from '../../components/SearchBar/SearchBar';

import { useState } from 'react';

const App = () => {
  const [weatherState, setWeatherState] = useState({
    searchBarInput: '',
    weatherDetails: {
      temperature: '',
      condition: '',
      place: '',
      date: ''
    }
  })

  const searchBarHandler = (event) => {
    setWeatherState({
      ...weatherState,
      searchBarInput: event.target.value
    })
  }

  const searchWeatherInfo = () => {
  }

  return (
    <div className="App">
      <div className='center-card'>
        <SearchBar filterText={weatherState.searchBarInput} searchBarHandler={searchBarHandler} searchButtonHandler={() => searchWeatherInfo()}/>
        <WeatherCard weatherDetails={weatherState.weatherDetails} />
      </div>
    </div>
  )
}

export default App;
