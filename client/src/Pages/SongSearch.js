import { useState } from 'react'
import SearchBar from '../Components/SearchBar'
import SongCard from '../Components/SongCard'
// import { BASE_URL } from '../services/api'
// import Client from '../services/api'
import axios from 'axios'

const SongSearch = ({
  songSearchFilters,
  setSongSearchFilters,
  handleSongSelect
}) => {
  //State
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState(null)
  //Functions

  const options = {
    method: 'GET',
    url: 'https://spotify23.p.rapidapi.com/search/',
    params: {
      q: `${search}`,
      type: 'multi',
      offset: '0',
      limit: '9',
      numberOfTopResults: '5'
    },
    headers: {
      'X-RapidAPI-Key': '23ff26e990msh4c310288556d19ap115d19jsnb0dedeb0f45c',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  }

  const handleSearchSubmit = async (e, value) => {
    e.preventDefault()
    await axios
      .request(options)
      .then(function (response) {
        setSearchResults(response.data.tracks.items)
      })
      .catch(function (error) {
        console.error(error)
      })

    setSearch(value)
    // const res = await Client.get(`${BASE_URL}/api/song`, {
    //   params: songSearchFilters
    // })
    // setSearchResults(res.data)
  }
  return (
    <div id="songSearch">
      <div id="searchOptions">
        <SearchBar
          search={search}
          setSearch={setSearch}
          songSearchFilters={songSearchFilters}
          setSongSearchFilters={setSongSearchFilters}
          handleSearchSubmit={handleSearchSubmit}
        />
      </div>
      <h4 className="searchResults">Search Results: </h4>
      <div className="songCardHolder">
        {searchResults?.map((song, index) => (
          <SongCard
            key={song.data.id}
            song={song}
            handleSongSelect={() => handleSongSelect(song)}
          />
        ))}
      </div>
    </div>
  )
}

export default SongSearch
