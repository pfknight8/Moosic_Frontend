import SongCard from "../Components/SongCard"

const PlaylistDetails = ({ playlistSongs, handleSongSelect, user, authenticated }) => {
  //State
  //Functions
  return (
    <div id="playlistDetailsPage">
      <p>A playlist's detail page.</p>
      <p>Playlist will display songs as song cards.</p>
      <div id="songCardHolder">
        {playlistSongs?.map((song, index) => (
          <SongCard song={song} handleSongSelect={() => handleSongSelect(song)} />
        ))}
      </div>
    </div>
  )
}

export default PlaylistDetails
