import LibrarySong from './LibrarySong';
const Library = ({ songs, currentSong, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus }) => {
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ""}`}>
      <h2>
        Library
      </h2>
      <div className="library-songs">
        {songs.map(song => (
        <LibrarySong
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          song={song}
          key={song.id}
          audioRef={audioRef}
          isPlaying={isPlaying}
        />
        ))}
      </div>
    </div>
  )
}
export default Library;
