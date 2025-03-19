import { motion, AnimatePresence } from "motion/react";
import PropTypes from "prop-types";

Header.propTypes = {
  role: PropTypes.object,
  options: PropTypes.object,
  scores: PropTypes.object,
  turn: PropTypes.string,
};

function Header({ role, options, scores, turn }) {
  return (
    <div className="top-0 fixed h-24 xs:max-md:p-1 xs:max-md:relative xs:max-md:h-auto w-full bg-[#7BD0E8] xs:max-md:px-4 flex items-center justify-center ">
      <div className="xs:max-500:hidden py-1 w-full max-w-[700px] xs:max-md:w-full xs:max-md:max-w-full mx-auto h-[60%] flex justify-between items-center">
        <div className="h-full flex gap-2 items-center bg-white p-2 xs:max-md:p-1 rounded-full">
          <div className="h-full aspect-square rounded-full bg-green-500">
            <figure className="size-full relative">
              <img
                src={options[role.player].image}
                alt="avatar 1"
                className="object-cover object-center"
              />
            </figure>
          </div>
          <p className="text-lg xs:max-500:hidden text-nowrap font-medium tracking-wider xs:max-md:tracking-normal mr-5">
            {options[role.player].name}
          </p>
        </div>
        <p className="font-bold text-4xl xs:max-md:text-base">VS</p>
        <div className="h-full flex gap-2 items-center bg-white p-2 xs:max-md:p-1 rounded-full">
          <p className="text-lg xs:max-500:hidden font-medium tracking-wider xs:max-md:tracking-normal ml-5">
            {" "}
            {options[role.cpu].name}
          </p>
          <div className="h-full aspect-square rounded-full bg-green-500">
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
      {/* <h1 className="w-full text-center text-3xl font-bold text-white" >THE ULTIMATE TWIST-TAC-TOE</h1> */}
    </div>
  );
}

export default Header;
