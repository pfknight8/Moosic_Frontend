import { useNavigate } from 'react-router-dom'
import Client, { BASE_URL } from '../services/api'

const SongDetails = ({
  selectedSong,
  setSelectedSong,
  user,
  authenticated,
  userPlaylists,
  selectedPlaylist,
  setSelectedPlaylist
}) => {
  //State
  const navigate = useNavigate()
  //Functions
  const handleBackToSearch = () => {
    setSelectedSong(null)
    setSelectedPlaylist(null)
    navigate('/songs')
  }
  const handleBackToPlaylist = (PL) => {
    setSelectedSong(null)
    navigate(`/profile/playlist/${PL.id}`)
  }
  const handleAddToPlaylist = async (playlist_id) => {
    let song_id = selectedSong.id
    let response = await Client.post(
      `${BASE_URL}/api/playlist/addsong/${playlist_id}/${song_id}`
    )
    console.log(response.data)
    if (!response.data.message) {
      alert(`song added!`)
    } else {
      alert(response.data.message)
    }
  }

  let selectOptions
  if (user && userPlaylists && userPlaylists.length > 0) {
    selectOptions = (
      <div className="optDiv">
        <h4 className="msg">Add to a playlist</h4>
        {userPlaylists.map((playlist) => (
          <button
            className="buttonz"
            key={playlist.id}
            onClick={() => handleAddToPlaylist(playlist.id)}
          >
            {playlist.title}
          </button>
        ))}
      </div>
    )
  } else if (!user) {
    selectOptions = (
      <div className="optDiv">
        <p className="msg">
          You need to{' '}
          <a className="here" href="/userLogin">
            login!
          </a>
        </p>
      </div>
    )
  } else {
    selectOptions = (
      <div className="optDiv">
        <p className="msg">
          You need to create at least one{' '}
          <a className="here" href="/profile">
            playlist!
          </a>
        </p>
      </div>
    )
  }

  return (
    <div id="songDetailsPage">
      <h1>Title: {selectedSong.title}</h1>
      <div className="img-content">
        {selectedSong.image ? (
          <img
            className="songCardImg"
            src={selectedSong.image}
            alt={selectedSong.title}
            width="400"
          />
        ) : null}
      </div>
      <div className="info-box">
        <h3>Artist: {selectedSong.artist}</h3>
        <h4>Length: {selectedSong.time} minutes</h4>
      </div>
      <button className="buttonz" onClick={handleBackToSearch}>
        Back to Search
      </button>
      {selectedPlaylist ? (
        <button
          className="buttonz"
          onClick={() => handleBackToPlaylist(selectedPlaylist)}
        >
          Back to Playlist
        </button>
      ) : null}
      {!selectedPlaylist ? selectOptions : null}
    </div>
  )
}

export default SongDetails
