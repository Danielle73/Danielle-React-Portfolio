import Navbar from './components/Navbar';
import MainBody from './components/MainBody';
import ProjectsGrid from './components/ProjectsGrid';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <MainBody />

      <ProjectsGrid />

      <AboutSection />     

      <Footer />
    </>
  );
}

export default App;
