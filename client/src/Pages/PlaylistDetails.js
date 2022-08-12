import { useEffect, useState } from 'react'

const PlaylistDetails = (userPlaylist) => {
  //State
  const [playlist, setPlaylist] = useState('')

  let { id } = useParams()

  useEffect(() => {
    let selectedPlaylist = playlist.find((playlist) => playlist._id === id)
    setPlaylist(selectedPlaylist)
  }, [userPlaylist, id])
  //Functions
  return (
    <div id="playlistDetailsPage">
      {/* <p>A playlist's detail page.</p>
      <p>Playlist will display songs as song cards.</p> */}
      {userPlaylist.map((userPlaylist) => (
        <div key={userPlaylist.name} onClick={() => showPlaylist(userPlaylist)}>
          <div className="User-Playlist">
            <h1>The user's playlist(s) will display here</h1>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PlaylistDetails
