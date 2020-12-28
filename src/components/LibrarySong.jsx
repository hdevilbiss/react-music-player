
const LibrarySong = ({ song, setCurrentSong, songs, id, audioRef, isPlaying }) => {
  /**
   * Event Handlers
   */
  const songSelectHandler = () => {
    setCurrentSong(song);
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (isPlaying !== undefined) {
        playPromise.then(() => {
          audioRef.current.play();
        });
      }
    }
  }

  return (
    <div onClick={songSelectHandler} className="library-song">
    <img src={song.cover} alt={song.name} />
    <div className="song-description">
      <h3>
        {song.name}
      </h3>
      <h4>
        {song.artist}
      </h4>
    </div>
  </div>
  )
}

export default LibrarySong;
