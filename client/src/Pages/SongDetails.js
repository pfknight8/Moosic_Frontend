const SongDetails = ({selectedSong}) => {
  //State
  //Functions
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
    </div>
  )
}

export default SongDetails