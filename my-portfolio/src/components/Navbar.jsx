// Navbar.js
//import ProfilePicture from '../assets/ProfilePicture.png';
import { FaBlogger, FaRegFolder } from "react-icons/fa6";
import { FaRegAddressCard } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { BsHouseHeart } from "react-icons/bs";
import DarkTheme from "./DarkMode";

const Navbar = () => {
  return (
    <>
      <div className="NavContainer flex justify-evenly shadow-md pt-10 pb-10">
        {/* Home Link */}
        <a
          href="#home"
          className="mr-96 flex items-center gap-2 relative px-4 py-3 text-gray-700 after:block after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
        >
          <BsHouseHeart className="text-lg" />
          Danielle Lee
        </a>

        {/* Other Links */}
        <a
          href="#about"
          className="relative px-4 py-3 text-gray-700 after:block after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 flex items-center gap-2"
        >
          <FaRegAddressCard className="text-lg" />
          About
        </a>

        <a
          href="#projects"
          className="relative px-4 py-3 text-gray-700 after:block after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 flex items-center gap-2"
        >
          <FaRegFolder className="text-lg" />
          Projects
        </a>

        <a
          href="#contact"
          className="relative px-4 py-3 text-gray-700 after:block after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 flex items-center gap-2"
        >
          <FaRegEnvelope className="text-lg" />
          Contact
        </a>

        <a
          href="https://www.skiptocontent.co.uk/"
          target="_blank"
          className="relative px-4 py-3 text-gray-700 after:block after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 flex items-center gap-2"
        >
          <FaBlogger className="text-lg" />
          Blog
        </a>

        <DarkTheme />
      </div>
    </>
  );
};

export default Navbar;
