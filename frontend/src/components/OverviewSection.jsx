import React from 'react';
import { projectInfo } from '../data/mock';

const OverviewSection = () => {
  return (
    <section id="overview" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
                <circle cx="10" cy="10" r="3"/>
              </svg>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-serif text-slate-900" style={{ fontFamily: "'Playfair Display', serif" }}>
            {projectInfo.overview.title}
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto" />
          
          <p className="text-xl text-slate-600 leading-relaxed">
            {projectInfo.overview.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="text-center space-y-2">
              <p className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                20+
              </p>
              <p className="text-slate-600 font-medium">Years of Excellence</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                100+
              </p>
              <p className="text-slate-600 font-medium">Completed Projects</p>
            </div>
            <div className="text-center space-y-2">
              <p className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                10K+
              </p>
              <p className="text-slate-600 font-medium">Happy Families</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
