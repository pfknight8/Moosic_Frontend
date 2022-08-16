import SongCard from '../Components/SongCard'
import { useNavigate } from 'react-router-dom'
import Client, { BASE_URL } from '../services/api'

const PlaylistDetails = ({
  selectedPlaylist,
  handleSongSelect,
  setSelectedPlaylist,
  user,
  authenticated
}) => {
  //State
  const navigate = useNavigate()
  //Functions
  const handleReturn = () => {
    setSelectedPlaylist(null)
    navigate('/profile')
  }
  const deletePlaylist = async () => {
    const res = await Client.delete(
      `${BASE_URL}/api/playlist/${selectedPlaylist.id}`
    )
    navigate('/profile')
  }
  return (
    <div id="playlistDetailsPage">
      <button
        className="buttonZ"
        onClick={() => deletePlaylist(selectedPlaylist.id)}
      >
        Delete Playlist
      </button>
      <p>A playlist's detail page.</p>
      <p>Playlist will display songs as song cards.</p>
      <div id="songCardHolder">
        {selectedPlaylist.songs?.map((song, index) => (
          <SongCard
            key={song.id}
            song={song}
            handleSongSelect={() => handleSongSelect(song)}
          />
        ))}
      </div>
      <button className="buttonz" onClick={handleReturn}>
        Return to list
      </button>
    </div>
  )
}

export default PlaylistDetails
