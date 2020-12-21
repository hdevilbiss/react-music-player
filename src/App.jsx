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
  return (
    <div className="App">
      <h1>
        Music Player
      </h1>
      <Song />
      <Player />
    </div>
  );
}

export default App;
