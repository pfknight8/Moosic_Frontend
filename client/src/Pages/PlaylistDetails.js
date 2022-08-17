import SongCard from '../Components/SongCard'
import { useNavigate } from 'react-router-dom'
import Client, { BASE_URL } from '../services/api'
import { useState, useEffect } from 'react'

const PlaylistDetails = ({
  selectedPlaylist,
  handleSongSelect,
  setSelectedPlaylist,
  user,
  authenticated
}) => {
  //State
  const navigate = useNavigate()
  const [isFormActive, setIsFormActive] = useState(false)
  const [updatePl, toggleUpdatePl] = useState(false)
  const [newPlaylistTitle, setNewPlaylistTitle] = useState(null)
  //Functions
  const toggleActive = (e) => {
    setIsFormActive(!isFormActive)
    if (e.target.innerHTML === 'Edit Playlist') {
      e.target.innerHTML = 'Cancel'
    } else {
      e.target.innerHTML = 'Edit Playlist'
    }
  }
  const handleUpdatePlaylist = () => {
    toggleUpdatePl(!updatePl)
  }
  const handleReturn = () => {
    setSelectedPlaylist(null)
    navigate('/profile')
  }
  const updatePlaylist = async () => {
    const res = await Client.put(
      `${BASE_URL}/api/playlist/${selectedPlaylist.id}`,
      { title: newPlaylistTitle }
    )
    toggleUpdatePl(false)
    navigate('/profile')
  }
  useEffect(() => {
    if (authenticated) {
      handleUpdatePlaylist(user)
    }
  }, [updatePl])
  const deletePlaylist = async () => {
    const res = await Client.delete(
      `${BASE_URL}/api/playlist/${selectedPlaylist.id}`
    )
    navigate('/profile')
  }
  return (
    <div id="playlistDetailsPage">
      <div>
        {isFormActive}
        <button className="buttonz" onClick={toggleActive}>
          Edit Playlist
        </button>
      </div>
      <div>
        <button className="buttonz" onClick={handleUpdatePlaylist}>
          {updatePl ? 'Cancel' : 'Edit Playlist'}
        </button>
        {updatePl ? (
          <input
            placeholder="Playlist Name"
            onChange={(e) => setNewPlaylistTitle(e.target.value)}
          />
        ) : null}
        {updatePl ? (
          <button className="buttonz" onClick={updatePlaylist}>
            Update Playlist
          </button>
        ) : null}
      </div>
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
