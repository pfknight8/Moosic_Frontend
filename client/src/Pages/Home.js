import { useNavigate } from 'react-router-dom'

const Home = () => {
  //State
  const navigate = useNavigate()
  //Functions
  return (
    <div id="home">
      <h1 className="title"> Moosic</h1>
      <p>The home page.</p>
    </div>
  )
}

export default Home

//Can toggle different 'home pages' where one displays telling them to login or make an account, and another page that welcomes users back after they sign in.
