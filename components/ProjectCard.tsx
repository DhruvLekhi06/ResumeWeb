
import React from 'react';
import type { Project } from '../types';

export const ProjectCard: React.FC<{ project: Project; onClick: () => void; isClickable?: boolean; }> = ({ project, onClick, isClickable = true }) => (
  <div
    onClick={isClickable ? onClick : undefined}
    className={`group relative block rounded-2xl overflow-hidden shadow-lg ${isClickable ? 'cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105' : ''}`}
  >
    <img
      src={project.image}
      alt={project.name}
      className={`w-full h-64 object-cover ${isClickable ? 'transition-transform duration-500 ease-in-out group-hover:scale-110' : ''}`}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-6">
      <h3 className="text-2xl font-bold text-white">{project.name}</h3>
      <p className="text-sm text-gray-300">{project.category}</p>
    </div>
  </div>
);