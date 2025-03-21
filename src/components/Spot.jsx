import PropTypes from "prop-types";
import { motion } from "motion/react";

Spot.propTypes = {
  role: PropTypes.string,
  index: PropTypes.string,
  options: PropTypes.object,
  makeMove: PropTypes.func,
  disableSquare: PropTypes.bool,
  winningLine: PropTypes.array,
  winner: PropTypes.string,
};

function Spot({
  role,
  index,
  options,
  makeMove,
  disableSquare,
  winningLine,
  winner,
}) {
  const winColor = winner === "one" ? "bg-green-500" : "bg-yellow-500";
  const winColorHover =
    winner === "one" ? "hover:bg-green-500/100" : "hover:bg-yellow-500/100";
  const isAWinSpot = winningLine.includes(parseInt(index));
  return (
    <div className="size-full">
      {winner}
      <button
        disabled={disableSquare}
        onClick={() => makeMove(index)}
        className={`${
          winningLine.includes(parseInt(index)) && winColor
        } size-full flex items-center justify-center  ${
          disableSquare && isAWinSpot
            ? `${winColorHover} cursor-not-allowed`
            : "hover:bg-slate-100/20"
        }`}
      >
        <figure className="w-[70%] aspect-square rounded-full flex items-center justify-center bg-red-40">
          {role === "one" || role === "two" ? (
            <motion.img
              // initial={{scale: 0.2}}
              animate={{ rotate: [-360, 0], scale: [0, 1.5, 1] }}
              transition={{ ease: "circOut" }}
              src={options[role].image}
              alt="avatar 1"
              className={`object-cover object-center border-2 border-black rounded-full size-full ${
                disableSquare && "opacity-20"
              } `}
            />
          ) : (
            <figure className="size-full"></figure>
          )}
          {/* {count === "none" && <figure className=""></figure>} */}
        </figure>
      </button>
    </div>
  );
}

export default Spot;
