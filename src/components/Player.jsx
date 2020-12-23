import {useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  /**
   * References
   */
  const audioRef = useRef(null);

  /**
   * Event Handlers
   */
  const playSongHandler = () => {
    isPlaying
      ? audioRef.current.pause()
      : audioRef.current.play();
      setIsPlaying(!isPlaying);
  }

  return (
    <div className="player">
      <div className="duration-display">
        <p>
          Start Time
        </p>
        <input type="range"/>
        <p>
          End Time
        </p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="rewind" icon={faAngleDoubleLeft} size="2x" />
        <FontAwesomeIcon onClick={playSongHandler} className="play" icon={faPlayCircle} size="2x" />
        <FontAwesomeIcon className="fast-forward" icon={faAngleDoubleRight} size="2x" />
      </div>
      <audio ref={audioRef} src={currentSong.audio}></audio>
    </div>
  )
  }

  export default Player;
