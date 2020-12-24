import Song from './Song';
const Library = ({songs, currentSong}) => {
  return (
    <div className="library">
      <h2>
        Library
      </h2>
      <div className="library-songs">
        <Song currentSong={currentSong} />
      </div>
    </div>
  )
}
export default Library;
