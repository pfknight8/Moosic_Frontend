const PlaylistSongCard = ({ song, handlePLSongSelect }) => {
  //
  return (
    <div className='songCard'>
      <div className="img-content">
        {song.image ? (
          <img
            className="songCardImg"
            src={song.image}
            alt={song.name}
            width="300"
          />
        ) : null}
      </div>
      <div className="info-box">
        <h2 className="song">Song: {song.name}</h2>
      </div>
      <button className="buttonz" onClick={handlePLSongSelect}>
        Click for Details
      </button>
    </div>
  )
}

export default PlaylistSongCard