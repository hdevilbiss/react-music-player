import {useState} from "react";
/**
 * Add components
 */
import Player from './components/Player';
import Song from './components/Song';

/**
 * Import styles
 */
import "./styles/app.scss";

/**
 * Import song data
 */
import data from './data';

function App() {
  /**
   * State
   */
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className="App">
      <h1>
        Music Player
      </h1>
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
