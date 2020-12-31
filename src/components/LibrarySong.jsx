const LibrarySong = ({ song, currentSong, setCurrentSong,  audioRef, isPlaying, }) => {
  /**
   * Event Handlers
   */

   /**
    * An event handler for when a song in the library gets clicked.
    * Pause the runtime until `setCurrentSong` is done changing the state of `currentSong`.
    * The local song is the song which was passed from `LibrarySong` in a `map` method.
    * Check the `isPlaying` state, and start playing the song if needed.
    */
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    if (isPlaying) audioRef.current.play();
  }

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.id === currentSong.id ? "selected" : ""}`}
    >
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
