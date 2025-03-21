import PropTypes from "prop-types";
import avatar1 from "../images/avatar3.svg";
import avatar2 from "../images/avatar4.svg";
import { motion } from "motion/react";
import { Game } from "../utils/game";

CharacterSelect.propTypes = {
  role: PropTypes.object,
  setRole: PropTypes.func,
  setGame: PropTypes.func,
};

function CharacterSelect({ role, setRole, setGame }) {
  const options = new Game().getOptions();

  const transition = {
    duration: 0.1,
    delay: 0.5,
    ease: "linear",
  };

  const hide = 200;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setGame();
      }}
      className="fixed top-0 z-20 h-screen w-full bg-white flex flex-col gap-2 items-center justify-center"
    >
      <div className="xs:max-md:w-[80%] space-y-5 mx-auto bg-red-40">
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0, skewX: -12 }}
          transition={{ duration: 0.3 }}
          className=" bg-black p-2 space-y-2 w-full"
        >
          <p className="text-center font-medium text-2xl text-white">
            Name Select
          </p>

          <input
            required={true}
            readOnly={true}
            disabled={true}
            value={options[role.player].name}
            className="bg-slate-200 text-slate-600 font-medium w-full p-2"
          />
        </motion.div>

        <motion.div
          initial={{ x: 200, display: "none" }}
          animate={{ x: 0, skewX: -12, display: "block" }}
          transition={{ duration: 0.3, delay: 0 }}
          className="relative w-full z-10 bg-black p-2 space-y-2"
        >
          <p className="text-center font-medium text-2xl text-white">
            Character Select
          </p>

          <div className="grid grid-cols-2 gap-2 overflow-hidden">
            <motion.div
              initial={{ y: -hide }}
              animate={{ y: 0 }}
              transition={transition}
              className={`relative w-full aspect-square bg-[#7BD0E8] ${
                role.player === "two" ? "opacity-50" : "border-white border-2"
              }`}
            >
              <button
                type="button"
                onClick={() => {
                  setRole({ player: "one", cpu: "two" });
                }}
                className="size-full"
              >
                <figure className="size-full relative p-5">
                  <img
                    src={avatar1}
                    alt="avatar 1"
                    className="object-cover object-center size-full skew-x-12"
                  />
                </figure>
              </button>
            </motion.div>
            <motion.div
              initial={{ y: hide }}
              animate={{ y: 0 }}
              transition={transition}
              className={`relative w-full aspect-square bg-[#1417E3] ${
                role.player === "one" ? "opacity-50" : "border-white border-2"
              }`}
            >
              <button
                type="button"
                onClick={() => {
                  setRole({ player: "two", cpu: "one" });
                }}
                className="size-full"
              >
                <figure className="size-full relative p-5">
                  <img
                    src={avatar2}
                    alt="avatar 1"
                    className="object-cover object-center size-full skew-x-12"
                  />
                </figure>
              </button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: -200, display: "none" }}
          animate={{ y: 0, display: "flex" }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="flex w-full flex-col items-center justify-center gap-10 xs:max-md:gap-5"
        >
          <div className="relative flex items-center font-medium gap-2">
            You are:{" "}
            <figure className="size-10 relative">
              <img
                src={options[role.player].image}
                alt="avatar 1"
                className="object-cover object-center size-full"
              />
            </figure>
          </div>

          <div>
            <button className="border w-40 h-10 bg-green-500 text-white rounded-md">
              Continue
            </button>
          </div>
        </motion.div>
      </div>
    </form>
  );
}

export default CharacterSelect;
