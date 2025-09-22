import React from 'react';
import { EXPERIENCES } from '../constants';

export const Experience: React.FC = () => (
  <section id="experiences" className="container mx-auto px-6 py-20">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Experience</h2>
    <div className="space-y-8">
      {EXPERIENCES.map(exp => (
        <div key={exp.id} className="bg-white rounded-2xl p-8 grid md:grid-cols-3 gap-8 items-start shadow-sm border border-gray-100">
          <div className="md:col-span-1">
            <p className="text-gray-500">{exp.company}</p>
            <h3 className="text-2xl font-bold mt-1">{exp.role}</h3>
            <p className="text-gray-400 mt-2">{exp.period}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-gray-600 leading-relaxed">{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
