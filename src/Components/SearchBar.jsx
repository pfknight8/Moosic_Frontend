const SearchBar = ({
  search,
  setSearch,
  songSearchFilters,
  setSongSearchFilters,
  handleSearchSubmit
}) => {
  const handleFormChange = (e) => {
    setSearch(e.target.value)
  }

  const handleFormReset = () => {
    setSongSearchFilters({})
  }

  return (
    <div className="searchCard">
      <p className="searchHeader">SEARCH</p>
      <form onReset={handleFormReset} onSubmit={handleSearchSubmit}>
        <div className="searchField">
          <label htmlFor="search">SEARCH: </label>
          <input
            className="searchField"
            id="search"
            onChange={handleFormChange}
            placeholder="Artists or songs"
          ></input>
        </div>
        <button className="buttonZ" type="reset" value="Reset">
          Reset
        </button>
        <button className="buttonz" type="submit">
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar
