import React from "react";
import PropTypes from "prop-types";
import { motion } from "motion/react";
import { Game } from "../utils/game";

WinnerModal.propTypes = {
  playAgain: PropTypes.func,
  quit: PropTypes.func,
  winner: PropTypes.string,
};

function WinnerModal({ playAgain, quit, winner }) {
  const options = new Game().getOptions();

  const role = winner;
  const isValidRole = role === "one" || role === "two";

  return (
    <motion.div
      initial={{ x: 0, scale: 0.5, borderRadius: 40 }}
      animate={{ x: 0, scale: 1, borderRadius: 0 }}
      exit={{ x: "100vw" }}
      transition={{ duration: 0.1, ease: "circIn" }}
      className="fixed top-0 z-20 h-screen w-full bg-black opacity-  flex flex-col gap-2 items-center justify-center"
    >
      <motion.div
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        className="relative flex gap-20 flex-col items-center justify-center"
      >
        <div className="">
          <div className="flex justify-center gap-5">
            {isValidRole ? (
              <figure className="size-40 xs:max-md:size-32 layout">
                <motion.img
                  animate={{ rotateX: [0, 360] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "circOut",
                  }}
                  src={options[role].modalImage}
                  alt="avatar 1"
                  className={`object-cover object-center size-ful border-2 border-black board`}
                />
              </figure>
            ) : (
              <>
                <figure className="size-40 xs:max-md:size-32 ">
                  <motion.img
                    animate={{ rotateY: [0, 360] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "linear",
                    }}
                    src={options["one"].modalImage}
                    alt="avatar 1"
                    className={`object-cover object-center size-ful border-2 border-black `}
                  />
                </figure>
                <figure className="size-40 xs:max-md:size-32 ">
                  <motion.img
                    animate={{ rotateY: [360, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "linear",
                      delay: 1,
                    }}
                    src={options["two"].modalImage}
                    alt="avatar 1"
                    className={`object-cover object-center size-ful border-2 border-black `}
                  />
                </figure>
              </>
            )}
          </div>

          <div>
            <p className="mt-2 font-bold text-white text-3xl text-center">
              {isValidRole ? " WINNER!" : "DRAW!"}
            </p>
            {isValidRole && (
              <p className=" font-bold text-slate-300 animate-pulse text-3xl text-center">
                {options[role].name}
              </p>
            )}
          </div>
        </div>
        <div className="flex gap-20 xs:max-md:gap-5">
          <div>
            <button
              onClick={playAgain}
              className="w-32 xs:max-md:w-28 py-1 rounded-md bg-[#EAD70C] hover:bg-opacity-80 font-medium"
            >
              Play Again
            </button>
          </div>
          <div>
            <button
              onClick={quit}
              className="w-32 xs:max-md:w-28 py-1 rounded-md bg-[#EA130C] hover:bg-opacity-80 text-white font-medium"
            >
              Quit
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default WinnerModal;
