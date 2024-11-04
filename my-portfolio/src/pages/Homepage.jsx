import React from "react";

const Homepage = () => {
    return ( 
        <>
        <div className="mainContainer flex flex-col justify-center items-center p-3 space-y-4">

        {/* about container */}
        <div className="aboutContainer text-wrap flex-col p-8 ml-72 mr-72">
        <h2>About</h2>
        <p>Hi, I&apos;m Danielle, a software developer based in London. 
          I discovered coding during lockdown and have been hooked on it ever since. 
          Drawn to the ability or bring ideas to life with creative solutions, coding has been 
          a challenging yet rewarding gateway into the tech community. 
          Currently a student with Founder and Coders,  I&apos;m continuously expanding my skills in this dynamic, collaborative environment. 
          Above everything else, I have found a supportive community through collaboration and peer led
          support.</p>
          <br />
          <p>Beyond tech, I&apos;m a travel enthusiast, I enjoy a good puzzle, and love to learn languages
            under duress from duolingo. 
          </p>
    
        </div>

      {/* projects container */}
      <div className="projectsContainer">
        <h2>Projects</h2>
      </div>

      </div>


        </>
     );
}
 
export default Homepage;