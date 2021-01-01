import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong, setCurrentSong, isPlaying, setIsPlaying, audioRef, songInfo, setSongInfo, songs }) => {
  /**
   * getTime function
   * format time in MM:SS
   * @param {String} time
   */
  const getTime = (time) => {
    return(
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }

  /**
   * Event Handlers
   */

  /**
   * An event handler for when the play or pause button gets clicked.
   * Checks the `isPlaying` state to decide whether to play the song.
   * Sets the `isPlaying` state to its opposite. Since the play button is tied to the `isPlaying` state,
   * this also updates the UI.
   */
  const playSongHandler = () => {
    isPlaying
      ? audioRef.current.pause()
      : audioRef.current.play();
      setIsPlaying(!isPlaying);
  }

  /**
   *
   * @param {Event} event
   * An event handler for when the cursor drags the thumb in the range input,
   * setting the current time reference equal to the input value,
   * and updating the song duration display in the UI.
   */
  const durationDragHandler = (event) => {
    audioRef.current.currentTime = event.target.value;
    setSongInfo({...songInfo, currentTime: event.target.value});
  }

  /**
   *
   * @param {String} direction
   * An event handler for the rewind and skip buttons, which decides which song (which index in songs) should be played next.
   * It pauses the runtime until `setCurrentSong` is finished, then
   * checks whether `isPlaying` is true: when true, play the current `audioRef`
   *
   * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await#But_how_does_it_work
   *
   */
  const skipHandler = async (direction) => {
    const curIdx = songs.indexOf(currentSong);
    let newIdx = 0;
    direction === 'forward'
      ? curIdx === songs.length - 1
        ? newIdx = 0
        : newIdx = curIdx + 1
      : curIdx === 0
        ? newIdx = songs.length - 1
        : newIdx = curIdx - 1;
    await setCurrentSong(songs[newIdx]);
    if (isPlaying) audioRef.current.play();
  }

  /**
   *
   * @param {Event} event
   * An event handler for the volume controller
   * which fires when the range gets dragged
   */
  const volumeDragHandler = (event) => {
    let volume = event.target.value;
    audioRef.current.volume = volume;
    setSongInfo({...songInfo, volume: volume});
  }

  /**
   * Styles
   */
  const percentageOfSongCompleted = (songInfo.currentTime / songInfo.duration) * 100;
  const transformSongRange = {
    transform: `translateX(${percentageOfSongCompleted}%)`
  };
  const transformVolumeRange ={
    transform: `translateX(${songInfo.volume * 100}%)`
  };
  const rangeGradient = {
    background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`
  };

  /**
   * Return
   */
  return (
    <div className="player">
      <div className="duration-display">
        <p>
          {getTime(songInfo.currentTime)}
        </p>
        <div className="track" style={rangeGradient}>
          <input
            type="range"
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={durationDragHandler} />
          <div
            style={transformSongRange}
            className="animate-track"
          ></div>
        </div>
        <p>
          {songInfo.duration ? getTime(songInfo.duration) : "0:00"}
        </p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="rewind"
          onClick={() => skipHandler('rewind')}
          icon={faAngleLeft}
          size="3x"
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          icon={isPlaying ? faPauseCircle : faPlayCircle}
          size="3x"
        />
        <FontAwesomeIcon
          className="fast-forward"
          onClick={() => skipHandler('forward')}
          icon={faAngleRight}
          size="3x"
        />
      </div>
      <div className="volume-control">
        <input
          type="range"
          min={0}
          max={1}
          step={0.1}
          onChange={volumeDragHandler}
          value={songInfo.volume}
        />
        <div
        className="animate-volume"
        style={transformVolumeRange}
        ></div>
      </div>
    </div>
  )
}

export default Player;
