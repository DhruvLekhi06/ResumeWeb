
import React from 'react';
import { PROJECTS } from '../constants';
import { ProjectCard } from './ProjectCard';

export const ProjectsMarquee: React.FC = () => {
  const allProjects = [...PROJECTS, ...PROJECTS, ...PROJECTS, ...PROJECTS]; // Duplicate for seamless loop

  return (
    <section className="py-20 -mt-20 md:-mt-24 relative z-20">
      <div className="w-full overflow-x-hidden">
        <div className="flex w-max animate-marquee">
          {allProjects.map((project, index) => (
            <ProjectCard key={`${project.id}-${index}`} project={project} onClick={() => {}} isClickable={false} />
          ))}
        </div>
      </div>
    </section>
  );
};