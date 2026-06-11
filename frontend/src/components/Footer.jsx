import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
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
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#overview" className="text-slate-400 hover:text-blue-400 transition-colors">Overview</a>
              </li>
              <li>
                <a href="#pricing" className="text-slate-400 hover:text-blue-400 transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#amenities" className="text-slate-400 hover:text-blue-400 transition-colors">Amenities</a>
              </li>
              <li>
                <a href="#gallery" className="text-slate-400 hover:text-blue-400 transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#location" className="text-slate-400 hover:text-blue-400 transition-colors">Location</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${projectInfo.contact.phone}`} className="flex items-start gap-3 text-slate-400 hover:text-blue-400 transition-colors">
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{projectInfo.contact.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${projectInfo.contact.email}`} className="flex items-start gap-3 text-slate-400 hover:text-blue-400 transition-colors">
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

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Connect With Us</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/shree_venkateshwara_group?igsh=OGwwNWw4aXIyN2hz" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/share/14amEQemtAV/?mibextid=wwXIfr" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/shree-venkateshwara-group/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
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
              <a href="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="/terms-and-conditions" className="hover:text-blue-400 transition-colors">Terms & Conditions</a>
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
