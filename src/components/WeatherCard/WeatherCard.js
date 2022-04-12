import Date from './Date/Date'
import Icon from '../../elements/Icon/Icon'
import Place from './/Place/Place'
import SearchBar from './SearchBar/SearchBar'
import Temperature from './/Temperature/Temperature'
import WeatherCondition from './/WeatherCondition/WeatherCondition'
import './WeatherCard.css'

const WeatherCard = () => {
  return (
    <div className="weather-card">
      <div className="top-div">
        <SearchBar/>
      </div>
      <div className='middle-div'>
        <Icon/>
      </div>
      <div className='bottom-left-div'>
        <Temperature/>
      </div>
      <div className='bottom-middle-div'>
        <WeatherCondition/>
        <Place/>
      </div>
      <div className='bottom-right-div'>
        <Date/>
      </div>
    </div>
  )
}

export default WeatherCard