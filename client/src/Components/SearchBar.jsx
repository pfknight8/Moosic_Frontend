const SearchBar = () => {
  //State -- There is no state here! State is changed by these features, but by function brought down to this component!
  //Functions -- Consider moving handleChange functions up; I liked having them here for organization, with the required state variables & functions passed into this component as props.
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