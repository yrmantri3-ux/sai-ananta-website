import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { projectInfo } from '../data/mock';

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % projectInfo.gallery.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + projectInfo.gallery.length) % projectInfo.gallery.length);
  };

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-white via-sky-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Visual Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6" />
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A glimpse into your future home
          </p>
        </div>

        {/* Main Featured Image */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            <img 
              src={projectInfo.gallery[currentIndex].url}
              alt={projectInfo.gallery[currentIndex].title}
              className="w-full h-96 md:h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            
            {/* Image Title */}
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-3xl font-serif text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                {projectInfo.gallery[currentIndex].title}
              </h3>
            </div>

            {/* Navigation Buttons */}
            <Button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 rounded-full w-12 h-12 p-0 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 rounded-full w-12 h-12 p-0 shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {projectInfo.gallery.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                currentIndex === index 
                  ? 'ring-4 ring-purple-500 shadow-lg scale-105' 
                  : 'opacity-70 hover:opacity-100 hover:scale-105'
              }`}
            >
              <img 
                src={image.url}
                alt={image.title}
                className="w-full h-24 object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {projectInfo.gallery.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index 
                  ? 'w-8 h-2 bg-gradient-to-r from-purple-600 to-pink-600' 
                  : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
