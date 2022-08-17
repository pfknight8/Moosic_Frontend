const SearchBar = ({
  songSearchFilters,
  setSongSearchFilters,
  handleSearchSubmit
}) => {
  const handleFormChange = (e) => {
    let formItem = e.target.value
    switch (e.target.id) {
      case 'title':
        setSongSearchFilters({ ...songSearchFilters, title: formItem })
        break
      case 'artist':
        setSongSearchFilters({ ...songSearchFilters, artist: formItem })
        break
      case 'genre':
        setSongSearchFilters({ ...songSearchFilters, genre: formItem })
        break
      default:
        alert('Something went egregiously wrong!')
    }
  }

  const handleFormReset = () => {
    setSongSearchFilters({})
  }

  return (
    <div className="searchCard">
      <p className="searchHeader">The place to look for songs.</p>
      <form onReset={handleFormReset} onSubmit={handleSearchSubmit}>
        <div className="searchField">
          <label htmlFor="title">Title: </label>
          <input
            className="searchField"
            id="title"
            onChange={handleFormChange}
            placeholder="Title"
          ></input>
        </div>
        <div className="searchField">
          <label htmlFor="artist">Artist/Band: </label>
          <input
            className="searchField"
            id="artist"
            onChange={handleFormChange}
            placeholder="Artist/Band"
          ></input>
        </div>
        <div className="searchField">
          <label htmlFor="genre">Genre: </label>
          <input
            className="searchField"
            id="genre"
            onChange={handleFormChange}
            placeholder="Genre"
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
