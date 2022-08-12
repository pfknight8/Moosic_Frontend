const SongCard = ({song, handleSelect}) => {
  //
  return (
    <div className={`songCard ${song.genre}Card`}>
      <div className="img-content">
        {song.image ? <img className="songCardImg" src={song.image} alt={song.title} /> : null}
      </div>
      <div className="info-box">
        <h2>Title: {song.title}</h2>
      </div>
      <button onClick={handleSelect}>Click for Details</button>
    </div>
  )
}

export default SongCard

//The multiple classNames will be useful for formatting. The 'song.genre' template literal will allow us to conditionally format the card, if desired.