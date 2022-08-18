import { useNavigate } from 'react-router-dom'
import Client, { BASE_URL } from '../services/api'

const PlaylistSongDetails = ({
  selectedPlaylist,
  userPLSong,
  setUserPLSong,
  handleGoToSearch,
  user,
  authenticated
}) => {
  //State
  const navigate = useNavigate()
  //Functions
  const handleBackToPlaylist = (PL) => {
    setUserPLSong(null)
    navigate(`/profile/playlist/${PL.id}`)
  }
  const handleRemoveFromPlaylist = async (playlist_id) => {
    let song_id = userPLSong.id
    let response = await Client.delete(
      `${BASE_URL}/api/playlist/addsong/${playlist_id}/${song_id}`
    )
    console.log(response.data)
    if (!response.data.message) {
      alert(`Database Error!`)
    } else {
      alert(response.data.message)
    }
    navigate(`/profile`)
  }

  return (
    <div id="songDetailsPage">
      <h1>Song: {userPLSong.name}</h1>
      <div className="img-content">
        {userPLSong.image ? (
          <img
            className="songCardImg"
            src={userPLSong.image}
            alt={userPLSong.name}
            width="400"
          />
        ) : null}
      </div>
      <div className="info-box">
        <h3 className="artist">Artist: {userPLSong.name}</h3>
        <h4 className="length">Length: {userPLSong.time / 1000} seconds</h4>
      </div>
      <button className="buttonz" onClick={handleGoToSearch}>
        Search Songs
      </button>
      <button
        className="buttonZ"
        onClick={() => handleRemoveFromPlaylist(selectedPlaylist.id)}
      >
        Remove Song from Playlist
      </button>
      {selectedPlaylist ? (
        <button
          className="buttonz"
          onClick={() => handleBackToPlaylist(selectedPlaylist)}
        >
          Back to Playlist
        </button>
      ) : (
        <p>Navigation Error! Lost knowledge of which playlist you came from.</p>
      )}
    </div>
  )
}

export default PlaylistSongDetails
