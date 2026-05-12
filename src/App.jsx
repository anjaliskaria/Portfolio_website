import { useEffect, useState } from 'react';
import './App.css'; // This tells Vite to load your custom styles
import AOS from 'aos'
import 'aos/dist/aos.css'; // This imports the AOS styles
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
     AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once - while scrolling down 
      offset:100  
    });
    document.documentElement.classList.add('dark')
     },[]);

     const toggleDarkMode = () => {
        const newMode=!darkMode;
        setDarkMode(newMode); 
        document.documentElement.classList.toggle('dark') 
     }
    return (
    /* The #center ID in your App.css handles the layout and centering */
    <div
    className={
    darkMode ? "bg-gradient-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen" 
    : "bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen"
     }>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App; 