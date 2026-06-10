import React from 'react';
import { projectInfo } from '../data/mock';

const OverviewSection = () => {
  return (
    <section id="overview" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Lotus Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="text-blue-600" fill="currentColor">
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
          {/* Lotus Logo */}
          <div className="inline-block lotus-bloom">
            <img 
              src="https://customer-assets.emergentagent.com/job_c3d6dd33-c332-4562-92cf-4b2464c4812d/artifacts/xe3ggepa_Sai%20Ananta%20Logo.png"
              alt="Sai Ananta Lotus"
              className="h-24 w-auto mx-auto drop-shadow-xl"
            />
          </div>
          
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-slate-900 leading-tight fade-in px-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            {projectInfo.overview.title}
          </h2>
          
          <p className="text-3xl text-slate-700 italic mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {projectInfo.overview.subtitle}
          </p>
          
          {/* Decorative Lotus Divider */}
          <div className="lotus-divider mx-auto" />
          
          {/* Description */}
          <p className="text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {projectInfo.overview.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
