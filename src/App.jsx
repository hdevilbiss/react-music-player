import { useState } from "react";
/**
 * Add components
 */
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';

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
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <h1>
        Music Player
      </h1>
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <Library songs={songs} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;
