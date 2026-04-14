import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const whatsappNumber = '917796655556'; // +91 7796655556
  const message = encodeURIComponent('Hi! I am interested in Sai Ananta project. Please share more details.');

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* WhatsApp Button */}
      <button
        onClick={handleClick}
        className="group relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce"
        style={{ animationDuration: '2s' }}
      >
        <MessageCircle className="w-7 h-7" fill="currentColor" />
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
          <div className="bg-slate-900 text-white text-sm rounded-lg px-4 py-2 whitespace-nowrap shadow-lg">
            Chat with us on WhatsApp
            <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-slate-900" />
          </div>
        </div>

        {/* Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
