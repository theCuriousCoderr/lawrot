import PropTypes from "prop-types";

EasyMode.propTypes = {
  reset: PropTypes.func,
  setGameMode: PropTypes.func,
  gameMode: PropTypes.string,
  inActiveTabStyle: PropTypes.string,
};

function EasyMode({ reset, setGameMode, gameMode, inActiveTabStyle }) {
  return (
    <div>
      <button
        onClick={() => {
          reset();
          setGameMode("Easy");
        }}
        className={`${
          gameMode === "Easy"
            ? "bg-green-500/80 text-green-100"
            : inActiveTabStyle
        } p-1 text-sm`}
      >
        Easy Mode
      </button>
    </div>
  );
}

export default EasyMode;
