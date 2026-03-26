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
        className="group flex flex-col items-center text-center p-6 bg-white rounded-2xl border-2 border-purple-100 hover:border-purple-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg">
          <IconComponent className="w-8 h-8" />
        </div>
        <p className="font-medium text-slate-900">{amenity.name}</p>
      </div>
    );
  };

  return (
    <section id="amenities" className="py-24 bg-gradient-to-b from-white via-blue-50 to-sky-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            World-Class Amenities
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6" />
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Experience a lifestyle of comfort and convenience with our premium facilities
          </p>
        </div>

        <Tabs defaultValue="rooftop" className="max-w-6xl mx-auto" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-white/80 backdrop-blur-sm p-2 rounded-2xl border border-purple-200 shadow-md">
            <TabsTrigger 
              value="rooftop" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white rounded-xl py-3 text-lg font-semibold"
            >
              Rooftop
            </TabsTrigger>
            <TabsTrigger 
              value="ground"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white rounded-xl py-3 text-lg font-semibold"
            >
              Ground Level
            </TabsTrigger>
            <TabsTrigger 
              value="other"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white rounded-xl py-3 text-lg font-semibold"
            >
              Premium Features
            </TabsTrigger>
          </TabsList>

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

        {/* Amenity Image */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://customer-assets.emergentagent.com/job_vivanta-2-3-bhk/artifacts/ngdxil8u_Rooftop%20Amenities%20Pune%20Apartment.jpg"
              alt="Amenities"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="text-3xl font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
                Designed for Your Lifestyle
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
