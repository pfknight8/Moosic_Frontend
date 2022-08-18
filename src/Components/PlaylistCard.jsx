const PlaylistCard = ({ userPlaylist, handlePlaylistSelect }) => {
  
  return (
    <div className="playlist">
      <h2 className="playlistName"> {userPlaylist.title} </h2>
      <button className="buttonz" onClick={handlePlaylistSelect}>
        Click for Details
      </button>
    </div>
  )
}

export default PlaylistCard
