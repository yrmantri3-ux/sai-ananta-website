import React from 'react';
import { projectInfo } from '../data/mock';

const OverviewSection = () => {
  return (
    <section id="overview" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Lotus Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="text-purple-500" fill="currentColor">
          <path d="M50 20 Q30 30 30 50 Q30 70 50 80 Q70 70 70 50 Q70 30 50 20 M50 30 Q40 35 40 50 Q40 65 50 70 Q60 65 60 50 Q60 35 50 30"/>
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="text-pink-500" fill="currentColor">
          <path d="M50 80 Q30 70 30 50 Q30 30 50 20 Q70 30 70 50 Q70 70 50 80 M50 70 Q40 65 40 50 Q40 35 50 30 Q60 35 60 50 Q60 65 50 70"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Lotus Icon */}
          <div className="inline-block lotus-bloom">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-100 via-pink-100 to-purple-100 flex items-center justify-center shadow-xl border-4 border-white spiritual-glow">
              <svg className="w-10 h-10 text-transparent bg-clip-text" viewBox="0 0 24 24" fill="url(#lotus-gradient)">
                <defs>
                  <linearGradient id="lotus-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
                <path fill="url(#lotus-gradient)" d="M12 2C9.5 2 7 4 7 7c0 2 1 3 1 5 0 1-1 2-2 3-1 1-2 2-2 4 0 3 3 5 6 5h4c3 0 6-2 6-5 0-2-1-3-2-4-1-1-2-2-2-3 0-2 1-3 1-5 0-3-2.5-5-5-5zm0 2c1.66 0 3 1.79 3 4 0 1.5-.67 2.17-1 3.5-.16.66-.5 1.34-1 2-.5-.66-.84-1.34-1-2-.33-1.33-1-2-1-3.5 0-2.21 1.34-4 3-4z"/>
              </svg>
            </div>
          </div>
          
          {/* Heading */}
          <h2 className="text-6xl md:text-7xl font-serif text-slate-900 leading-tight fade-in" style={{ fontFamily: "'Playfair Display', serif" }}>
            {projectInfo.overview.title}
          </h2>
          
          {/* Decorative Lotus Divider */}
          <div className="lotus-divider mx-auto" />
          
          {/* Description */}
          <p className="text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {projectInfo.overview.description}
          </p>

          {/* Stats with Gold Accents */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform" />
              <div className="relative glass-card rounded-3xl p-8 text-center space-y-3 premium-hover">
                <svg className="w-12 h-12 mx-auto text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <p className="text-6xl font-bold gradient-text-purple-pink" style={{ fontFamily: "'Playfair Display', serif" }}>
                  20+
                </p>
                <p className="text-slate-600 font-semibold text-lg">Years of Excellence</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform" />
              <div className="relative glass-card rounded-3xl p-8 text-center space-y-3 premium-hover">
                <svg className="w-12 h-12 mx-auto text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"/>
                </svg>
                <p className="text-6xl font-bold gradient-text-purple-pink" style={{ fontFamily: "'Playfair Display', serif" }}>
                  100+
                </p>
                <p className="text-slate-600 font-semibold text-lg">Completed Projects</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform" />
              <div className="relative glass-card rounded-3xl p-8 text-center space-y-3 premium-hover">
                <svg className="w-12 h-12 mx-auto text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
                <p className="text-6xl font-bold gradient-text-purple-pink" style={{ fontFamily: "'Playfair Display', serif" }}>
                  10K+
                </p>
                <p className="text-slate-600 font-semibold text-lg">Happy Families</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
