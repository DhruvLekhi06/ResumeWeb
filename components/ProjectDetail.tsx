
import React from 'react';
import type { Project } from '../types';
import { BackIcon } from './Icons';

export const ProjectDetail: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-[#0B0B13] z-50 animate-[fadeIn_0.5s_ease-in-out] overflow-y-auto">
      <header className="relative text-center py-20 md:py-32 px-6 min-h-[50vh] flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/60 via-[#0B0B13] to-[#0B0B13] z-0"></div>
        <button onClick={onClose} className="absolute top-8 left-8 z-20 flex items-center gap-2 text-white hover:text-gray-300 transition-colors font-semibold" aria-label="Go back to portfolio">
            <BackIcon />
            <span>Back</span>
        </button>
        <div className="relative z-10">
          <p className="text-sm md:text-base text-gray-400 uppercase tracking-widest">{project.category}</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mt-4 uppercase tracking-tighter leading-tight">{project.name}</h1>
        </div>
      </header>

      <div className="bg-[#F3F3F3] text-zinc-900 rounded-t-[40px] p-8 md:p-16 -mt-10 relative z-10 pb-20">
        <div className="max-w-4xl mx-auto">
          <section aria-labelledby="about-project-heading">
            <h2 id="about-project-heading" className="text-3xl font-bold mb-4">About the project</h2>
            <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">{project.longDescription}</p>
          </section>
          
          <section aria-labelledby="project-preview-heading" className="mt-12">
            <h2 id="project-preview-heading" className="text-3xl font-bold mb-4">Project Preview</h2>
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-black">
                <div className="relative" style={{ paddingTop: '56.25%' }}> {/* 16:9 aspect ratio */}
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={project.videoUrl}
                        title="Project Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
