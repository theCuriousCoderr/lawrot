import PropTypes from "prop-types";

Header.propTypes = {
  role: PropTypes.object,
  options: PropTypes.object,
};

function Header({ role, options }) {
  return (
    <div className="top-0 fixed h-24 xs:max-md:h-20 w-full bg-[#7BD0E8] xs:max-md:px-4 flex items-center justify-center ">
      <div className="py-1 w-full max-w-[700px] xs:max-md:w-full xs:max-md:max-w-full mx-auto h-[60%] flex justify-between items-center">
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
      {/* <h1 className="w-full text-center text-3xl font-bold text-white" >THE ULTIMATE TWIST-TAC-TOE</h1> */}
    </div>
  );
}

export default Header;
