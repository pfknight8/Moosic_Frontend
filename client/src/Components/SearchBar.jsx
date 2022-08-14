const SearchBar = ({ songSearchFilters, setSongSearchFilters, handleSearchSubmit }) => {
  //State -- There is no state here! State is changed by these features, but by function brought down to this component!
  //Functions -- Consider moving handleChange functions up; I liked having them here for organization, with the required state variables & functions passed into this component as props.
  const handleFormChange = (e) => {
    let formItem = e.target.value
    switch (e.target.id) {
      case 'title':
        setSongSearchFilters({ ...songSearchFilters, title: formItem })
        break
      // case 'minRunTime':
      //   setSongSearchFilters({...songSearchFilters, minRunTime: formItem})
      //   break
      // case 'maxRunTime':
      //   setSongSearchFilters({...songSearchFilters, maxRunTime: formItem})
      //   break
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
    <form onReset={handleFormReset} onSubmit={handleSearchSubmit}>
      <div>
        <label htmlFor="title">Title: </label>
        <input
          className="searchfield"
          id="title"
          onChange={handleFormChange}
          // placeholder="Title"
          value={songSearchFilters.title}
        ></input>
      </div>
      {/* <div>
        <label htmlFor="minRunTime">Min Time (seconds): </label>
        <input
          className="searchfield"
          id="minRunTime"
          onChange={handleFormChange}
          placeholder="Greater Than, as Seconds"
        ></input>
      </div>
      <div>
        <label htmlFor="maxRunTime">Max Time (seonds): </label>
        <input
          className="searchfield"
          id="maxRunTime"
          onChange={handleFormChange}
          placeholder="Less Than, as Seconds"
        ></input>
      </div> */}
      <div>
        <label htmlFor="artist">Artist/Band: </label>
        <input
          className="searchfield"
          id="artist"
          onChange={handleFormChange}
          placeholder="Artist/Band"
        ></input>
      </div>
      <div>
        <label htmlFor="genre">Genre: </label>
        <input
          className="searchfield"
          id="genre"
          onChange={handleFormChange}
          placeholder="Genre"
        ></input>
      </div>
      <button type="reset" value="Reset">Reset</button>
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar

// Will need to parse run times as integers (as seconds) before searching the databse. {Will be done elsewhere, but making this note while thinking of it.}

// How do we make genres be "less specific?" The are many, depending on who you ask, so are Indie Rock, Classic Rock, or W/E Rock all going to come up if a user types in 'rock' or '___rock'? It would be hard to make a selector box with 42 genres in it, so will need a flexible user-typed-in search.

// Will need a submit button with function in order to control axios calls...don't want axios calls to happen on each keystroke.
