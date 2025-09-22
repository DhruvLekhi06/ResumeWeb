
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { Projects } from './components/Projects';
import { ProjectsMarquee } from './components/ProjectsMarquee';
import { ProjectDetail } from './components/ProjectDetail';
import type { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    window.scrollTo(0, 0);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="bg-[#0B0B13]">
      {selectedProject ? (
        <ProjectDetail project={selectedProject} onClose={handleCloseProject} />
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <ProjectsMarquee />
            <div className="bg-[#F3F3F3] text-zinc-900 rounded-t-[40px] pt-10 md:pt-20 -mt-10 relative z-10">
              <About />
              <Skills />
              <Projects onProjectClick={handleProjectClick} />
            </div>
            <Footer />
          </main>
        </>
      )}
    </div>
  );
};

export default App;