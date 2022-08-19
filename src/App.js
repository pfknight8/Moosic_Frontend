import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import SongSearch from './Pages/SongSearch'
import SongDetails from './Pages/SongDetails'
import PlaylistDetails from './Pages/PlaylistDetails'
import PlaylistSongDetails from './Pages/PlaylistSongDetails'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Header from './Components/Header'
import { CheckLogin } from './services/Auth'
import './App.css'
import Client, { BASE_URL } from './services/api'
import Footer from './Components/Footer'

function App() {
  
  const [songSearchFilters, setSongSearchFilters] = useState({})
  const [selectedSong, setSelectedSong] = useState(null)
  const [selectedPlaylist, setSelectedPlaylist] = useState(null)
  const [userPlaylists, setUserPlaylists] = useState(null)
  const [userPLSong, setUserPLSong] = useState(null)
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  let navigate = useNavigate()
  
  const handleSongSelect = (song) => {
    setSelectedSong(song)
    navigate(`/songs/${song.id}`)
  }
  const handlePLSongSelect = (song) => {
    setUserPLSong(song)
    navigate(`/profile/playlist/songs/${song.id}`)
  }

  const handlePlaylistSelect = (playlist) => {
    setSelectedPlaylist(playlist)
    navigate(`/profile/playlist/${playlist.id}`)
  }
  const handleUserPlaylists = async (user) => {
    let user_id = user.id
    let playlists = await Client.get(`${BASE_URL}/api/playlist/${user_id}`)
    setUserPlaylists(playlists.data)
  }

  const handleGoToSearch = () => {
    setUserPLSong(null)
    setSelectedPlaylist(null)
    navigate('/songs')
  }

  // Auth functions
  const checkToken = async () => {
    const user = await CheckLogin()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    if (authenticated) {
      handleUserPlaylists(user)
    }
  }, [user])

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token && user) {
      checkToken()
    } else if (token && !user) {
      localStorage.clear()
    }
  }, [])
  const LogOut = () => {
    setUser(null)
    setUserPlaylists(null)
    setSelectedSong(null)
    setSelectedPlaylist(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }
  
  return (
    <div className="App">
      <Header LogOut={LogOut} user={user} authenticated={authenticated} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setSongSearchFilters={setSongSearchFilters}
                setSelectedSong={setSelectedSong}
                setSelectedPlaylist={setSelectedPlaylist}
              />
            }
          />
          <Route
            path="/songs"
            element={
              <SongSearch
                setSongSearchFilters={setSongSearchFilters}
                songSearchFilters={songSearchFilters}
                handleSongSelect={handleSongSelect}
                setSelectedPlaylist={setSelectedPlaylist}
              />
            }
          />
          <Route
            path="/songs/:song_id"
            element={
              <SongDetails
                selectedSong={selectedSong}
                setSelectedSong={setSelectedSong}
                handleGoToSearch={handleGoToSearch}
                user={user}
                authenticated={authenticated}
                userPlaylists={userPlaylists}
                selectedPlaylist={selectedPlaylist}
                setSelectedPlaylist={setSelectedPlaylist}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                user={user}
                authenticated={authenticated}
                userPlaylists={userPlaylists}
                handlePlaylistSelect={handlePlaylistSelect}
                handleUserPlaylists={handleUserPlaylists}
                setSelectedPlaylist={setSelectedPlaylist}
                LogOut={LogOut}
              />
            }
          />
          <Route path="/signUp" element={<SignUp />} />
          <Route
            path="/userLogin"
            element={
              <Login
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route
            path="/profile/playlist/:playlist_id"
            element={
              <PlaylistDetails
                selectedPlaylist={selectedPlaylist}
                setSelectedPlaylist={setSelectedPlaylist}
                handlePLSongSelect={handlePLSongSelect}
                user={user}
                authenticated={authenticated}
              />
            }
          />
          <Route
            path="/profile/playlist/songs/:song_id"
            element={
              <PlaylistSongDetails
                selectedPlaylist={selectedPlaylist}
                userPLSong={userPLSong}
                setUserPLSong={setUserPLSong}
                handleGoToSearch={handleGoToSearch}
                user={user}
                authenticated={authenticated}
              />
            }
          />
        </Routes>
        <Footer />
      </main>
    </div>
  )
}

export default App
