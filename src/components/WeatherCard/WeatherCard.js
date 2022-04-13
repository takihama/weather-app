import './WeatherCard.css'

const WeatherCard = ({ weatherDetails }) => {
  return (
    <div className="weather-card">
      <div className='top-div'>
        <img src={weatherDetails.icon} alt={weatherDetails.condition} width="200px"/>
      </div>
      <div className='bottom-left-div'>
        <div className="temperature">{weatherDetails.temperature !== '' ? weatherDetails.temperature + '\xb0' : '\xa0'}</div>
      </div>
      <div className='bottom-middle-div'>
        <div className='weather-condition'>
          {weatherDetails.condition}
        </div>
        <div className='place'>
          {weatherDetails.place}
        </div>
      </div>
      <div className='bottom-right-div'>
        <div className='date'>
          {weatherDetails.date}
        </div>
      </div>
    </div>
  )
}

export default WeatherCard