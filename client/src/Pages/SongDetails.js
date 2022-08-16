import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Client, { BASE_URL } from "../services/api"

const SongDetails = ({
  selectedSong,
  setSelectedSong,
  user,
  authenticated,
  userPlaylists,
  selectedPlaylist
}) => {
  //State
  const [toPlaylist, setToPlaylist] = useState(null)
  const navigate = useNavigate()
  //Functions
  const handleBackToSearch = () => {
    setSelectedSong(null)
    navigate('/songs')
  }
  const handleBackToPlaylist = (PL) => {
    setSelectedSong(null)
    navigate(`/profile/playlist/${PL.id}`)
  }
  const handleAddToPlaylist = async (playlist_id) => {
    let song_id = selectedSong.id
    let response = await Client.post(`${BASE_URL}/api/playlist/addsong/${playlist_id}/${song_id}`)
    console.log(response.data)
    if (!response.data.message) {
      alert(`song added!`)
    } else {
      alert(response.data.message)
    }
  }

  let selectOptions;
  if (userPlaylists && userPlaylists.length > 0) {
    selectOptions = (
      <div className="optDiv">
        <h4>Add to a playlist</h4>
        {userPlaylists.map((playlist) => (
          <button onClick={() => handleAddToPlaylist(playlist.id)}>{playlist.title}</button>
        ))}
      </div>
    )
  } else if (!user) {
    selectOptions = (
      <div className="optDiv">
        <p>You need to sign in!</p>
      </div>
    )
  } else {
    selectOptions = (
      <div className="optDiv">
        <p>You need to create at least one playlist!</p>
      </div>
    )      
  }

  return (
    <div id='songDetailsPage'>
      <h1>Title: {selectedSong.title}</h1>
      <div className="img-content">
        {selectedSong.image ? <img className="songCardImg" src={selectedSong.image} alt={selectedSong.title} width="400"/> : null}
      </div>
      <div className="info-box">
        <h3>Artist: {selectedSong.artist}</h3>
        <h4>Length: {selectedSong.time} seconds</h4>
      </div>
      <p>A selectedSong's detail page.</p>
      <p>Song Details after clicking on a selectedSong card. Is there anything else we should include here? Mafbe check what the 3rd party API will bring in, can expand our model to accomodate it then.</p>
      <button onClick={handleBackToSearch}>Back to Search</button>
      {selectedPlaylist ? <button onClick={() => handleBackToPlaylist(selectedPlaylist)}>Back to Playlist</button> : null}
      {!selectedPlaylist ? selectOptions : null}
    </div>
  )
}

export default SongDetails