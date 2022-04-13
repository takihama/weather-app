import './SearchBar.css'

const SearchBar = ({ filterText, searchBarHandler, searchButtonHandler }) => {
  return (
    <div className='search-card'>
      <input type="text" value={filterText} onChange={searchBarHandler} placeholder="Search..." className="input-field"></input>
      <button type="submit" className="search-button" onClick={searchButtonHandler}>Set</button>
    </div>
  )
}

export default SearchBar