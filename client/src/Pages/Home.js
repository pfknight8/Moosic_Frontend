import { useNavigate } from 'react-router-dom'

const Home = () => {
  //State
  const navigate = useNavigate()
  //Functions
  return (
    <div id='home'>
      <p>The home page.</p>
    </div>
  )
}

export default Home