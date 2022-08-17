import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({
  setSongSearchFilters,
  setSelectedSong,
  setSelectedPlaylist
}) => {
  //State
  const navigate = useNavigate()
  //Functions
  useEffect(() => {
    setSongSearchFilters({})
    setSelectedSong(null)
    setSelectedPlaylist(null)
  }, [])
  return (
    <div id="home">
      <h1 className="title"> Moosic</h1>
      <p>A music site.</p>
    </div>
  )
}

export default Home

//Can toggle different 'home pages' where one displays telling them to login or make an account, and another page that welcomes users back after they sign in.
