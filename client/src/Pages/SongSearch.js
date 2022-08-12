import { useNavigate } from 'react-router-dom'
import SearchBar from '../Components/SearchBar'
import SongCard from '../Components/SongCard'

const SongSearch = ({ songSearchFilters, setSongSearchFilters, songList }) => {
  //State
  const navigate = useNavigate()
  //Functions
  const handleSelect = () => {
    //may move up a level.
    alert("Selected a song!")
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
