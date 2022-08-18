const SongCard = ({ song, handleSongSelect }) => {
  //
  return (
    <div className={`songCard ${song.data.genre}Card`}>
      <div className="img-content">
        {song.data.albumOfTrack.coverArt.sources[0].url ? (
          <img
            className="songCardImg"
            src={song.data.albumOfTrack.coverArt.sources[0].url}
            alt={song.data.name}
            width="300"
          />
        ) : null}
      </div>
      <div className="info-box">
        <h2 className="song">Song: {song.data.name}</h2>
      </div>
      <button className="buttonz" onClick={handleSongSelect}>
        Click for Details
      </button>
    </div>
  )
}

export default SongCard

//The multiple classNames will be useful for formatting. The 'song.genre' template literal will allow us to conditionally format the card, if desired.
