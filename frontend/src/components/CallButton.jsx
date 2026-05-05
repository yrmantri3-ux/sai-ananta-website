import React from 'react';
import { Phone } from 'lucide-react';
import { projectInfo } from '../data/mock';

const CallButton = () => {
  const handleClick = () => {
    window.location.href = `tel:${projectInfo.contact.phone}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Call Button */}
      <button
        onClick={handleClick}
        className="group relative bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce"
        style={{ animationDuration: '2s', animationDelay: '0.5s' }}
        aria-label="Call us"
      >
        <Phone className="w-7 h-7" />
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
          <div className="bg-slate-900 text-white text-sm rounded-lg px-4 py-2 whitespace-nowrap shadow-lg">
            Call us now
            <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-slate-900" />
          </div>
        </div>

        {/* Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-75" />
      </button>
    </div>
  );
};

export default CallButton;
