import React from 'react';
import { MapPin, Phone, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { projectInfo } from '../data/mock';

const HeroSection = ({ onEnquiryClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sky Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-blue-50 to-pink-50" />
      
      {/* Floating Lotus Petals */}
      <div className="lotus-petal" style={{ top: '15%', left: '8%', animationDelay: '0s' }} />
      <div className="lotus-petal" style={{ top: '25%', right: '12%', animationDelay: '2s' }} />
      <div className="lotus-petal" style={{ top: '60%', left: '10%', animationDelay: '4s' }} />
      <div className="lotus-petal" style={{ top: '75%', right: '15%', animationDelay: '6s' }} />
      
      {/* Lotus Pattern Overlay */}
      <div className="absolute inset-0 lotus-pattern opacity-30" />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 fade-in">
            {/* Main Heading - Aligned to left */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-serif text-slate-900 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Sai Ananta
              </h1>
              <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600 font-light italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {projectInfo.hero.subtitle}
              </p>
            </div>

            {/* Decorative Lotus Divider */}
            <div className="lotus-divider" />

            <p className="text-xl text-slate-600 leading-relaxed">
              {projectInfo.hero.description}
            </p>

            <div className="flex items-center gap-2 text-slate-700 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-xl w-fit border border-purple-200">
              <MapPin className="w-5 h-5 text-pink-600" />
              <span className="font-medium">{projectInfo.hero.location}</span>
            </div>

            {/* Pricing Card with Navy Accents */}
            <div className="glass-card rounded-3xl p-8 border-2 border-blue-200 premium-hover">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-sm text-slate-600 mb-2">Configuration</p>
                  <p className="text-2xl font-bold text-slate-900">{projectInfo.configuration}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-2">Starting From</p>
                  <p className="text-4xl font-bold gradient-text-purple-pink">
                    {projectInfo.startingPrice}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={onEnquiryClick}
                className="shimmer text-white px-10 py-7 text-lg shadow-2xl hover:shadow-3xl transition-all relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Book Site Visit
                </span>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-blue-900 text-blue-900 hover:bg-blue-50 px-10 py-7 text-lg shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.location.href = `tel:${projectInfo.contact.phone}`}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </div>
          </div>

          {/* Right Image with Lotus Frame */}
          <div className="relative lotus-bloom">
            {/* Decorative Lotus Corner */}
            <div className="absolute -top-8 -right-8 w-24 h-24 opacity-20 z-0">
              <svg viewBox="0 0 100 100" className="text-pink-500" fill="currentColor">
                <path d="M50 10 Q40 20 50 30 Q60 20 50 10 M50 30 Q55 35 50 40 Q45 35 50 30 M30 25 Q25 30 30 35 Q35 30 30 25 M70 25 Q65 30 70 35 Q75 30 70 25"/>
              </svg>
            </div>
            
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src={projectInfo.hero.elevationImage}
                alt="Sai Ananta Elevation"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-pink-500/10" />
              
              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-tr-full" />
            </div>
            
            {/* RERA Badge with Spiritual Glow */}
            <div className="absolute -bottom-8 -left-8 glass-card rounded-2xl p-6 shadow-2xl border-2 border-purple-200 max-w-xs spiritual-glow">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg">RERA Approved</p>
                  <p className="text-xs text-slate-600">{projectInfo.reraNumber}</p>
                </div>
              </div>
            </div>

            {/* Decorative Lotus Bottom Right */}
            <div className="absolute -bottom-8 -right-8 w-24 h-24 opacity-20">
              <svg viewBox="0 0 100 100" className="text-purple-500" fill="currentColor">
                <path d="M50 90 Q40 80 50 70 Q60 80 50 90 M50 70 Q55 65 50 60 Q45 65 50 70 M30 75 Q25 70 30 65 Q35 70 30 75 M70 75 Q65 70 70 65 Q75 70 70 75"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator with Lotus */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 4C9.5 4 7 6 7 9c0 2 1 2 1 4 0 1-1 1-1 2 0 2 2 3 4 3h2c2 0 4-1 4-3 0-1-1-1-1-2 0-2 1-2 1-4 0-3-2.5-5-5-5z"/>
          </svg>
          <p className="text-xs text-purple-600 font-medium tracking-wider">SCROLL</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
