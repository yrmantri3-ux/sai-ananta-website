import React from 'react';
import { Lock } from 'lucide-react';
import { Button } from './ui/button';

const FloorPlanSection = ({ onEnquiryClick }) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Explore Floor Plans
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6" />
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Discover thoughtfully designed layouts for 2 & 3 BHK residences
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Blurred Floor Plan Image */}
            <div className="relative h-96 md:h-[600px] bg-gradient-to-br from-sky-100 to-purple-100">
              <img 
                src="https://customer-assets.emergentagent.com/job_vivanta-2-3-bhk/artifacts/m4s8327b_Modern%20Residential%20Tower%20Wadmukhwadi%20Pune.jpg"
                alt="Floor Plan"
                className="w-full h-full object-cover blur-md"
              />
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />
            </div>

            {/* Centered Unlock Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-6 px-6">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl">
                  <Lock className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-serif text-slate-900" style={{ fontFamily: "'Playfair Display', serif" }}>
                  View Detailed Floor Plans
                </h3>
                <p className="text-lg text-slate-700 max-w-md mx-auto">
                  Submit your details to unlock complete floor plans with measurements and specifications
                </p>
                <Button 
                  size="lg"
                  onClick={onEnquiryClick}
                  className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Unlock Floor Plans
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlanSection;
