const PlaylistCard = ({ userPlaylist, handlePlaylistSelect }) => {
  //
  return (
    <div className="playlistCard">
      <h2>{userPlaylist.title}</h2>
      <button className="buttonz" onClick={handlePlaylistSelect}>
        Click for Details
      </button>
    </div>
  )
}

export default PlaylistCard

// Will be used to display a user's playlists on their profile page.
