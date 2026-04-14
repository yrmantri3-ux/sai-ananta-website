import React from 'react';
import { Check, Star } from 'lucide-react';
import { Button } from './ui/button';
import { projectInfo } from '../data/mock';

const PricingSection = ({ onEnquiryClick }) => {
  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      {/* Sky Gradient Background */}
      <div className="absolute inset-0 sky-gradient-reverse" />
      
      {/* Floating Lotus Petals */}
      <div className="absolute top-1/4 left-10 w-20 h-20 opacity-20">
        <svg viewBox="0 0 100 100" className="text-purple-500" fill="currentColor">
          <path d="M50 20 Q30 30 30 50 Q30 70 50 80 Q70 70 70 50 Q70 30 50 20"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-6xl md:text-7xl font-serif text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Choose Your Perfect Home
          </h2>
          <div className="lotus-divider mx-auto mb-6" />
          <p className="text-2xl text-slate-600 max-w-2xl mx-auto" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Thoughtfully designed spaces that blend comfort with elegance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {projectInfo.pricing.map((plan, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Decorative Background Layer */}
              <div className={`absolute inset-0 rounded-3xl transform transition-transform group-hover:scale-105 ${
                plan.featured 
                  ? 'bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 rotate-1' 
                  : 'bg-gradient-to-br from-purple-100 to-pink-100 -rotate-1'
              }`} />
              
              <div className={`relative rounded-3xl p-10 transition-all duration-500 ${
                plan.featured 
                  ? 'glass-card border-4 border-white shadow-2xl spiritual-glow' 
                  : 'glass-card border-2 border-purple-200 shadow-xl hover:shadow-2xl'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="shimmer px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 shadow-xl border-2 border-white text-white">
                    <Star className="w-5 h-5 fill-current" />
                    Most Popular Choice
                  </div>
                </div>
              )}

              <div className={`text-center mb-8 ${plan.featured ? 'text-purple-900' : 'text-slate-900'}`}>
                <h3 className="text-4xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {plan.type}
                </h3>
                <p className={`text-sm mb-6 ${plan.featured ? 'text-purple-700' : 'text-slate-600'}`}>
                  {plan.carpetArea}
                </p>
                <div className={`text-6xl font-bold mb-3 ${plan.featured ? 'gradient-text-purple-pink' : 'gradient-text-purple-pink'}`} style={{ fontFamily: "'Playfair Display', serif" }}>
                  {plan.price}
                </div>
                <p className={`text-sm ${plan.featured ? 'text-purple-700' : 'text-slate-500'}`}>
                  onwards*
                </p>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${
                      plan.featured ? 'bg-gradient-to-br from-purple-500 to-pink-500' : 'bg-gradient-to-br from-purple-100 to-pink-100'
                    }`}>
                      <Check className={`w-4 h-4 ${plan.featured ? 'text-white' : 'text-purple-600'}`} />
                    </div>
                    <span className={`text-lg ${plan.featured ? 'text-purple-900' : 'text-slate-700'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full py-7 text-lg font-semibold shadow-lg hover:shadow-2xl transition-all ${
                  plan.featured 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700' 
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                }`}
              >
                View Floor Plan
              </Button>
            </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-12">
          * Prices are subject to change. Please contact us for the latest pricing and availability.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
