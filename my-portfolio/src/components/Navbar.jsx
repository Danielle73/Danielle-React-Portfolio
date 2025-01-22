// Navbar.js
import ProfilePicture from '../assets/ProfilePicture.png';
import { FaRegFolder } from "react-icons/fa6";
import { FaRegAddressCard } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { BsHouseHeart } from "react-icons/bs";
import DarkTheme from './DarkMode';


const Navbar = () => {
  return ( 
    <>
      <div className="NavContainer flex justify-evenly shadow-md">
        {/* Home Link */}
        <a href="#home" className="mr-96 hover:bg-yellow-400 flex items-center gap-2"><BsHouseHeart className="text-lg"/>Danielle Lee</a>

        {/* Other Links */}
        <a href="#about" className="px-8 hover:bg-yellow-400 flex items-center gap-2">
          <FaRegAddressCard className="text-lg" />About</a>


        <a href="#projects" className="px-8 hover:bg-yellow-400 flex items-center gap-2">
          <FaRegFolder className="text-lg" />Projects</a>

        <a href="#contact" className="px-8 hover:bg-yellow-400 flex items-center gap-2"><FaRegEnvelope className="text-lg"/>Contact</a>

        <DarkTheme />

      </div>
      

    </>
  );
};

export default Navbar;
