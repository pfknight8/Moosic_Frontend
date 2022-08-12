import { Route, Routes } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import SongSearch from "./Pages/SongSearch"
import NavBar from "./Components/NavBar";
import './App.css';

function App() {
  //State
  const [songSearchFilters, setSongSearchFilters] = useState({})

  let navigate = useNavigate()
  //Functions
  return (
    <div className="App">
      <p>Things will go here.</p>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route
            path='/searchSongs'
            element={
              <SongSearch setSongSearchFilters={setSongSearchFilters} songSearchFilters={songSearchFilters} />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
