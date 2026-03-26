import React from 'react';
import { Check, Star } from 'lucide-react';
import { Button } from './ui/button';
import { projectInfo } from '../data/mock';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Choose Your Perfect Home
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6" />
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Thoughtfully designed spaces that blend comfort with elegance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projectInfo.pricing.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
                plan.featured 
                  ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-2xl border-4 border-white' 
                  : 'bg-white border-2 border-purple-200 hover:border-purple-400 shadow-lg'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-slate-900 px-6 py-2 rounded-full font-semibold text-sm flex items-center gap-2 shadow-md">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-3xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-slate-900'}`}>
                  {plan.type}
                </h3>
                <p className={`text-sm mb-4 ${plan.featured ? 'text-purple-100' : 'text-slate-600'}`}>
                  {plan.carpetArea}
                </p>
                <div className={`text-5xl font-bold mb-2 ${plan.featured ? 'text-white' : 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'}`}>
                  {plan.price}
                </div>
                <p className={`text-sm ${plan.featured ? 'text-purple-100' : 'text-slate-500'}`}>
                  onwards*
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                      plan.featured ? 'bg-white/20' : 'bg-purple-100'
                    }`}>
                      <Check className={`w-4 h-4 ${plan.featured ? 'text-white' : 'text-purple-600'}`} />
                    </div>
                    <span className={plan.featured ? 'text-white' : 'text-slate-700'}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full py-6 text-lg font-semibold ${
                  plan.featured 
                    ? 'bg-white text-purple-600 hover:bg-purple-50' 
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                }`}
              >
                View Floor Plan
              </Button>
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
