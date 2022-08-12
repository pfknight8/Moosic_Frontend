import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import SongSearch from './Pages/SongSearch'
import SongDetails from './Pages/SongDetails'
import PlaylistDetails from './Pages/PlaylistDetails'
import NavBar from './Components/NavBar'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Header from './Components/Header'
import './App.css'

function App() {
  //State
  const [songSearchFilters, setSongSearchFilters] = useState({})
  const [selectedSong, setSelectedSong] = useState(null)
  const [selectedPlaylist, setSelectedPlaylist] = useState(null)
  const [userPlaylists, setUserPlaylists] = useState(null)
  const [songList, setSongList] = useState(null)
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
                songList={songList}
              />
            }
          />
          <Route path="/profile" element={<Profile userPlaylists={userPlaylists} handlePlaylistSelect={handlePlaylistSelect} />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/userLogin" element={<Login />} />
          <Route path="/songs/:song_id" element={<SongDetails selectedSong={selectedSong} /> } />
          <Route path="/profile/playlist/:playlist_id" element={<PlaylistDetails selectedPlaylist={selectedPlaylist} handleSongSelect={handleSongSelect} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
