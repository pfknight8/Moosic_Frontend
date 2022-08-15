import PlaylistCard from '../Components/PlaylistCard'

const Profile = ({ user, userPlaylists, handlePlaylistSelect }) => {
  //State
  //Functions
  return (
    <div id="profilePage">
      <p>The user's profile page.</p>
      <p>Display user information here directly.</p>
      <section>
        <div id="userInfo">
          <h2>{user.username}</h2>
          <h3>{user.email}</h3>
          <p>Wrap buttons in authentication; don't want anyone but the specific user to have access to them.</p>
          <button>Update Info</button>
          <button>Delete Account</button>
        </div>
        <div id="socialFeatures">
          <p>For Stretch goals.</p>
        </div>
      </section>
      <div className="playlistCard">
        <p>User's Playlist Here</p>
        <div id="userPlaylist">
          {userPlaylists?.map((userPlaylist, index) => (
            <PlaylistCard
              key={userPlaylist.id}
              userPlaylist={userPlaylist}
              handlePlaylistSelect={() => handlePlaylistSelect(userPlaylist)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile

// Will store user's info, with buttons to change (for the update functions), or to delete account.

// Will also display their playlists...as playlist cards.
