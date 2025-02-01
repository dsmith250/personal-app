import { useEffect, React } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import OtherDevelopers from "./components/OtherDevelopers";
import ContactForm from "./components/ContactForm";

function App() {

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollTop = window.scrollY;

      // Reset blur if at the top of the page
      if (scrollTop === 0) {
        sections.forEach((section) => {
          section.classList.add("section-blur");
          section.classList.remove("section-clear");
        });
        return; // Skip the rest of the logic
      }

      // Apply or remove blur based on scroll position
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
          section.classList.add("section-clear");
          section.classList.remove("section-blur");
        } else {
          section.classList.add("section-blur");
          section.classList.remove("section-clear");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (    
  <div>
    <Navbar />  {/* Add Navbar */}
    <Header />
    <About />
    <Projects />
    <OtherDevelopers />
    <ContactForm />
  </div>
  )
}

export default App
