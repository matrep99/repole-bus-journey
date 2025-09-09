import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-repole-blue py-4 px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img 
            src="/lovable-uploads/6ddc7ba0-c7ae-4e24-87c6-cbf9676a62bb.png" 
            alt="REPOLE Autolinee" 
            className="h-12 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white hover:text-repole-orange transition-colors duration-300 font-medium">
            Home
          </a>
          <a href="#linee" className="text-white hover:text-repole-orange transition-colors duration-300 font-medium">
            Linee
          </a>
          <a href="#orari" className="text-white hover:text-repole-orange transition-colors duration-300 font-medium">
            Orari
          </a>
          <a href="#biglietti" className="text-white hover:text-repole-orange transition-colors duration-300 font-medium">
            Biglietti
          </a>
          <a href="#contatti" className="text-white hover:text-repole-orange transition-colors duration-300 font-medium">
            Contatti
          </a>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;