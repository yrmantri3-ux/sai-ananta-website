import React, { useState, useEffect } from 'react';
import { Phone, Mail } from 'lucide-react';
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="https://customer-assets.emergentagent.com/job_c3d6dd33-c332-4562-92cf-4b2464c4812d/artifacts/xe3ggepa_Sai%20Ananta%20Logo.png" 
              alt="Sai Ananta Logo" 
              className="h-16 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('overview')} className="text-slate-700 hover:text-purple-600 transition-colors font-medium">
              Overview
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-slate-700 hover:text-purple-600 transition-colors font-medium">
              Pricing
            </button>
            <button onClick={() => scrollToSection('amenities')} className="text-slate-700 hover:text-purple-600 transition-colors font-medium">
              Amenities
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-slate-700 hover:text-purple-600 transition-colors font-medium">
              Gallery
            </button>
            <button onClick={() => scrollToSection('location')} className="text-slate-700 hover:text-purple-600 transition-colors font-medium">
              Location
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-3 text-sm">
              <a href={`tel:${projectInfo.contact.phone}`} className="flex items-center gap-2 text-slate-700 hover:text-purple-600 transition-colors">
                <Phone className="w-4 h-4" />
                <span>{projectInfo.contact.phone}</span>
              </a>
            </div>
            <Button 
              onClick={onEnquiryClick}
              className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-6"
            >
              Enquire Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
