import './WeatherCard.css'

const WeatherCard = () => {
  return (
    <div className="weather-card">
      <div className='top-div'>
        <i className='icon wi wi-night-sleet'></i>
      </div>
      <div className='bottom-left-div'>
        <div class="temperature">25&deg;</div>
      </div>
      <div className='bottom-middle-div'>
        <div className='weather-condition'>
          Cloudy
        </div>
        <div className='place'>
          New York, New York
        </div>
      </div>
      <div className='bottom-right-div'>
        <div className='date'>
          1st Jan
        </div>
      </div>
    </div>
  )
}

export default WeatherCard