import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import * as LucideIcons from 'lucide-react';
import { projectInfo } from '../data/mock';

const AmenitiesSection = () => {
  const [activeTab, setActiveTab] = useState('rooftop');

  const renderIcon = (iconName) => {
    const Icon = LucideIcons[iconName];
    return Icon ? <Icon className="w-8 h-8" /> : null;
  };

  return (
    <section id="amenities" className="py-24 bg-gradient-to-b from-white via-sky-50 to-blue-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            World-Class Amenities
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full mx-auto mb-6" />
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Experience luxury living with premium facilities designed for your comfort
          </p>
        </div>

        <Tabs defaultValue="rooftop" className="max-w-6xl mx-auto" onValueChange={setActiveTab}>
          <div className="mb-12 bg-white/90 backdrop-blur-sm p-2 rounded-2xl border-2 border-blue-200 shadow-xl">
            <TabsList className="grid w-full grid-cols-3 bg-transparent gap-2">
              <TabsTrigger 
                value="rooftop" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-700 data-[state=active]:to-sky-500 data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-slate-700 data-[state=active]:shadow-lg rounded-xl py-4 px-2 text-sm md:text-lg font-bold transition-all border-0"
              >
                <span className="block text-center leading-tight">
                  <span className="block">🌅</span>
                  <span className="block text-xs md:text-base">Rooftop</span>
                </span>
              </TabsTrigger>
              <TabsTrigger 
                value="ground"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-700 data-[state=active]:to-sky-500 data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-slate-700 data-[state=active]:shadow-lg rounded-xl py-4 px-2 text-sm md:text-lg font-bold transition-all border-0"
              >
                <span className="block text-center leading-tight">
                  <span className="block">🏊</span>
                  <span className="block text-xs md:text-base">Ground</span>
                </span>
              </TabsTrigger>
              <TabsTrigger 
                value="other"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-700 data-[state=active]:to-sky-500 data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-slate-700 data-[state=active]:shadow-lg rounded-xl py-4 px-2 text-sm md:text-lg font-bold transition-all border-0"
              >
                <span className="block text-center leading-tight">
                  <span className="block">⭐</span>
                  <span className="block text-xs md:text-base">Premium</span>
                </span>
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.keys(projectInfo.amenities).map((category) => (
            <TabsContent key={category} value={category} className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {projectInfo.amenities[category].map((amenity, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-blue-100 hover:border-blue-300"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 to-sky-400 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {renderIcon(amenity.icon)}
                    </div>
                    <h3 className="text-center font-semibold text-slate-800 text-sm md:text-base leading-tight">
                      {amenity.name}
                    </h3>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Amenity Image with Lotus Frame */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="https://customer-assets.emergentagent.com/job_vivanta-2-3-bhk/artifacts/ngdxil8u_Rooftop%20Amenities%20Pune%20Apartment.jpg"
              alt="Amenities"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-purple-500/10" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="text-4xl font-serif mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Designed for Your Lifestyle
              </p>
              <div className="lotus-divider" style={{ background: 'linear-gradient(90deg, transparent 0%, white 20%, white 50%, white 80%, transparent 100%)' }} />
            </div>
            
            {/* Decorative Corners */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-sky-500/30 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-600/30 to-transparent rounded-tr-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;