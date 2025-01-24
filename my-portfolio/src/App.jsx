import Navbar from './components/Navbar';
import MainBody from './components/MainBody';

// import Homepage from './pages/Homepage';
// import ProjectCard from './components/ProjectCard';
// import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <MainBody />


      {/* Projects Section */}
      {/* Import projects grid component here */}

      {/* About Section */}
      {/* <div id="about" className="text-center">
        <h2 className="relative inline-block pb-2 mt-10 mb-4">
          <span>About:</span>
          <span
            className="absolute bottom-0 left-0 w-full h-2"
            style={{ backgroundColor: '#FDC435' }}
          ></span>
        </h2>
        <Homepage />
      </div> */}

      {/* Contact Section */}
      {/* <div id="contact" className="text-center">
        <h6 className="relative inline-block pb-2 mt-10 mb-4">
          <span>Contact:</span>
          <span
            className="absolute bottom-0 left-0 w-full h-2"
            style={{ backgroundColor: '#FDC435' }}
          ></span>
        </h6>
      </div> */}

      {/* <Footer /> */}
    </>
  );
}

export default App;
