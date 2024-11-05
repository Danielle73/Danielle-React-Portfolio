import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

const Footer = () => {

const currentYear = new Date().getFullYear(); 


    return ( 

        <>
        <div className="footer flex flex-row justify-center space-x-4 m-5">
            {/* LinkedIn Icon */}
            <a href="https://www.linkedin.com/in/danielle-lee-ab8b0887/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={32} color="black" /> {/* Adjust size and color as needed */}
            </a>

            {/* github */}
            <a href="https://www.linkedin.com/in/danielle-lee-ab8b0887/" target="_blank" rel="noopener noreferrer">
                <FaGithub size={32} color="black" /> {/* Adjust size and color as needed */}
            </a>

             {/* codewars */}
             <a href="https://www.linkedin.com/in/danielle-lee-ab8b0887/" target="_blank" rel="noopener noreferrer">
                <SiCodewars size={32} color="black" /> {/* Adjust size and color as needed */}
            </a>
        </div>

        <p className="flex justify-center text-sm" >Danielle Lee {currentYear}</p>

        </>
    );
}
 
export default Footer;
