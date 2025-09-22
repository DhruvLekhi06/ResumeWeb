
import React from 'react';
import type { Project } from '../types';

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <div className="group">
      <div className="flex justify-between items-center py-8 px-6 md:px-12 border-b border-gray-800 transition-colors duration-300 group-hover:bg-gray-900/50 cursor-pointer">
        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-8">
          <h3 className="text-3xl md:text-5xl font-bold text-gray-400 group-hover:text-white transition-colors duration-300">{project.name}</h3>
          <p className="text-md text-gray-500 group-hover:text-gray-300 transition-colors duration-300">{project.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;