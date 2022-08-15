import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PlaylistCard from '../Components/PlaylistCard'

const Profile = ({ user, authenticated, userPlaylists, handlePlaylistSelect, handleUserPlaylists }) => {
  //State
  const navigate = useNavigate()
  useEffect(() => {
    if (authenticated) {handleUserPlaylists(user)}
  }, [])
  //Functions
  return ( (user && authenticated) ? (
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
    ) : (
      <div className='protectedContent'>
        <h3>Wait, who are you?!</h3>
        <h4>You must be signed in to view this content!</h4>
        <button onClick={() => navigate('/userLogin')}>Sign in</button>
      </div>
    )
  )
}

export default Profile

// Will store user's info, with buttons to change (for the update functions), or to delete account.

// Will also display their playlists...as playlist cards.
