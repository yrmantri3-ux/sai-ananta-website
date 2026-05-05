import React, { useState, useEffect } from 'react';
import { X, Phone, Mail, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { projectInfo } from '../data/mock';

const ExitIntentPopup = ({ onEnquiryClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      // Only trigger if mouse leaves from top of page and hasn't been shown before
      if (e.clientY <= 0 && !hasShown && !isVisible) {
        setIsVisible(true);
        setHasShown(true);
        
        // Auto-hide after 15 seconds if user doesn't interact
        setTimeout(() => {
          setIsVisible(false);
        }, 15000);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown, isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleEnquireNow = () => {
    setIsVisible(false);
    onEnquiryClick();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full mx-4 overflow-hidden animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-slate-600" />
        </button>

        {/* Header with Gradient */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-800 p-8 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <img 
              src="https://customer-assets.emergentagent.com/job_c3d6dd33-c332-4562-92cf-4b2464c4812d/artifacts/xe3ggepa_Sai%20Ananta%20Logo.png"
              alt="Sai Ananta"
              className="h-16 w-auto mx-auto mb-4"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Wait! Don't Miss Out
            </h2>
            <p className="text-blue-100 text-lg">
              Exclusive Pre-Launch Offers Available
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-3 rounded-full border-2 border-purple-200 mb-4">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span className="text-purple-800 font-semibold">Limited Time Offer</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              {projectInfo.configuration}
            </h3>
            <p className="text-xl text-purple-600 font-bold mb-2">
              Starting from {projectInfo.startingPrice}
            </p>
            <p className="text-slate-600">
              {projectInfo.location}
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 mb-6">
            <h4 className="font-bold text-slate-900 mb-3">🎁 What You Get:</h4>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Best pre-launch prices - Limited units</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Free site visit with pickup & drop facility</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Expert consultation on payment plans</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Flexible payment options available</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button 
              onClick={handleEnquireNow}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg font-bold shadow-lg"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Get Pre-Launch Offers Now
            </Button>
            
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 py-5"
                onClick={() => window.location.href = `tel:${projectInfo.contact.phone}`}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button
                variant="outline"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 py-5"
                onClick={() => {
                  const whatsapp = '917066331177';
                  const message = encodeURIComponent('Hi! I saw the exit popup. I am interested in Sai Ananta pre-launch offers.');
                  window.open(`https://wa.me/${whatsapp}?text=${message}`, '_blank');
                }}
              >
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </Button>
            </div>
          </div>

          <p className="text-xs text-slate-500 text-center mt-4">
            🔒 Your information is safe with us
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
