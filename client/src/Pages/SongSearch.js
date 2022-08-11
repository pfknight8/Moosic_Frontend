import { useNavigate } from 'react-router-dom'
import SearchBar from '../Components/SearchBar'

const SongSearch = () => {
  //State
  const navigate = useNavigate()
  //Functions
  return (
    <div id='songSearch'>
      <p>The place to look for songs.</p>
    </div>
  )
}

export default SongSearch