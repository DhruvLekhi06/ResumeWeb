
import React from 'react';

const MenuIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Header: React.FC = () => {
  return (
    <header className="text-white pt-8 pb-16 md:pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          <div className="text-left">
            <h1 className="text-lg font-bold tracking-wider">JUAN PABLO</h1>
            <p className="text-sm text-gray-400 tracking-widest">DESIGNER & DEVELOPER</p>
          </div>
          <button className="flex items-center space-x-2 border border-gray-700 rounded-full px-4 py-2 text-sm text-white hover:bg-gray-800 transition-colors">
            <MenuIcon />
            <span>MENU</span>
          </button>
        </div>
        <div className="text-center mt-16 md:mt-24">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter">PROJECTS</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
