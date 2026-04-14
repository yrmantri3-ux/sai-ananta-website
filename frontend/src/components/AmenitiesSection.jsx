import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Sunset, Flower2, Home, Activity, Users, Grid3x3, Dumbbell, 
  Waves, Droplet, Armchair, Building, Music, Trees, Gamepad2,
  Zap, Sun, Lock, Grid2x2, Battery
} from 'lucide-react';
import { projectInfo } from '../data/mock';

const iconMap = {
  Sunset, Flower2, Home, Activity, Users, Grid3x3, Dumbbell,
  Waves, Droplet, Armchair, Building, Music, Trees, Gamepad2,
  Zap, Sun, Lock, Grid2x2, Battery,
  PartyPopper: Music,
  Baby: Users
};

const AmenitiesSection = () => {
  const [activeTab, setActiveTab] = useState('rooftop');

  const renderAmenityCard = (amenity, index) => {
    const IconComponent = iconMap[amenity.icon] || Home;
    return (
      <div 
        key={index}
        className="group relative"
      >
        {/* Decorative bg layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl transform rotate-2 group-hover:rotate-3 transition-transform opacity-0 group-hover:opacity-100" />
        
        <div className="relative flex flex-col items-center text-center p-6 glass-card rounded-2xl border-2 border-purple-100 hover:border-purple-400 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white mb-4 group-hover:scale-125 transition-transform shadow-lg spiritual-glow">
            <IconComponent className="w-8 h-8" />
          </div>
          <p className="font-semibold text-slate-900">{amenity.name}</p>
        </div>
      </div>
    );
  };

  return (
    <section id="amenities" className="py-20 relative overflow-hidden">
      {/* Sky Gradient Background */}
      <div className="absolute inset-0 sky-gradient" />
      
      {/* Floating Lotus Decorations */}
      <div className="absolute top-20 right-10 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="text-purple-500" fill="currentColor">
          <path d="M50 20 Q30 30 30 50 Q30 70 50 80 Q70 70 70 50 Q70 30 50 20"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-6xl md:text-7xl font-serif text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            World-Class Amenities
          </h2>
          <div className="lotus-divider mx-auto mb-6" />
          <p className="text-2xl text-slate-600 max-w-2xl mx-auto" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Experience a lifestyle of comfort and convenience with our premium facilities
          </p>
        </div>

        <Tabs defaultValue="rooftop" className="max-w-6xl mx-auto" onValueChange={setActiveTab}>
          <div className="mb-12 bg-white/90 backdrop-blur-sm p-2 rounded-2xl border-2 border-purple-200 shadow-xl">
            <TabsList className="grid w-full grid-cols-3 bg-transparent">
              <TabsTrigger 
                value="rooftop" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-xl py-4 text-lg font-bold transition-all"
              >
                🌅 Rooftop
              </TabsTrigger>
              <TabsTrigger 
                value="ground"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-xl py-4 text-lg font-bold transition-all"
              >
                🏊 Ground Level
              </TabsTrigger>
              <TabsTrigger 
                value="other"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-xl py-4 text-lg font-bold transition-all"
              >
                ⭐ Premium
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="rooftop" className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {projectInfo.amenities.rooftop.map(renderAmenityCard)}
            </div>
          </TabsContent>

          <TabsContent value="ground" className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {projectInfo.amenities.ground.map(renderAmenityCard)}
            </div>
          </TabsContent>

          <TabsContent value="other" className="space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {projectInfo.amenities.other.map(renderAmenityCard)}
            </div>
          </TabsContent>
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
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-500/30 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-600/30 to-transparent rounded-tr-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
