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
        <p>
          Icons
        </p>
      </div>
    </div>
  )
  }

  export default Player;
