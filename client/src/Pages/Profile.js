import { useNavigate } from 'react-router-dom'

const Profile = () => {
  //State
  const navigate = useNavigate()
  //Functions
  return (
    <div id='profilePage'>
      <p>The user's profile page.</p>
    </div>
  )
}

export default Profile
