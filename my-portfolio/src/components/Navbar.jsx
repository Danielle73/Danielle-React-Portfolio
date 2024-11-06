// Navbar.js
import ProfilePicture from '../assets/ProfilePicture.png';

const Navbar = () => {
  return ( 
    <>
      <div className="NavContainer flex justify-evenly shadow-md">
        {/* Home Link */}
        <a href="#home" className="mr-96 hover:bg-yellow-400">Danielle Lee</a>

        {/* Other Links */}
        <a href="#about" className="px-8 hover:bg-yellow-400">About</a>
        <a href="#projects" className="px-8 hover:bg-yellow-400">Projects</a>
        <a href="#contact" className="px-8 hover:bg-yellow-400">Contact</a>
      </div>

      <div className="TopContainer flex justify-evenly mt-28 mb-28">
        <div className="LeftContainer m-8">
          <h2>Hello I&apos;m Danielle</h2>
          <div className="aboutMeParagraph text-4xl"> 
            <p>I&apos;m a Front-End Developer <br /> based in London.</p>
            <p>Nice to meet you!</p>
          </div>
          <br />
          <button className="custom-button mr-2" 
          onClick={() => window.open("https://www.linkedin.com/in/danielle-lee-ab8b0887/", "_blank")}
          >LinkedIn</button> 
  
          <button className="custom-button"
            onClick={() => window.open('https://drive.google.com/file/d/1e5yI5PqJmPUuvbFEHFXB5hDxlwIsJTmv/view?usp=sharing', '_blank')}
          >C.V.</button>
        </div>
        <div className="RightContainer m-8">
          <img 
            src={ProfilePicture} 
            alt="Profile Picture" 
            className="rounded-full border-8 border-yellow-400"
            width={350}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
