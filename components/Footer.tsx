
import React, { useState } from 'react';
import { ArrowRightIcon, LinkedInIcon, GitHubIcon } from './Icons';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      const subject = encodeURIComponent("Project Inquiry");
      const body = encodeURIComponent(`Hi Dhruv,\n\nI'd like to discuss a project. My email is ${email}.\n\nBest regards,`);
      window.location.href = `mailto:dhruvlekhi06@gmail.com?subject=${subject}&body=${body}`;
    }
  };

  return (
    <footer id="contact" className="bg-[#0B0B13] pt-20">
      <div className="relative overflow-hidden border-t border-b border-gray-800">
          <div className="flex whitespace-nowrap animate-marquee-slow py-6">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-5xl mx-4 font-bold">Contact Me •</span>
                <span className="text-5xl mx-4 font-bold">Contact Me •</span>
                <span className="text-5xl mx-4 font-bold">Contact Me •</span>
                <span className="text-5xl mx-4 font-bold">Contact Me •</span>
              </div>
              <div className="flex-shrink-0 flex items-center" aria-hidden="true">
                <span className="text-5xl mx-4 font-bold">Contact Me •</span>
                <span className="text-5xl mx-4 font-bold">Contact Me •</span>
                <span className="text-5xl mx-4 font-bold">Contact Me •</span>
                <span className="text-5xl mx-4 font-bold">Contact Me •</span>
              </div>
          </div>
      </div>
      <div className="container mx-auto px-6 py-20 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <div>
              <p className="text-gray-400">Email</p>
              <a href="mailto:dhruvlekhi06@gmail.com" className="text-xl">dhruvlekhi06@gmail.com</a>
            </div>
            <div className="mt-6">
              <p className="text-gray-400">Phone Number</p>
              <a href="tel:+918178967273" className="text-xl">+91 8178967273</a>
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="text-lg">Send me your email to discuss new project</p>
            <form onSubmit={handleSubmit} className="mt-4 flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-l-full px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button type="submit" className="bg-indigo-600 rounded-r-full px-6 hover:bg-indigo-700 transition-colors">
                  <ArrowRightIcon className="w-6 h-6"/>
                </button>
            </form>
          </div>
      </div>
      <div className="container mx-auto px-6 py-6 border-t border-gray-800 flex justify-end items-center text-gray-500 text-sm">
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/dhruv-lekhi-519059309/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn Profile">
              <LinkedInIcon className="w-6 h-6" />
            </a>
            <a href="https://github.com/DhruvLekhi06" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub Profile">
              <GitHubIcon className="w-6 h-6" />
            </a>
          </div>
      </div>
    </footer>
  );
};