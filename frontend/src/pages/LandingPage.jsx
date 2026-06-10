import React, { useState, useEffect } from 'react';
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
import WhatsAppButton from '../components/WhatsAppButton';
import CallButton from '../components/CallButton';
import ExitIntentPopup from '../components/ExitIntentPopup';

const LandingPage = () => {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  // Auto-open enquiry modal after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEnquiryModalOpen(true);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="landing-page">
      <Header onEnquiryClick={() => setIsEnquiryModalOpen(true)} />
      <HeroSection onEnquiryClick={() => setIsEnquiryModalOpen(true)} />
      <OverviewSection />
      <HighlightsSection />
      <PricingSection onEnquiryClick={() => setIsEnquiryModalOpen(true)} />
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
      
      <WhatsAppButton />
      <CallButton />
      <ExitIntentPopup onEnquiryClick={() => setIsEnquiryModalOpen(true)} />
    </div>
  );
};

export default LandingPage;
