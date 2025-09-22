
import React from 'react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';
import { ProjectCard } from './ProjectCard';

export const Projects: React.FC<{ onProjectClick: (project: Project) => void }> = ({ onProjectClick }) => {
  return (
    <section id="projects" className="container mx-auto px-6 py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} onClick={() => onProjectClick(project)} />
        ))}
      </div>
    </section>
  );
};
