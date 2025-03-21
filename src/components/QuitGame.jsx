import PropTypes from "prop-types";

QuitGame.propTypes = {
  quit: PropTypes.func,
  setGameMode: PropTypes.func,

  inActiveTabStyle: PropTypes.string,
};

function QuitGame({ quit, setGameMode, inActiveTabStyle }) {
  return (
    <div>
      <button
        onClick={() => {
          quit();
          setGameMode("Easy");
        }}
        className={`${inActiveTabStyle} p-1`}
      >
        Quit Game
      </button>
    </div>
  );
}

export default QuitGame;
