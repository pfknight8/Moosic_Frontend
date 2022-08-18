import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({
  setSongSearchFilters,
  setSelectedSong,
  setSelectedPlaylist
}) => {

  const navigate = useNavigate()

  useEffect(() => {
    setSongSearchFilters({})
    setSelectedSong(null)
    setSelectedPlaylist(null)
  }, [])
  
  return (
    <div className="home">
      <h1 className="title"> Moosic</h1>
      <p>A music site</p>
      <img
        className="background"
        src="https://media.istockphoto.com/vectors/music-staff-with-music-notes-vector-vector-id475582788?k=20&m=475582788&s=612x612&w=0&h=m9yaXDI69P3sbakTdtXGTB8MEcYlOdYip64BhPvpK5s="
        alt="Background"
      />
    </div>
  )
}

export default Home
