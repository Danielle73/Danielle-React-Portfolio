import ProjectCard from './ProjectCard';
function ProjectsGrid(){
    return(
    <div id="projects" className="text-center">
    <h2 className="relative inline-block pb-2 mt-10 mb-4">
      <span>Projects:</span>
      <span
        className="absolute bottom-0 left-0 w-full h-2"
        style={{ backgroundColor: '#FDC435' }}
      ></span>
    </h2>
    <div className="flex flex-wrap mt-28">
    <ProjectCard 
      title="Simon Game"
      description="A color memory game"
      //imageUrl="src/assets/SimonGame.png"
      repoUrl="https://github.com/FAC-community/summer2024/tree/main/users/Danielle%26JackGame/Simon%20game%20Vanilla"
    />
    <ProjectCard
      title="Mission Possible"
      description="To do list app"
      //imageUrl="/src/assets/Mission-Possible.png"
      repoUrl="https://github.com/Danielle73/Mission-Possible"
    /> 
    <ProjectCard
      title="Cook-Nest"
      description="A receipe app"
      //imageUrl="/src/assets/COOK-NEST.svg"
      repoUrl="https://github.com/fac30/PRO05_Riley_Tanya_Dani_Levi"
    />

    <ProjectCard
      title="Canvas Collective"
      description="An e-commerce for artists"
      //imageUrl=""
      repoUrl="https://github.com/fac30/PRO04_FRONT_GAJ_LEVI_DANI_ITZI"
    />
     
     <ProjectCard
      title="Quizzer App"
      description="A quiz app"
      //imageUrl="/src/assets/gamelogo.jpg"
      repoUrl="https://github.com/fac30/PRO03_FRONT_DANI_WILL_BEN"
    />
     <ProjectCard
      title="Galactic Gateways"
      description="A interplanetary travel agents"
      //imageUrl="/src/assets/galactic-gateways-logo.png"
      repoUrl="https://github.com/fac30/PRO01_Danielle_Jason_Khalos"
    />

    </div>
  </div>
  )
}

export default ProjectsGrid;