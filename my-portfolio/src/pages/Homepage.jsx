const Homepage = () => {
    return ( 
        <>
        <div className="mainContainer flex flex-col justify-center items-center p-3 space-y-4">

        {/* about container */}
        <div className="aboutContainer text-wrap flex-col p-8 ml-36 mr-36 ">

        <p>
          Hi, I&apos;m Danielle, a Front-End Developer with a strong foundation in React, TypeScript, and JavaScript. 
          After completing the Founders & Coders bootcamp, I&apos;ve continued refining my skills through personal projects, 
          technical challenges, and continuous learning.
          </p>
          <br />
          <p>
            With a background in marketing and customer service, I bring a user-focused approach to web development
            alongside a growing specialisation in web accessibility and inclusive design. 
            I&apos;m committed to learning and implementing WCAG guidelines, semantic HTML, and accessible design patterns 
            to create better experiences for all users.
            </p>
          <br /> 
        <p>Beyond tech, I&apos;m a travel enthusiast, a puzzle lover, and an avid language learner (thanks to Duolingo&apos;s duress).</p>
    
        </div>
      </div>


        </>
     );
}
 
export default Homepage;