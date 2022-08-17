const SongCard = ({ song, handleSongSelect }) => {
  //
  return (
    <div className={`songCard ${song.genre}Card`}>
      <div className="img-content">
        {song.image ? (
          <img
            className="songCardImg"
            src={song.image}
            alt={song.title}
            width="300"
          />
        ) : null}
      </div>
      <div className="info-box">
        <h2 className="song">Song: {song.title}</h2>
      </div>
      <button className="buttonz" onClick={handleSongSelect}>
        Click for Details
      </button>
    </div>
  )
}

export default SongCard

//The multiple classNames will be useful for formatting. The 'song.genre' template literal will allow us to conditionally format the card, if desired.
