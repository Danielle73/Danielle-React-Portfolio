//import React from "react";
import ProfilePicture from '../assets/ProfilePicture.png';

const Navbar = () => {
    return ( 
        <>

        <div className="NavContainer flex justify-evenly shadow-md">
            <a href="#Home" className="mr-96">Danielle Lee</a>
            <a href="#About" className="px-8">About</a>
            <a href="#Projects" className="px-8">Projects</a>
            <a href="#Contact" className="px-8">Contact</a>
        </div>

        <div className="TopContainer flex justify-evenly mt-28 mb-28">
            <div className="LeftContainer m-8">
                <h2>Hello I&apos;m Danielle</h2>
                <div className="aboutMeParagraph text-4xl"> 
                <p>I&apos;m a Front-End Developer <br /> based in London.</p>
                <p>Nice to meet you!</p>
                </div>
                <br />
                <button>C.V.</button> <button>Contact</button>
            </div>
            <div className="RightContainer m-8">
            <img 
            src={ProfilePicture} 
            alt="Profile Picture" 
            className="rounded-full"
            width={350}/>
            </div>
        </div>
        
        
        </>
     );
}
 
export default Navbar;