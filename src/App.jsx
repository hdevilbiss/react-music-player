import { useRef, useState} from "react";
/**
 * Add components
 */
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Nav from './components/Nav';

/**
 * Import styles
 */
import "./styles/app.scss";

/**
 * Import song data
 */
import data from './data';

/**
 * App
 */
function App() {
  /**
  * References
  */
  const audioRef = useRef(null);

  /**
   * State
   */
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  /**
   * Event Handlers
   */
  const timeUpdateHandler = (event) => {
    const current = event.target.currentTime;
    const duration = event.target.duration;
    setSongInfo({...songInfo, currentTime: current, duration });
  }

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
      />
      <Library
        audioRef={audioRef}
        isPlaying={isPlaying}
        libraryStatus={libraryStatus}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
        songs={songs}
      />
      <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
