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

    // setSearchResults([{id: 0, title: "Test Song", time: 36, artist: "A. A. Ron Balakay", genre: "Heavy Metal", image: "https://i.imgur.com/0YFaa3H.jpeg"}]) // Used to test.
  }
  return (
    <div id="songSearch">
      {/* <p>The place to look for songs.</p> */}
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
