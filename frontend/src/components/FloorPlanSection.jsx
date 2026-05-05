import React from 'react';
import { Lock } from 'lucide-react';
import { Button } from './ui/button';

const FloorPlanSection = ({ onEnquiryClick }) => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Lotus Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="text-purple-500" fill="currentColor">
          <path d="M50 20 Q30 30 30 50 Q30 70 50 80 Q70 70 70 50 Q70 30 50 20"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-6xl md:text-7xl font-serif text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Explore Floor Plans
          </h2>
          <div className="lotus-divider mx-auto mb-6" />
          <p className="text-2xl text-slate-600 max-w-2xl mx-auto" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Discover thoughtfully designed layouts for 2 & 3 BHK residences
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl">
            {/* Blurred Floor Plan Image */}
            <div className="relative h-96 md:h-[700px]">
              <img 
                src="https://customer-assets.emergentagent.com/job_vivanta-2-3-bhk/artifacts/m4s8327b_Modern%20Residential%20Tower%20Wadmukhwadi%20Pune.jpg"
                alt="Floor Plan"
                className="w-full h-full object-cover blur-md"
              />
              <div className="absolute inset-0 bg-white/50 backdrop-blur-md" />
              
              {/* Decorative gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20" />
            </div>

            {/* Centered Unlock Content */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="text-center space-y-6 md:space-y-8 px-4 md:px-6 glass-card p-6 md:p-12 rounded-3xl max-w-2xl border-2 border-purple-200 spiritual-glow">
                <div className="w-20 h-20 md:w-28 md:h-28 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl spiritual-glow">
                  <Lock className="w-10 h-10 md:w-14 md:h-14 text-white" />
                </div>
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif text-slate-900 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  View Detailed Floor Plans
                </h3>
                <div className="lotus-divider mx-auto" />
                <p className="text-base md:text-xl text-slate-700" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Submit your details to unlock complete floor plans with measurements and specifications
                </p>
                <Button 
                  size="lg"
                  onClick={onEnquiryClick}
                  className="shimmer text-white px-6 md:px-12 py-4 md:py-7 text-base md:text-xl shadow-2xl hover:shadow-3xl transition-all w-full md:w-auto"
                >
                  <Lock className="w-4 h-4 md:w-5 md:h-5 mr-2" />
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
