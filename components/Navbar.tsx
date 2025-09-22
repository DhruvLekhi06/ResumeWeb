
import React, { useState, useEffect } from 'react';
import { LogoIcon, CloseIcon, MenuIcon } from './Icons';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navLinks = ["About Me", "Skills", "Projects"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, "", `#${targetId}`);
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };
  
  const linkToId = (link: string) => link.toLowerCase().replace(/\s+/g, '-');

  return (
    <header className={`sticky top-0 z-50 bg-[#0B0B13]/80 backdrop-blur-lg transition-all duration-300 ${scrolled ? 'shadow-lg shadow-indigo-900/20 border-b border-gray-800/50' : ''}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <LogoIcon />
          <span className="text-xl font-bold">Dhruv Lekhi</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => {
            const id = linkToId(link);
            return (
              <a key={link} href={`#${id}`} onClick={(e) => handleNavClick(e, id)} className="relative group text-gray-300 hover:text-white transition-colors py-2">
                {link}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
              </a>
            );
          })}
        </div>
        <a href="https://thinkyard.substack.com/?r=5yiw6h&utm_campaign=pub-share-checklist" target="_blank" rel="noopener noreferrer" className="hidden md:inline-block bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition-colors">
          Blog
        </a>
        <div className="md:hidden">
          <button type="button" onClick={toggleMenu} className="text-white" aria-controls="mobile-menu" aria-expanded={isMenuOpen} aria-label="Toggle menu">
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`} id="mobile-menu">
        <div className="px-6 pb-4 flex flex-col items-center space-y-4">
          {navLinks.map(link => {
            const id = linkToId(link);
            return (
              <a key={link} href={`#${id}`} onClick={(e) => handleNavClick(e, id)} className="text-gray-300 hover:text-white text-lg">{link}</a>
            );
          })}
          <a href="https://thinkyard.substack.com/?r=5yiw6h&utm_campaign=pub-share-checklist" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="mt-4 inline-block bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition-colors w-full text-center">
            Blog
          </a>
        </div>
      </div>
    </header>
  );
};
