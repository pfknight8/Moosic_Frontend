import SongCard from '../Components/SongCard'
import { useNavigate } from 'react-router-dom'
import Client, { BASE_URL } from '../services/api'
import { useState } from 'react'
const PlaylistDetails = ({
  selectedPlaylist,
  handleSongSelect,
  setSelectedPlaylist,
  user,
  authenticated
}) => {
  //State
  const navigate = useNavigate()
  const [newPlaylistTitle, setNewPlaylistTitle] = useState(null)
  //Functions
  const handleReturn = () => {
    setSelectedPlaylist(null)
    navigate('/profile')
  }
  const updatePlaylist = async () => {
    const res = await Client.put(
      `${BASE_URL}/api/playlist/${selectedPlaylist.id}`,
      { title: newPlaylistTitle }
    )
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
        className="buttonz"
        onClick={() => updatePlaylist(selectedPlaylist.id)}
      >
        Update Playlist
      </button>
      {updatePlaylist ? (
        <input
          placeholder="Playlist Name"
          onChange={(e) => setNewPlaylistTitle(e.target.value)}
        />
      ) : null}
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
