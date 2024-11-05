import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'


import './App.css'

function App() {
  return (
    <>  
    <Navbar />

    {/* projects section */}

    <div id="Projects" className="text-center">
       <h2 className="relative inline-block pb-2 mt-10 mb-4">
          <span>Projects:</span>
        <span 
            className="absolute bottom-0 left-0 w-full h-2" // h-2 makes it thicker
            style={{ backgroundColor: '#FDC435' }}></span>
        </h2>
    </div>
    
    <ProjectCard 
    title="My Project"
    description="This is my awesome project"
    imageUrl="/project-image.jpg"
    repoUrl="https://github.com/myproject"
    />
    
    <ProjectCard 
    title="My Project"
    description="This is my awesome project"
    imageUrl="/project-image.jpg"
    repoUrl="https://github.com/myproject"
    />
    

    {/* About section */}

    <div id="About" className="text-center">
       <h2 className="relative inline-block pb-2 mt-10 mb-4">
          <span>About:</span>
        <span 
            className="absolute bottom-0 left-0 w-full h-2" // h-2 makes it thicker
            style={{ backgroundColor: '#FDC435' }}></span>
        </h2>
    </div>
    <Homepage />


{/* Contact Section */}

    <div id="Contact" className="text-center">
       <h6 className="relative inline-block pb-2 mt-10 mb-4">
          <span>Contact:</span>
        <span 
            className="absolute bottom-0 left-0 w-full h-2" // h-2 makes it thicker
            style={{ backgroundColor: '#FDC435' }}></span>
        </h6>
    </div>

    <Footer />
    </>
   
  )
}

export default App
