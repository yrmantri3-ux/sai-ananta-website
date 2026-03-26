import React from 'react';
import { 
  Plane, Train, ShoppingBag, Briefcase, MapPin as MapPinIcon, 
  Building2, Route, Navigation 
} from 'lucide-react';
import { projectInfo } from '../data/mock';

const iconMap = {
  Plane, Train, ShoppingBag, Briefcase, 
  MapPin: MapPinIcon, Building2, Route, Navigation
};

const LocationSection = () => {
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.1234567890!2d${projectInfo.mapCenter.lng}!3d${projectInfo.mapCenter.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM5JzQ4LjAiTiA3M8KwNTYnNTguOSJF!5e0!3m2!1sen!2sin!4v1234567890`;

  return (
    <section id="location" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Strategic Location
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6" />
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Perfectly connected to everything you need
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Interactive Map */}
          <div className="space-y-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-purple-100">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sai Ananta Location"
                className="w-full"
              />
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
              <h3 className="font-semibold text-slate-900 mb-2 text-lg">Address</h3>
              <p className="text-slate-700">{projectInfo.contact.address}</p>
            </div>
          </div>

          {/* Nearby Locations */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-8 border border-purple-200">
              <h3 className="text-2xl font-serif text-slate-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Nearby Landmarks
              </h3>
              <div className="grid gap-4">
                {projectInfo.nearbyLocations.map((location, index) => {
                  const IconComponent = iconMap[location.icon] || MapPinIcon;
                  return (
                    <div 
                      key={index}
                      className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-purple-100 hover:shadow-md transition-all hover:border-purple-300"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-md">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-slate-900">{location.name}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-purple-600 font-bold">{location.distance}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Connectivity Highlights */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white shadow-xl">
              <h4 className="text-xl font-semibold mb-4">Connectivity Advantage</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <p>200 meters from Alandi-Pune Highway</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <p>1.5 km from Inner Ring Road</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <p>Near upcoming Charholi IT Park</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
