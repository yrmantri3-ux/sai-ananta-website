import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { projectInfo } from '../data/mock';

const HeroSection = ({ onEnquiryClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-sky-50 via-blue-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 mt-16 md:mt-0">
            <div className="space-y-4">
              <p className="text-pink-600 font-medium text-lg tracking-wide">
                {projectInfo.formerName}
              </p>
              <h1 className="text-6xl md:text-7xl font-serif text-slate-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                {projectInfo.hero.title}
              </h1>
              <p className="text-2xl text-purple-700 font-light italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                {projectInfo.hero.subtitle}
              </p>
            </div>

            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />

            <p className="text-lg text-slate-600 leading-relaxed">
              {projectInfo.hero.description}
            </p>

            <div className="flex items-center gap-2 text-slate-700">
              <MapPin className="w-5 h-5 text-pink-600" />
              <span className="font-medium">{projectInfo.hero.location}</span>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Configuration</p>
                  <p className="text-xl font-semibold text-slate-900">{projectInfo.configuration}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">Starting From</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {projectInfo.startingPrice}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={onEnquiryClick}
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Book Site Visit
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg"
                onClick={() => window.location.href = `tel:${projectInfo.contact.phone}`}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={projectInfo.hero.elevationImage}
                alt="Sai Ananta Elevation"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-purple-100 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                  ✓
                </div>
                <div>
                  <p className="font-semibold text-slate-900">RERA Approved</p>
                  <p className="text-sm text-slate-600">Premium Quality Assured</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
