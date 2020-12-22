import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const Player = () => {
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
        <FontAwesomeIcon className="play" icon={faPlayCircle} size="2x" />
        <FontAwesomeIcon className="fast-forward" icon={faAngleDoubleRight} size="2x" />
      </div>
    </div>
  )
  }

  export default Player;
