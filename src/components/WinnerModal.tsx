import React from "react";
import PropTypes from "prop-types";
import avatar1 from "../images/avatar1.svg";
import avatar2 from "../images/avatar2.svg";

import { motion } from "motion/react";

WinnerModal.propTypes = {
  playAgain: PropTypes.func,
  quit: PropTypes.func,
  winner: PropTypes.string,
};

function WinnerModal({ playAgain, quit, winner }) {
  const options = {
    one: {
      image: avatar1,
      name: "CPU",
    },
    two: {
      image: avatar2,
      name: "CPU",
    },
    none: {
      image: "",
      name: "",
    },
  };

  const role = winner;
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
            {role === "one" || role === "two" ? (
              <figure className="size-40 xs:max-md:size-32">
                <img
                  src={options[role].image}
                  alt="avatar 1"
                  className={`object-cover object-center size-ful border-2 border-black `}
                />
              </figure>
            ) : (
              <>
                <figure className="size-40 xs:max-md:size-32">
                  <img
                    src={options["one"].image}
                    alt="avatar 1"
                    className={`object-cover object-center size-ful border-2 border-black `}
                  />
                </figure>
                <figure className="size-40 xs:max-md:size-32">
                  <img
                    src={options["two"].image}
                    alt="avatar 1"
                    className={`object-cover object-center size-ful border-2 border-black `}
                  />
                </figure>
              </>
            )}
          </div>

          <p className="mt-2 font-bold text-white text-3xl text-center">
            {role === "one" || role === "two" ? " WINNER!" : "DRAW!"}
          </p>
        </div>
        <div className="flex gap-20 xs:max-md:gap-5">
          <div>
            <button
              onClick={playAgain}
              className="w-32 xs:max-md:w-28 py-1 rounded-md bg-[#EAD70C] font-medium"
            >
              Play Again
            </button>
          </div>
          <div>
            <button
              onClick={quit}
              className="w-32 xs:max-md:w-28 py-1 rounded-md bg-[#EA130C] font-medium"
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
