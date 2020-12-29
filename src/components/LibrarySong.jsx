
const LibrarySong = ({ song, setCurrentSong, songs, id, audioRef, isPlaying, setSongs }) => {
  /**
   * Event Handlers
   */
  const songSelectHandler = () => {
    setCurrentSong(song);

    /**
     * Compare all songs from the state (song.id)
     * against the current, clicked song (id)
     * Set active true when id's match
     */
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        }
      }
      else {
        return {
          ...song,
          active: false,
        }
      }
    });

    setSongs(newSongs);

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
    <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
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
