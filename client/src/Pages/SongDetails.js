const SongDetails = ({song}) => {
  //State
  //Functions
  return (
    <div id='songDetailsPage'>
      <h1>Title: {song.title}</h1>
      <div className="img-content">
        {song.image ? <img className="songCardImg" src={song.image} alt={song.title} /> : null}
      </div>
      <div className="info-box">
        <h3>Artist: {song.artist}</h3>
        <h4>Length: {song.time} seconds</h4>
      </div>
      <p>A song's detail page.</p>
      <p>Song Details after clicking on a song card. Is there anything else we should include here? Mafbe check what the 3rd party API will bring in, can expand our model to accomodate it then.</p>
    </div>
  )
}

export default SongDetails