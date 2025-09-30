import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { SiCodewars } from "react-icons/si";

const Footer = () => {

const currentYear = new Date().getFullYear(); 


    return ( 

        <>

{/* Contact section */}
<div id="contact" className="text-center">
<h6 className="relative inline-block pb-2 mt-10 mb-4">
  <span>Contact:</span>
  <span
    className="absolute bottom-0 left-0 w-full h-2"
    style={{ backgroundColor: '#FDC435' }}
  ></span>
</h6>
</div>

        <div className="footer flex flex-row justify-center space-x-4 m-5">
    {/* LinkedIn Icon */}
    <a href="https://www.linkedin.com/in/danielle-lee-ab8b0887/" target="_blank" rel="noopener noreferrer">
        <div className="border-2 border-yellow-400 p-1 ">
            <FaLinkedin size={32} color="#4e4b4b" aria-hidden="true"/>
        </div>
        <span className="sr-only">Visit my LinkedIn profile</span>
    </a>

    {/* Github Icon */}
    <a href="https://github.com/Danielle73/" target="_blank" rel="noopener noreferrer">
        <div className="border-2 border-yellow-400 p-1 rounded-full">
            <FaGithub size={32} color="#4e4b4b" aria-hidden="true"/>
        </div>
        <span className="sr-only">Visit my GitHub profile</span>
    </a>

    {/* Codewars Icon */}
    {/* <a href="https://www.linkedin.com/in/danielle-lee-ab8b0887/" target="_blank" rel="noopener noreferrer">
        <div className="border-2 border-yellow-400 p-1 ">
            <SiCodewars size={32} color="#4e4b4b" />
        </div>
    </a> */}
</div>

        <p className="flex justify-center text-sm text-gray-700">Danielle Lee {currentYear}</p>

        </>
    );
}
 
export default Footer;
