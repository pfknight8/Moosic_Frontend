import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import SongSearch from './Pages/SongSearch'
import NavBar from './Components/NavBar'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Header from './Components/Header'
import './App.css'

function App() {
  //State
  const [songSearchFilters, setSongSearchFilters] = useState({})
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  let navigate = useNavigate()
  //Functions
  return (
    <div className="App">
      <Header />
      {/* <NavBar /> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/searchSongs"
            element={
              <SongSearch
                setSongSearchFilters={setSongSearchFilters}
                songSearchFilters={songSearchFilters}
              />
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/userLogin" element={<Login />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
