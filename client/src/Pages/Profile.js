import { useNavigate } from 'react-router-dom'
import PlaylistCard from '../Components/PlaylistCard'

const Profile = ({ playlist, handleSelect }) => {
  //State
  const navigate = useNavigate()
  //Functions
  return (
    <div id="profilePage">
      <p>The user's profile page.</p>
      <p>Put playlist cards here with a map function.</p>
      <div className="playlistCard">
        <p>User's Playlist Here</p>
        <div id="userPlaylist">
          {playlist?.map((userPlaylist, index) => (
            <PlaylistCard
              userPlaylist={userPlaylist}
              handleSelect={() => handleSelect(userPlaylist)}
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
