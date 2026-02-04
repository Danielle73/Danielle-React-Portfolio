const Homepage = () => {
    return ( 
        <>
        <div className="mainContainer flex flex-col justify-center items-center p-3 space-y-4">

        {/* about container */}
        <div className="aboutContainer text-wrap flex-col p-8 ml-36 mr-36">

        <p className="text-gray-700">
          Frontend Developer building accessible React applications with TypeScript and 
          modern web technologies. Currently at Vsphera, where I contribute to production 
          codebases, implement WCAG-compliant features, and translate Figma designs into 
          responsive components. </p>
          <br />
          <p className="text-gray-700">
          My projects include a period tracker with client-side data storage, an
          AI-powered background remover using MediaPipe, and a Progressive Web App with 
          offline functionality. With a background in marketing and customer service, I 
          bring strong communication skills and a user-focused approach to development.
          </p>
          <br />
          <p className="text-gray-700">
          Based in London, learning British Sign Language, and seeking frontend roles
          where I can build quality products with thoughtful teams.
            </p>
          <br /> 
        <p className="text-gray-700">Beyond tech, I&apos;m a travel enthusiast, a puzzle lover, and an avid language learner (thanks to Duolingo&apos;s duress).</p>
    
        </div>
      </div>


        </>
     );
}
 
export default Homepage;