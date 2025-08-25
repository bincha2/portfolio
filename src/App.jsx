import React from 'react'
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Experience from "./sections/Experience.jsx";
import Contact from "./sections/Contact.jsx";
import ParticleBackground from "./components/ParticleBackground.jsx";

const App = () => {
    return (
        <div className="relative min-h-screen bg-black">
            <ParticleBackground />
            <main className="max-w-7xl mx-auto relative z-10">
                <Navbar />
                <Hero />
                <About/>
                <Experience/>
                <Projects/>
                <Contact/>
            </main>
        </div>
    )
}
export default App





