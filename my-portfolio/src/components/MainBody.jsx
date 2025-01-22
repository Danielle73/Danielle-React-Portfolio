function MainBody(){
    return (

      <div className="TopContainer flex justify-evenly mt-28 mb-28">
      <div className="LeftContainer m-8">
        <h2 className='dark-mode'>Hello I&apos;m Danielle</h2>
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


      <div className="RightContainer relative m-8">
        <img 
          src={ProfilePicture} 
          alt="Profile Picture" 
          className="rounded-full border-8 border-yellow-400"
          width={350}
        />
      </div>
    </div>
    )
}

export default MainBody