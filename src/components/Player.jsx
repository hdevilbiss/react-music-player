import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const Player = () => {
  return (
    <div className="player">
      <h2>
        Player
      </h2>
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
        <FontAwesomeIcon className="rewind" icon={faAngleDoubleLeft} />
        <FontAwesomeIcon className="play" icon={faPlayCircle} />
        <FontAwesomeIcon className="fast-forward" icon={faAngleDoubleRight} />
      </div>
    </div>
  )
  }

  export default Player;
