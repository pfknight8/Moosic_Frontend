const SearchBar = () => {
  //State -- There is no state here! State is changed by these features, but by function brought down to this component!
  //Functions
  return (
    <form>
      <div>
        <label htmlFor="title">Title: </label>
        <input className="searchfield" id='title'></input>
      </div>
    </form>
  )
}

export default SearchBar