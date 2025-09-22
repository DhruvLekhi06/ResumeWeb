
import React from 'react';
import { SKILLS } from '../constants';

export const Skills: React.FC = () => (
  <section id="skills" className="container mx-auto px-6 py-20">
    <h2 className="text-4xl md:text-5xl font-bold text-center">Skills</h2>
    <div className="mt-12 flex flex-wrap justify-center gap-4">
      {SKILLS.map(skill => (
        <div key={skill} className="px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-700 font-medium">
          {skill}
        </div>
      ))}
    </div>
  </section>
);
