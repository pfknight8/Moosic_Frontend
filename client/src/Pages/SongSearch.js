import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import SearchBar from '../Components/SearchBar'
import SongCard from '../Components/SongCard'

const SongSearch = ({ songSearchFilters, setSongSearchFilters, handleSongSelect, songList }) => {
  //State
  const [searchResults, setSearchResults] = useState(null)
  //Functions
  const handleSearchSubmit = async (e) => {
    e.preventDefault()
    // res = axios call using songSearchFilters
    // setSearchResults to res.'w/e the song collection is'
    setSearchResults([{id: 0, title: "Test Song", time: 36, artist: "A. A. Ron Balakay", genre: "Heavy Metal", image: "https://i.imgur.com/0YFaa3H.jpeg"}]) // Used to test.
    // may want to move to App.js, discuss with teammates.
    // songList may be reused in the playlist card to hold the songs in a similar way (rename appropriately).
  }
  return (
    <div id='songSearch'>
      <p>The place to look for songs.</p>
      <div id='searchOptions'>
        <SearchBar
          songSearchFilters={songSearchFilters}
          setSongSearchFilters={setSongSearchFilters}
          handleSearchSubmit={handleSearchSubmit} 
        />
      </div>
      <h4>Search Results: </h4>
      <div id='songCardHolder'>
        {searchResults?.map((song, index) => (
          <SongCard key={song.id} song={song} handleSongSelect={() => handleSongSelect(song)}/>
        ))}
      </div>
    </div>
  )
}

export default SongSearch
