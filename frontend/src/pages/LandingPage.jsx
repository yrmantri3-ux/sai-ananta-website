import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import OverviewSection from '../components/OverviewSection';
import HighlightsSection from '../components/HighlightsSection';
import PricingSection from '../components/PricingSection';
import AmenitiesSection from '../components/AmenitiesSection';
import FloorPlanSection from '../components/FloorPlanSection';
import GallerySection from '../components/GallerySection';
import LocationSection from '../components/LocationSection';
import DeveloperSection from '../components/DeveloperSection';
import SiteVisitSection from '../components/SiteVisitSection';
import Footer from '../components/Footer';
import EnquiryModal from '../components/EnquiryModal';

const LandingPage = () => {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  return (
    <div className="landing-page">
      <Header onEnquiryClick={() => setIsEnquiryModalOpen(true)} />
      <HeroSection onEnquiryClick={() => setIsEnquiryModalOpen(true)} />
      <OverviewSection />
      <HighlightsSection />
      <PricingSection />
      <AmenitiesSection />
      <FloorPlanSection onEnquiryClick={() => setIsEnquiryModalOpen(true)} />
      <GallerySection />
      <LocationSection />
      <DeveloperSection />
      <SiteVisitSection />
      <Footer />
      
      <EnquiryModal 
        isOpen={isEnquiryModalOpen} 
        onClose={() => setIsEnquiryModalOpen(false)} 
      />
    </div>
  );
};

export default LandingPage;
