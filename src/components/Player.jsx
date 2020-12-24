import { useRef, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  /**
   * References
   */
  const audioRef = useRef(null);

  /**
   * getTime: format time in MM:SS
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
  const timeUpdateHandler = (event) => {
    const current = event.target.currentTime;
    const duration = event.target.duration;
    setSongInfo({...songInfo, currentTime: current, duration });
  }
  const dragHandler = (event) => {
    audioRef.current.currentTime = event.target.value;
    setSongInfo({...songInfo, currentTime: event.target.value});
  }

  /**
   * State
   */
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  return (
    <div className="player">
      <div className="duration-display">
        <p>
          {getTime(songInfo.currentTime)}
        </p>
        <input min={0} max={songInfo.duration} value={songInfo.currentTime} type="range" onChange={dragHandler} />
        <p>
          {getTime(songInfo.duration)}
        </p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="rewind" icon={faAngleDoubleLeft} size="2x" />
        <FontAwesomeIcon onClick={playSongHandler} className="play" icon={faPlayCircle} size="2x" />
        <FontAwesomeIcon className="fast-forward" icon={faAngleDoubleRight} size="2x" />
      </div>
      <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  )
}

export default Player;
