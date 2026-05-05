import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { projectInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <img 
              src="https://customer-assets.emergentagent.com/job_c3d6dd33-c332-4562-92cf-4b2464c4812d/artifacts/xe3ggepa_Sai%20Ananta%20Logo.png" 
              alt="Sai Ananta Logo" 
              className="h-20 w-auto"
            />
            <p className="text-slate-400 text-sm leading-relaxed">
              Experience the benchmark of blessed living in Wadhmukhwadi, Pune.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#overview" className="text-slate-400 hover:text-purple-400 transition-colors">Overview</a>
              </li>
              <li>
                <a href="#pricing" className="text-slate-400 hover:text-purple-400 transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#amenities" className="text-slate-400 hover:text-purple-400 transition-colors">Amenities</a>
              </li>
              <li>
                <a href="#gallery" className="text-slate-400 hover:text-purple-400 transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#location" className="text-slate-400 hover:text-purple-400 transition-colors">Location</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${projectInfo.contact.phone}`} className="flex items-start gap-3 text-slate-400 hover:text-purple-400 transition-colors">
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{projectInfo.contact.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${projectInfo.contact.email}`} className="flex items-start gap-3 text-slate-400 hover:text-purple-400 transition-colors">
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{projectInfo.contact.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-slate-400">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{projectInfo.contact.address}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Visit Us</h3>
            <div className="space-y-3 text-slate-400 text-sm">
              <div>
                <p className="font-medium text-white mb-1">Office Hours</p>
                <p>Monday - Saturday</p>
                <p>10:00 AM - 6:00 PM</p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Site Visits</p>
                <p>All Days (By Appointment)</p>
                <p>9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>
              © {currentYear} Sai Ananta by {projectInfo.developer.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/privacy-policy" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="/terms-and-conditions" className="hover:text-purple-400 transition-colors">Terms & Conditions</a>
            </div>
          </div>
          <p className="text-xs text-slate-500 text-center mt-4">
            MahaRERA Registration No: {projectInfo.reraNumber}. Available at: http://maharera.mahaonline.gov.in
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
