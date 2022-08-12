import PlaylistDetails from "../Pages/PlaylistDetails"

const PlaylistCard = ({playlist}) => {
  //
  return (
    <div className='playlistCard'>
    <p>User's Playlist Here</p>
      <div id='userPlaylist'>
        {playlist?.map((userPlaylist, index) => (
          <PlaylistDetails userPlaylist={userPlaylist} handleSelect={() => handleSelect(userPlaylist)}/>
        ))}
      </div>
    </div>
  )
}

export default PlaylistCard

// Will be used to display a user's playlists on their profile page.