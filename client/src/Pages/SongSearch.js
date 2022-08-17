import { useState } from 'react'
import SearchBar from '../Components/SearchBar'
import SongCard from '../Components/SongCard'
import { BASE_URL } from '../services/api'
import Client from '../services/api'
const SongSearch = ({
  songSearchFilters,
  setSongSearchFilters,
  handleSongSelect
}) => {
  //State
  const [searchResults, setSearchResults] = useState(null)
  //Functions
  const handleSearchSubmit = async (e) => {
    e.preventDefault()
    const res = await Client.get(`${BASE_URL}/api/song`, {
      params: songSearchFilters
    })
    setSearchResults(res.data)
  }
  return (
    <div id="songSearch">
      <div id="searchOptions">
        <SearchBar
          songSearchFilters={songSearchFilters}
          setSongSearchFilters={setSongSearchFilters}
          handleSearchSubmit={handleSearchSubmit}
        />
      </div>
      <h4 className="searchResults">Search Results: </h4>
      <div className="songCardHolder">
        {searchResults?.map((song, index) => (
          <SongCard
            key={song.id}
            song={song}
            handleSongSelect={() => handleSongSelect(song)}
          />
        ))}
      </div>
    </div>
  )
}

export default SongSearch
