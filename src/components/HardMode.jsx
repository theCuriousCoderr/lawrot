import PropTypes from "prop-types";

HardMode.propTypes = {
  reset: PropTypes.func,
  setGameMode: PropTypes.func,
  gameMode: PropTypes.string,
  inActiveTabStyle: PropTypes.string,
};

function HardMode({ reset, setGameMode, gameMode, inActiveTabStyle }) {
  return (
    <div>
      <button
        onClick={() => {
          reset();
          setGameMode("Hard");
        }}
        className={`${
          gameMode !== "Easy" ? "bg-red-500/80 text-red-100" : inActiveTabStyle
        } p-1 text-sm`}
      >
        Hard Mode
      </button>
    </div>
  );
}

export default HardMode;
