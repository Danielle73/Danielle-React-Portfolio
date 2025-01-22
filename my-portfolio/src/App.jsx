import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import MainBody from './components/MainBody';

import './App.css';

function App() {
  return (
    <>
      {/* Home Section */}
      <div id="home"></div>

      <Navbar />

      <MainBody />

      {/* Projects Section */}
      <div id="projects" className="text-center">
        <h2 className="relative inline-block pb-2 mt-10 mb-4">
          <span>Projects:</span>
          <span
            className="absolute bottom-0 left-0 w-full h-2"
            style={{ backgroundColor: '#FDC435' }}
          ></span>
        </h2>
        <ProjectCard
          title="Simon Game"
          description="A color memory game"
          imageUrl="..my-portfolio/src/assets/SimonGame.png"
          repoUrl="https://github.com/FAC-community/summer2024/tree/main/users/Danielle%26JackGame/Simon%20game%20Vanilla"
        />
        <ProjectCard
          title="My Project"
          description="This is my awesome project"
          imageUrl="/project-image.jpg"
          repoUrl="https://github.com/myproject"
        />
      </div>

      {/* About Section */}
      <div id="about" className="text-center">
        <h2 className="relative inline-block pb-2 mt-10 mb-4">
          <span>About:</span>
          <span
            className="absolute bottom-0 left-0 w-full h-2"
            style={{ backgroundColor: '#FDC435' }}
          ></span>
        </h2>
        <Homepage />
      </div>

      {/* Contact Section */}
      <div id="contact" className="text-center">
        <h6 className="relative inline-block pb-2 mt-10 mb-4">
          <span>Contact:</span>
          <span
            className="absolute bottom-0 left-0 w-full h-2"
            style={{ backgroundColor: '#FDC435' }}
          ></span>
        </h6>
      </div>

      <Footer />
    </>
  );
}

export default App;
