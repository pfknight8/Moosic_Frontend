const SongCard = ({song}) => {
  //
  return (
    <div className={`songCard ${song.genre}Card`}>
      <p>Will need to display info here. Give appropriate classNames/id's for css formatting.</p>
    </div>
  )
}

export default SongCard

//The multiple classNames will be useful for formatting. The 'song.genre' template literal will allow us to conditionally format the card, if desired.