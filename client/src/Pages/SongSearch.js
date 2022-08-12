import { useNavigate } from 'react-router-dom'
import SearchBar from '../Components/SearchBar'
import SongCard from '../Components/SongCard'

const SongSearch = ({ songSearchFilters, setSongSearchFilters }) => {
  //State
  const navigate = useNavigate()
  //Functions
  return (
    <div id='songSearch'>
      <SearchBar />
      <p>The place to look for songs.</p>
      <p>Results to dispay here with a map function, as 'songCards'</p>
    </div>
  )
}

export default SongSearch