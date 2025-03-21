import { Game } from "../utils/game";
import PropTypes from "prop-types";

DesktopHeader.propTypes = {
  role: PropTypes.shape({
    player: PropTypes.string,
    cpu: PropTypes.string,
  }),
};

function DesktopHeader({ role }) {
  const options = new Game().getOptions();
  return (
    <div className="xs:max-500:hidden py-1 w-full max-w-[700px] xs:max-md:w-full xs:max-md:max-w-full mx-auto h-[60%] xs:max-md:h-[80%] flex justify-between items-center">
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
        <p className="text-lg xs:max-500:hidden text-nowrap font-medium tracking-wider xs:max-md:tracking-normal ml-5">
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
  );
}

export default DesktopHeader;
