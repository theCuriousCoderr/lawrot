import PropTypes from "prop-types";
import { Game } from "../utils/game";

DesktopScoreBoard.propTypes = {
  role: PropTypes.shape({
    player: PropTypes.string,
    cpu: PropTypes.string,
  }),
  scores: PropTypes.shape({
    one: PropTypes.number,
    two: PropTypes.number,
  }),
};

function DesktopScoreBoard({ role, scores }) {
  const options = new Game().getOptions();
  return (
    <div className="xs:max-500:hidden fixed z-30 w-full left-0 bottom-10 xs:max-md:bottom-6 xs:max-md:px-5">
      <div className="w-full max-w-[400px] mx-auto">
        <div className="w-full mx-auto h-10 xs:max-md:h-8 flex justify-between items-center">
          {/* player 1 */}
          <div className="h-full xs:max-md:w-16">
            <div className="h-full flex gap-2 xs:max-md:gap-1  items-center bg-white rounded-full">
              <div className="h-full aspect-square rounded-full bg-green-500">
                <figure className="size-full relative">
                  <img
                    src={options[role.player].image}
                    alt="avatar 1"
                    className="object-cover object-center"
                  />
                </figure>
              </div>
              <p className="text-lg xs:max-md:text-sm font-medium tracking-wider mr-5">
                {scores[role.player]}
              </p>
            </div>
            <p className="font-medium xs:max-md:text-sm text-nowrap text-white">
              PLAYER 1
            </p>
          </div>

          {/* player 2 */}
          <div className="h-full xs:max-md:w-16">
            <div className="h-full flex w-full gap-2 xs:max-md:gap-1 items-center justify-end bg-white rounded-full">
              <p className="text-lg xs:max-md:text-sm font-medium tracking-wider ml-5">
                {scores[role.cpu]}
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

            <p className="font-medium xs:max-md:text-sm text-nowrap text-white">
              PLAYER 2
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopScoreBoard;
