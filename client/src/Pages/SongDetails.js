import { useNavigate } from 'react-router-dom'
import Client, { BASE_URL } from '../services/api'

const SongDetails = ({
  selectedSong,
  setSelectedSong,
  handleGoToSearch,
  user,
  authenticated,
  userPlaylists,
  selectedPlaylist,
  setSelectedPlaylist
}) => {
  //State
  const navigate = useNavigate()
  //Functions
  const handleBackToPlaylist = (PL) => {
    setSelectedSong(null)
    navigate(`/profile/playlist/${PL.id}`)
  }
  const handleAddToPlaylist = async (playlist_id) => {
    let song_id = selectedSong.data.id
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
          <a className="here" href="/userLogin">
            Login
          </a>{' '}
          to add this song to a playlist
        </p>
      </div>
    )
  } else {
    selectOptions = (
      <div className="optDiv">
        <p className="msg">
          Create a{' '}
          <a className="here" href="/profile">
            playlist
          </a>
          to save this song
        </p>
      </div>
    )
  }

  return (
    <div id="songDetailsPage">
      <h1>Song: {selectedSong.data.name}</h1>
      <div className="img-content">
        {selectedSong.data.albumOfTrack.coverArt.sources[0].url ? (
          <img
            className="songCardImg"
            src={selectedSong.data.albumOfTrack.coverArt.sources[0].url}
            alt={selectedSong.data.name}
            width="400"
          />
        ) : null}
      </div>
      <div className="info-box">
        <h3 className="artist">
          Artist: {selectedSong.data.artists.items[0].profile.name}
        </h3>
        <h4 className="length">
          Length: {selectedSong.data.duration.totalMilliseconds} seconds
        </h4>
      </div>
      <button className="buttonz" onClick={handleGoToSearch}>
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
