import { motion, AnimatePresence } from "motion/react";
import PropTypes from "prop-types";
import { Game } from "../utils/game";

MobileHeader.propTypes = {
  role: PropTypes.shape({
    player: PropTypes.string,
    cpu: PropTypes.string,
  }),
  scores: PropTypes.shape({
    one: PropTypes.number,
    two: PropTypes.number,
  }),
  turn: PropTypes.string,
};

function MobileHeader({ role, scores, turn }) {
  const options = new Game().getOptions();
  return (
    <div className="500:hidden py-1 w-full max-w-[700px] xs:max-md:w-full xs:max-md:max-w-full mx-auto h-[60%">
      {/* Player 1 */}
      <div className="flex items-center gap-2">
        <div className="relative z-10 flex gap-2 items-center bg-white p-2 xs:max-md:p-0 rounded-full overflow-hidden">
          <AnimatePresence>
            {turn === role.player && (
              <motion.div
                animate={{ x: ["100%", 0] }}
                exit={{ x: "-100%" }}
                className="absolute -z-10 size-full bg-yellow-500 rounded-full "
              ></motion.div>
            )}
          </AnimatePresence>
          <div className="size-7 rounded-full bg-green-500">
            <figure className="size-full relative">
              <img
                src={options[role.player].image}
                alt="avatar 1"
                className="object-cover object-center"
              />
            </figure>
          </div>

          <p className="text-lg text-nowrap font-medium tracking-wider xs:max-md:tracking-normal mr-5">
            {scores[role.player]}
          </p>
        </div>
        <p className="text-sm font-bold"> {options[role.player].name}</p>
      </div>

      <p className="font-bold text-4xl xs:max-md:text-base text-center text-slate-500">
        VS
      </p>

      {/* PLayer 2 */}
      <div className=" flex items-center justify-end gap-2">
        <p className="text-sm font-bold">{options[role.cpu].name}</p>
        <div className="relative z-10 flex gap-2 items-center bg-white p-2 xs:max-md:p-0 rounded-full overflow-hidden">
          <AnimatePresence>
            {turn === role.cpu && (
              <motion.div
                animate={{ x: ["100%", 0] }}
                exit={{ x: "-100%" }}
                className="absolute -z-10 size-full bg-yellow-500 rounded-full"
              ></motion.div>
            )}
          </AnimatePresence>

          <p className="text-lg text-nowrap font-medium tracking-wider xs:max-md:tracking-normal ml-5">
            {scores[role.cpu]}
          </p>

          <div className="size-7 rounded-full bg-green-500">
            <figure className="size-full relative">
              <img
                src={options[role.cpu].image}
                alt="avatar 1"
                className="object-cover object-center"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
