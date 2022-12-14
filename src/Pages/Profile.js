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
  handleUserPlaylists,
  setSelectedPlaylist,
  LogOut
}) => {
  
  const [isFormActive, setIsFormActive] = useState(false)
  const [createNew, toggleCreateNew] = useState(false)
  const [newPlaylistTitle, setNewPlaylistTitle] = useState(null)
  const navigate = useNavigate()
  
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
    navigate('/profile')
  }
  useEffect(() => {
    if (authenticated) {
      handleUserPlaylists(user)
      setSelectedPlaylist(null)
    }
  }, [createNew])
  return user && authenticated ? (
    <div id="profilePage">
      <section>
        <div id="userInfo">
          {isFormActive ? <UserControls user={user} LogOut={LogOut} /> : null}
          <button className="editAccountButton" onClick={toggleActive}>
            Edit Account
          </button>
        </div>
        <h2 className="username">{user.username}</h2>
        <div id="addPlaylistButtonAndCreatePlaylist">
          <button
            className="buttonz"
            id="createPL"
            onClick={handleCreatePlaylist}
          >
            {createNew ? 'Cancel' : 'Create Playlist'}
          </button>
          {createNew ? (
            <input
              className="createPlaylistName"
              placeholder="Playlist Name"
              onChange={(e) => setNewPlaylistTitle(e.target.value)}
            />
          ) : null}
          {createNew ? (
            <button className="buttonz" onClick={submitNewPlaylist}>
              Add Playlist
            </button>
          ) : null}
        </div>
      </section>
      <div id="userPlaylist">
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
      <h4 className="needLogin">Sign in to create or view playlists</h4>
      <button className="buttonz" onClick={() => navigate('/userLogin')}>
        Sign in
      </button>
    </div>
  )
}

export default Profile
