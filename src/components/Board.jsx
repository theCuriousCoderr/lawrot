import PropTypes from "prop-types";
import Spot from "./Spot";
import { Game } from "../utils/game";

Board.propTypes = {
  positions: PropTypes.array,
  makeYourMove: PropTypes.func,
  disableSquare: PropTypes.bool,
  winningLine: PropTypes.array,
  winner: PropTypes.string,
  gameMode: PropTypes.string
};

const borderLineRules = {
  0: "border-t-transparent border-l-transparent",
  1: "border-t-transparent",
  2: "border-t-transparent border-r-transparent",
  3: "border-l-transparent",
  4: "",
  5: "border-r-transparent",
  6: "border-l-transparent border-b-transparent",
  7: "border-b-transparent ",
  8: "border-b-transparent border-r-transparent",
};

function Board({
  positions,
  makeYourMove,
  disableSquare,
  winningLine,
  winner,
  gameMode
}) {
  const options = new Game().getOptions();

  return (
    <ul className="xs:max-md:mt-20 relative z-30 portrait:w-[70%] xs:max-md:portrait:w-[100%] landscape:h-[70%] aspect-square max-w-[600px] grid grid-cols-3 board bg-red-40 ">
      {positions.map((role, index) => {
        return (
          <li
            key={`${role}${index}`}
            className={`border-4 ${gameMode === "Hard" ? "border-red-500" : "border-green-500"} xs:max-md:border-2 ${
              borderLineRules[index.toString()]
            } fle items-center justify-center`}
          >
            <Spot
              role={role}
              index={index.toString()}
              options={options}
              makeMove={makeYourMove}
              disableSquare={disableSquare}
              winningLine={winningLine}
              winner={winner}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default Board;
