import SongCard from "../Components/SongCard"
import { useNavigate } from "react-router-dom"

const PlaylistDetails = ({ selectedPlaylist, handleSongSelect, setSelectedPlaylist, user, authenticated }) => {
  //State
  const navigate = useNavigate()
  //Functions
  const handleReturn = () => {
    setSelectedPlaylist(null)
    navigate('/profile')
  }
  return (
    <div id="playlistDetailsPage">
      <p>A playlist's detail page.</p>
      <p>Playlist will display songs as song cards.</p>
      <div id="songCardHolder">
        {selectedPlaylist.songs?.map((song, index) => (
          <SongCard key={song.id} song={song} handleSongSelect={() => handleSongSelect(song)} />
        ))}
      </div>
      <button onClick={handleReturn}>Return to list</button>
    </div>
  )
}

export default PlaylistDetails
