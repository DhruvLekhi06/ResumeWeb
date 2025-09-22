
import React from 'react';
import { PROJECTS } from '../constants';
import ProjectItem from './ProjectItem';

const ProjectList: React.FC = () => {
  return (
    <div className="border-t border-gray-800">
      <div>
        {PROJECTS.map((project) => (
          <ProjectItem
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;