import { useNavigate } from "react-router-dom"

const SongDetails = ({selectedSong, setSelectedSong, user, authenticated, songSearchFilters, selectedPlaylist}) => {
  //State
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
      {Object.keys(songSearchFilters).length > 0 ? <button onClick={handleBackToSearch}>Back to Search</button> : null}
      {selectedPlaylist ? <button onClick={() => handleBackToPlaylist(selectedPlaylist)}>Back to Playlist</button> : null}
      {!selectedPlaylist ? <button>Add to Playlist</button> : null}
    </div>
  )
}

export default SongDetails