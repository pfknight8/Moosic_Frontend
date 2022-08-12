const PlaylistDetails = ({ selectedPlaylist, handleSongSelect }) => {
  //State
  //Functions
  return (
    <div id="playlistDetailsPage">
      <p>A playlist's detail page.</p>
      <p>Playlist will display songs as song cards.</p>
      <div id="songCardHolder">
        {userPlaylist?.map((song, index) => (
          <SongCard song={song} handleSelect={() => handleSelect(song)} />
        ))}
      </div>
    </div>
  )
}

export default PlaylistDetails
