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
  // const handleFormChange = (e) => {
  //   let formItem = e.target.value
  //   switch (e.target.id) {
  //     case 'title':
  //       setSongSearchFilters({ ...songSearchFilters, title: formItem })
  //       break
  //     case 'artist':
  //       setSongSearchFilters({ ...songSearchFilters, artist: formItem })
  //       break
  //     case 'genre':
  //       setSongSearchFilters({ ...songSearchFilters, genre: formItem })
  //       break
  //     default:
  //       alert('Something went egregiously wrong!')
  //   }
  // }

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
            placeholder="search"
          ></input>
        </div>
        {/* <div className="searchField">
          <label htmlFor="title">TITLE: </label>
          <input
            className="searchField"
            id="title"
            onChange={handleFormChange}
            placeholder="Title"
          ></input>
        </div>
        <div className="searchField">
          <label htmlFor="artist">ARTIST: </label>
          <input
            className="searchField"
            id="artist"
            // onChange={handleFormChange}
            placeholder="Artist"
          ></input>
        </div>
        <div className="searchField">
          <label htmlFor="genre">GENRE: </label>
          <input
            className="searchField"
            id="genre"
            onChange={handleFormChange}
            placeholder="Genre"
          ></input>
        </div> */}
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
