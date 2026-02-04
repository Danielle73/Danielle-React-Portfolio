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
  title="AI Background Remover"
  description="Real-time background removal with MediaPipe"
  details={`
      Stack: Next.js • React • MediaPipe • TensorFlow.js • Canvas API. \n
      Summary: 
      Browser-based image processing tool leveraging Google's MediaPipe for real-time background removal. 
      Demonstrates integration of pre-trained ML models for client-side computer vision tasks. \n
      Built following MediaPipe documentation to understand ML model integration in production web apps. \n
      
      Highlights: 
      • Integrated Google's MediaPipe Selfie Segmentation model for accurate person detection. \n
      • Implemented Canvas API for pixel-level image processing and composition. \n
      • Optimized client-side performance for real-time processing without backend dependencies. \n
    `}
      repoUrl="https://github.com/Danielle73/mediapipe-background-remover"
/> 

  <ProjectCard 
  title="Garnet"
  description="A privacy focused menstrual cycle tracker"
  details={`
    Stack: React • TypeScript • Tailwind CSS • shadcn/ui
    Summary: Garnet is a client-side period tracking app that keeps the user data local on the user's device. 
    No servers, accounts or tracking, Garnet provides private cycle logging and history visualisaton through an interactive calendar.  
  `}
  repoUrl="https://github.com/Danielle73/Garnet"
/>


 <ProjectCard 
      title="Habit tracker"
      description="Daily habit builder with offline support"
      details={`
        Stack: React • Typescript • Vite • Tailwind • HTML • CSS.\n
        Summary: A Progressive Web App for building daily habbits with offline-first architecture.\n
        Can be installed on any device for native app-like experience with full offline functionality.
            `}

      //imageUrl="src/assets/SimonGame.png"
      repoUrl="https://github.com/Danielle73/habit-tracker"
    />


   <ProjectCard
      title="Whatever the Weather"
      description="Real-time API integration with error handling"
      details={`
        Stack: React • TypeScript • Axios • OpenWeather API\n
        Summary: 
        A Client-side application demonstrating RESTful API integration, asynchronous JavaScript, and error handling for invalid inputs and network failures.\n
        `}
      //imageUrl="/src/assets/Mission-Possible.png"
      repoUrl="https://github.com/Danielle73/Weather_App"
    /> 

    {/* <ProjectCard 
      title="Simon Game"
      description="A color memory game"
      details={`
        🧰 Stack: JavaScript, HTML, CSS.\n
        📖 Summary: A memory game where players repeat an increasingly complex color and tone sequence.\n
        🎯 Purpose: Reinforce game logic, DOM manipulation, and UI/UX effects.\n
        🧑‍💻 My Role: Developed game logic, UI animations, and styled the dystopian theme.\n
        🚧 Challenge: Managing timing for animations and ensuring audio synced with user interaction.\n
        ✅ Result: Produced a fully interactive game with difficulty settings, unique visuals, and sound effects.`}

      //imageUrl="src/assets/SimonGame.png"
      repoUrl="https://github.com/FAC-community/summer2024/tree/main/users/Danielle%26JackGame/Simon%20game%20Vanilla"
    /> */}

    {/* <ProjectCard
      title="Mission Possible"
      description="To do list app"
      details={`
        🧰 Stack: React, TypeScript, Tailwind CSS.\n
        📖 Summary: A single-page app to manage tasks with local persistence.\n 
        🎯 Purpose: Created to practice CRUD operations and client-side persistence.\n
        🧑‍💻 My Role: Built the entire app from scratch, including API integration, UI layout, and error handling.
        🚧 Challenge: I initially struggled to persist data. I solved this by learning and implementing useEffect to sync tasks with localStorage.\n
        ✅ Result: The app now persists data for user notes, and when page is reloaded.`}
      //imageUrl="/src/assets/Mission-Possible.png"
      repoUrl="https://github.com/Danielle73/Mission-Possible"
    /> 
     */}


    {/* <ProjectCard
      title="Cook-Nest"
      description="A receipe app"
      details={`🧰 Stack: C#, PostgreSQL, React, TypeScript\n
        📖 Summary: A team-built recipe manager app that allows users to search, curate, and add custom recipes.\n
        🎯 Purpose: Developed during the Founders & Coders bootcamp to challenge myself on backend development and gain hands-on experience with databases.\n
        🧑‍💻 My Role: Focused on building a minimal API in C#, designing and implementing the PostgreSQL schema, and integrating backend logic with the frontend.\n
        🚧 Challenge: Learning how to structure a scalable relational database and connect it smoothly to a TypeScript frontend.\n
        ✅ Result: Strengthened my backend skills, contributed to a collaborative Agile workflow, and built confidence in full-stack development.`}

      //imageUrl="/src/assets/COOK-NEST.svg"
      repoUrl="https://github.com/fac30/PRO05_Riley_Tanya_Dani_Levi"
    /> */}

    {/* <ProjectCard
      title="Canvas Collective"
      description="An e-commerce for artists"
      details={`
        🧰 Stack: React, Tailwind CSS, TypeScript, Figma\n
        📖 Summary: A team-built e-commerce platform showcasing and selling artwork from local artists.\n
        🎯 Purpose: Developed as part of the Founders & Coders bootcamp to explore accessibility, UI/UX design, and responsive layouts.\n
        🧑‍💻 My Role: Led front-end development. Translated the Figma wireframe into a functional, visually consistent React UI using Tailwind CSS.\n
        🚧 Challenge: Ensuring pixel-perfect implementation while maintaining responsive, accessible components across devices.\n
        ✅ Result: Successfully delivered a polished user interface that reflected the original design vision, enhanced usability, and performed well across breakpoints.`}

      //imageUrl=""
      repoUrl="https://github.com/fac30/PRO04_FRONT_GAJ_LEVI_DANI_ITZI"
    />
      */}


     {/* <ProjectCard
      title="Quizzer App"
      description="A quiz app"
      details={`
        🧰 Stack: React, TypeScript, Tailwind CSS, Cypress, Figma\n
        📖 Summary: A quiz app developed as part of the Founders & Coders bootcamp, designed to let users take and track custom quizzes.\n
        🎯 Purpose: Deepen understanding of UI design-to-code workflows and apply end-to-end testing using Cypress in a team setting.\n
        🧑‍💻 My Role: Created the Figma designs and implemented key UI components using React and Tailwind. I also wrote Cypress tests to validate core user flows.\n
        🚧 Challenge: Due to a team merge, security and time constraints, we were unable to deliver a fully functional app. However, I gained practical experience in collaborating across design and development and saw the importance of adaptable communication.\n
        ✅ Result: Strengthened my confidence in translating UI mockups into code and improved my ability to write meaningful automated tests, even in an unfinished product context.`}

      //imageUrl="/src/assets/gamelogo.jpg"
      repoUrl="https://github.com/fac30/PRO03_FRONT_DANI_WILL_BEN"
    /> */}


     {/* <ProjectCard
      title="Galactic Gateways"
      description="A interplanetary travel agents"
      details={`
        🧰 Stack: React, TypeScript, Tailwind CSS\n
        📖 Summary: A space-themed travel planner app that lets users book trips to different planets. The app dynamically changes its theme based on the selected planet (e.g., red for Mars, blue for Earth).\n
        🎯 Purpose: Developed during the Founders & Coders bootcamp to practice core front-end skills and collaborative Agile workflows.\n
        🧑‍💻 My Role: Served as team lead, coordinated development tasks, and contributed to both the UI logic and planet-based theming system.\n
        🚧 Challenge: Tight time constraints tested our planning and flexibility, but the project became a valuable opportunity to grow foundational DOM manipulation skills and practice sprint-based collaboration.\n
        ✅ Result: Gained confidence leading a team, sharpened project management and Agile practices, and strengthened front-end fundamentals through practical delivery.`}

      //imageUrl="/src/assets/galactic-gateways-logo.png"
      repoUrl="https://github.com/fac30/PRO01_Danielle_Jason_Khalos"
    /> */}

    </div>
  </div>
  )
}

export default ProjectsGrid;