import React from "react";
import './index.css';  // Ensure this line exists in your main entry file.
import NavbarMain from "./components/Navbar/NavbarMain";
import { BrowserRouter as Router } from 'react-router-dom';
import  HeroMain from "./components/heroSection/HeroMain"
import  HeroGradient from "./components/heroSection/HeroGradient"
import TechSkills from "./components/skillsSection/TechSkills"
import SoftSkills from "./components/skillsSection/SoftSkills"
import SkillMain from "./components/skillsSection/SkillMain"
import AboutMe from "./components/aboutMe/AboutMe"
import ProjectMain from "./components/projectsSection/ProjectsMain"
import ContactForm from "./components/contactForm/ContactForm"
import {Contact} from "lucide-react";
import SkillsSection from "./components/skillsSection/TechSkills"
import SkillsConstellation from "./components/skillsSection/SkillsConstellation"


function App() {
    return (
        <Router>
            <main className="font-body text-white relative overflow-hidden">
                <HeroMain/>
                <HeroGradient />
                <AboutMe/>
                <SkillMain />
                <ProjectMain/>
                <ContactForm />

            </main>
        </Router>
    );
}

export default App;
