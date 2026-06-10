import React from 'react';
import { MapPin, TrendingUp, Building2, Route, Sparkles, Award } from 'lucide-react';
import { projectInfo } from '../data/mock';

const iconMap = {
  MapPin,
  TrendingUp,
  Building2,
  Route,
  Sparkles,
  Award
};

const HighlightsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-sky-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://customer-assets.emergentagent.com/job_vivanta-2-3-bhk/artifacts/o83pgwpu_Real%20Estate%20Project%20Wadmukhwadi.jpg"
                alt="Sai Ananta Project"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-blue-100">
              <div className="text-center">
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent">
                  15-30%
                </p>
                <p className="text-sm text-slate-600 font-medium">Growth Potential</p>
              </div>
            </div>
          </div>

          {/* Highlights Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-serif text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Why Choose Sai Ananta
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full" />
            </div>

            <div className="grid gap-6">
              {projectInfo.highlights.map((highlight, index) => {
                const IconComponent = iconMap[highlight.icon];
                return (
                  <div 
                    key={index}
                    className="group flex gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300 hover:border-blue-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-sky-400 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                        <IconComponent className="w-7 h-7" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">
                        {highlight.title}
                      </h3>
                      <p className="text-slate-600">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
