import PropTypes from "prop-types";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

Header.propTypes = {
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

function Header({ role, scores, turn }) {
  return (
    <div className="top-0 fixed h-24 xs:max-md:p-1 xs:max-md:relative xs:max-md:h-20 w-full bg-[#7BD0E8] xs:max-md:px-4 flex items-center justify-center ">
      <DesktopHeader role={role} />

      <MobileHeader role={role} scores={scores} turn={turn} />
    </div>
  );
}

export default Header;
