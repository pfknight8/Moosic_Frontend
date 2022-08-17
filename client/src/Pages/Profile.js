import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PlaylistCard from '../Components/PlaylistCard'
import UserControls from '../Components/UserControls'
import { useState } from 'react'
import Client, { BASE_URL } from '../services/api'

const Profile = ({
  user,
  authenticated,
  userPlaylists,
  handlePlaylistSelect,
  handleUserPlaylists
}) => {
  //State
  const [isFormActive, setIsFormActive] = useState(false)
  const [createNew, toggleCreateNew] = useState(false)
  const [newPlaylistTitle, setNewPlaylistTitle] = useState(null)
  const navigate = useNavigate()
  //Functions
  const toggleActive = (e) => {
    setIsFormActive(!isFormActive)
    if (e.target.innerHTML === 'Edit Account') {
      e.target.innerHTML = 'Cancel'
    } else {
      e.target.innerHTML = 'Edit Account'
    }
  }
  const handleCreatePlaylist = () => {
    toggleCreateNew(!createNew)
  }
  const submitNewPlaylist = async () => {
    await Client.post(`${BASE_URL}/api/playlist/${user.id}`, {
      title: newPlaylistTitle
    })
    toggleCreateNew(false)
    // navigate('/profile')
  }
  useEffect(() => {
    if (authenticated) {
      handleUserPlaylists(user)
    }
  }, [createNew])
  return user && authenticated ? (
    <div id="profilePage">
      <p>The user's profile page.</p>
      <p>Display user information here directly.</p>
      <section>
        <div id="userInfo">
          <h2>{user.username}</h2>
          <h3>{user.email}</h3>
          <p>
            Wrap buttons in authentication; don't want anyone but the specific
            user to have access to them.
          </p>
          {isFormActive ? <UserControls user={user} /> : null}
          <button className="buttonz" onClick={toggleActive}>
            Edit Account
          </button>
        </div>
        <div id="socialFeatures">
          <p>For Stretch goals.</p>
        </div>
      </section>
      <div id="userPlaylist">
        <p>User's Playlist Here</p>
        <button
          className="buttonz"
          id="createPL"
          onClick={handleCreatePlaylist}
        >
          {createNew ? 'Cancel' : 'Create Playlist'}
        </button>
        {createNew ? (
          <input
            placeholder="Playlist Name"
            onChange={(e) => setNewPlaylistTitle(e.target.value)}
          />
        ) : null}
        {createNew ? (
          <button className="buttonz" onClick={submitNewPlaylist}>
            Add Playlist
          </button>
        ) : null}
        <div className="playlistCard">
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
    <div className="protectedContent">
      <h3 className="needLogin">Wait, who are you?!</h3>
      <h4 className="needLogin">You must be signed in to view this content!</h4>
      <button className="buttonz" onClick={() => navigate('/userLogin')}>
        Sign in
      </button>
    </div>
  )
}

export default Profile

// Will store user's info, with buttons to change (for the update functions), or to delete account.

// Will also display their playlists...as playlist cards.
