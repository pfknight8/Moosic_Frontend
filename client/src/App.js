import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import SongSearch from './Pages/SongSearch'
import SongDetails from './Pages/SongDetails'
import PlaylistDetails from './Pages/PlaylistDetails'
import NavBar from './Components/NavBar'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Header from './Components/Header'
import { CheckLogin } from './services/Auth'
import './App.css'
import Client, { BASE_URL } from './services/api'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

function App() {
  //State
  const [songSearchFilters, setSongSearchFilters] = useState({})
  const [selectedSong, setSelectedSong] = useState(null)
  const [selectedPlaylist, setSelectedPlaylist] = useState(null)
  const [userPlaylists, setUserPlaylists] = useState(null)
  const [playlistSongs, setPlaylistSongs] = useState(null)
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  let navigate = useNavigate()
  //Functions
  const handleSongSelect = (song) => {
    setSelectedSong(song)
    navigate(`/songs/${song.id}`)
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
  const handlePlaylistSongs = async (playlist) => {
    let playlist_id = playlist.id
    let songs = await Client.get(
      `${BASE_URL}/api/playlist/songs/${playlist_id}`
    )
    setPlaylistSongs(songs)
  }
  // const SongDetails = (props) => {
  //   const [songDetails, setSongDetails] = useState({})

  //   useEffect(() => {
  //     async function getSong() {
  //       const res = await axios.get(
  //         `${BASE_URL}/movie/${props.selectedSong}?api_key=${process.env.REACT_APP_DEEZER_KEY}`
  //       )
  //       setSongDetails(res.data)
  //     }
  //     getSong()
  //   }, [props.selectedSong])
  // }
  // Auth functions
  const checkToken = async () => {
    const user = await CheckLogin()
    setUser(user)
    toggleAuthenticated(true)
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])
  const LogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }
  return (
    <div className="App">
      <Header />
      {/* <NavBar /> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/songs"
            element={
              <SongSearch
                setSongSearchFilters={setSongSearchFilters}
                songSearchFilters={songSearchFilters}
                handleSongSelect={handleSongSelect}
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
                handlePlaylistSongs={handlePlaylistSongs}
              />
            }
          />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/userLogin" element={<Login />} />
          <Route
            path="/songs/:song_id"
            element={<SongDetails selectedSong={selectedSong} />}
          />
          <Route
            path="/profile/playlist/:playlist_id"
            element={
              <PlaylistDetails
                selectedPlaylist={selectedPlaylist}
                handleSongSelect={handleSongSelect}
                playlistSongs={playlistSongs}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
