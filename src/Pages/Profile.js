import { useNavigate } from 'react-router-dom'

const Profile = () => {
  //State
  const navigate = useNavigate()
  //Functions
  return (
    <div id='profilePage'>
      <p>The user's profile page.</p>
      <p>Put playlist cards here with a map function.</p>
    </div>
  )
}

export default Profile

// Will store user's info, with buttons to change (for the update functions), or to delete account.

// Will also display their playlists...as playlist cards.