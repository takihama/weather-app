import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className='search-card'>
      <input type="text" placeholder="Search..." class="input-field"></input>
      <button type="submit" class="search-button">Set</button>
    </div>
  )
}

export default SearchBar