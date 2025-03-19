import PropTypes from "prop-types";
import { motion } from "motion/react";

Square.propTypes = {
  count: PropTypes.string,
  index: PropTypes.string,
  options: PropTypes.object,
  makeMove: PropTypes.func,
  disableSquare: PropTypes.bool,
  winningLine: PropTypes.array
};

function Square({ count, index, options, makeMove, disableSquare, winningLine }) {
  return (
    <div className="size-full">
      <button
        disabled={disableSquare}
        onClick={() => makeMove(index)}
        className={`${winningLine.includes(parseInt(index)) && "bg-green-500"} size-full flex items-center justify-center hover:bg-slate-100/20 ${
          disableSquare && "hover:bg-transparent cursor-not-allowed"
        }`}
      >
        <figure className="w-[70%] aspect-square rounded-full flex items-center justify-center bg-red-40">
          {count === "one" || count === "two" ? (
            <motion.img
              // initial={{scale: 0.2}}
              animate={{ rotate: [-360, 0], scale: [0, 1.5, 1] }}
              transition={{ ease: "circOut" }}
              src={options[count].image}
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

export default Square;
