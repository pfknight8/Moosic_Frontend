import { useNavigate } from 'react-router-dom'
import SearchBar from '../Components/SearchBar'
import SongCard from '../Components/SongCard'

const SongSearch = ({ songSearchFilters, setSongSearchFilters, handleSongSelect, songList }) => {
  //State
  const navigate = useNavigate()
  //Functions
  const handleSelect = (song) => {
    //may move up a level.
    // for testing:
    alert("Selected a song!")
    // Real:
    // setSelectedSong(song)
    // navigate( to the url for the the song details page )
  }
  //
  return (
    <div id='songSearch'>
      <p>The place to look for songs.</p>
      <div id='searchOptions'>
        <SearchBar
          songSearchFilters={songSearchFilters}
          setSongSearchFilters={setSongSearchFilters}
        />
      </div>
      <h4>Search Results: </h4>
      <div id='songCardHolder'>
        {songList?.map((song, index) => (
          <SongCard song={song} handleSelect={() => handleSelect(song)}/>
        ))}
      </div>
    </div>
  )
}

export default SongSearch
