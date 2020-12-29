import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {

  /**
   * Return
   */
  return (
    <nav>
      <h1 role="banner">
        Hotlink Beats
      </h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        <FontAwesomeIcon size="2x" icon={libraryStatus ? faTimesCircle : faMusic} />
        &nbsp;
      </button>
    </nav>
  );
}

export default Nav;
