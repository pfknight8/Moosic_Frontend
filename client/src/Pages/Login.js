import { useNavigate } from 'react-router-dom'

const Login = () => {
  //State
  const navigate = useNavigate()
  //Functions
  return (
    <div id='loginPage'>
      <p>The user's Login page.</p>
      <p>Insert form here.</p>
    </div>
  )
}

export default Login