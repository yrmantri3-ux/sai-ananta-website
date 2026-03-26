import React from 'react';
import { Award, Building, Users, CheckCircle } from 'lucide-react';
import { projectInfo } from '../data/mock';

const DeveloperSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-sky-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            About The Developer
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-purple-200">
            {/* Developer Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-12 text-white text-center">
              <div className="mb-6">
                <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-xl">
                  <Building className="w-16 h-16 text-purple-600" />
                </div>
              </div>
              <h3 className="text-4xl font-serif mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                {projectInfo.developer.name}
              </h3>
              <p className="text-purple-100 text-lg">Building Dreams Since 2003</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-12 border-b border-purple-100">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {projectInfo.developer.experience}
                </p>
                <p className="text-slate-600 font-medium">Of Excellence</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <Building className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {projectInfo.developer.projects}
                </p>
                <p className="text-slate-600 font-medium">Successfully Delivered</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {projectInfo.developer.families}
                </p>
                <p className="text-slate-600 font-medium">Satisfied Customers</p>
              </div>
            </div>

            {/* Description */}
            <div className="p-12">
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                {projectInfo.developer.description}
              </p>

              {/* Core Values */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Quality Assurance</h4>
                    <p className="text-sm text-slate-600">Premium materials and construction standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Timely Delivery</h4>
                    <p className="text-sm text-slate-600">Committed to promised timelines</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Customer Trust</h4>
                    <p className="text-sm text-slate-600">Building relationships, not just homes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Innovation</h4>
                    <p className="text-sm text-slate-600">Modern designs with sustainable practices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
