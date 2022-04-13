import './App.css'

import WeatherCard from '../../components/WeatherCard/WeatherCard'
import SearchBar from '../../components/SearchBar/SearchBar';

const App = () => {
  return (
    <div className="App">
      <div className='center-card'>
        <SearchBar />
        <WeatherCard />
      </div>
    </div>
  )
}

export default App;
