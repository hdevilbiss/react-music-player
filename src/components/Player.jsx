import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong, isPlaying, setIsPlaying, audioRef, songInfo, setSongInfo }) => {
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
  const playSongHandler = () => {
    isPlaying
      ? audioRef.current.pause()
      : audioRef.current.play();
      setIsPlaying(!isPlaying);
  }
  const dragHandler = (event) => {
    audioRef.current.currentTime = event.target.value;
    setSongInfo({...songInfo, currentTime: event.target.value});
  }

  /**
   * Return
   */
  return (
    <div className="player">
      <div className="duration-display">
        <p>
          {getTime(songInfo.currentTime)}
        </p>
        <input min={0} max={songInfo.duration || 0} value={songInfo.currentTime} type="range" onChange={dragHandler} />
        <p>
          {getTime(songInfo.duration)}
        </p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="rewind" icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          icon={isPlaying ? faPauseCircle : faPlayCircle}
          size="2x"
        />
        <FontAwesomeIcon className="fast-forward" icon={faAngleRight} size="2x" />
      </div>
    </div>
  )
}

export default Player;
