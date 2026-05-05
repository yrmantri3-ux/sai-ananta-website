import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { Button } from './ui/button';
import { projectInfo } from '../data/mock';

const Header = ({ onEnquiryClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-purple-100' 
        : 'bg-gradient-to-b from-white/80 to-transparent backdrop-blur-sm'
    }`}>
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600" />
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo with lotus glow */}
          <div className="flex items-center gap-3 lotus-bloom">
            <img 
              src="https://customer-assets.emergentagent.com/job_c3d6dd33-c332-4562-92cf-4b2464c4812d/artifacts/xe3ggepa_Sai%20Ananta%20Logo.png" 
              alt="Sai Ananta Logo" 
              className="h-16 w-auto drop-shadow-lg"
            />
          </div>

          {/* Navigation with lotus decorations */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('overview')} 
              className="relative text-slate-700 hover:text-purple-600 transition-all font-medium group"
            >
              Overview
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 transition-all group-hover:w-full" />
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="relative text-slate-700 hover:text-purple-600 transition-all font-medium group"
            >
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 transition-all group-hover:w-full" />
            </button>
            <button 
              onClick={() => scrollToSection('amenities')} 
              className="relative text-slate-700 hover:text-purple-600 transition-all font-medium group"
            >
              Amenities
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 transition-all group-hover:w-full" />
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="relative text-slate-700 hover:text-purple-600 transition-all font-medium group"
            >
              Gallery
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 transition-all group-hover:w-full" />
            </button>
            <button 
              onClick={() => scrollToSection('location')} 
              className="relative text-slate-700 hover:text-purple-600 transition-all font-medium group"
            >
              Location
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 transition-all group-hover:w-full" />
            </button>
          </nav>

          {/* Contact Info & CTA with spiritual glow */}
          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden lg:flex items-center gap-3 text-sm">
              <a 
                href={`tel:${projectInfo.contact.phone}`} 
                className="flex items-center gap-2 text-slate-700 hover:text-purple-600 transition-all px-4 py-2 rounded-full hover:bg-purple-50"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">{projectInfo.contact.phone}</span>
              </a>
            </div>
            <Button 
              onClick={onEnquiryClick}
              className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white px-4 md:px-8 text-sm md:text-base shadow-lg spiritual-glow"
            >
              <span className="relative z-10">Enquire Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-1000" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
