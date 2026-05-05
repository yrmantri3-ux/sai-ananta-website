import React, { useState } from 'react';
import { X, Phone } from 'lucide-react';
import { Dialog, DialogContent } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const EnquiryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    countryCode: '+91'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleCountryCodeChange = (value) => {
    setFormData({
      ...formData,
      countryCode: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number must be 10 digits';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);

    try {
      const response = await fetch(`${BACKEND_URL}/api/enquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          fullMobile: `${formData.countryCode}${formData.mobile}`
        }),
      });

      if (response.ok) {
        toast.success('Thank you! We will contact you soon.');
        setFormData({ name: '', mobile: '', email: '', countryCode: '+91' });
        onClose();
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Enquiry submission error:', error);
      toast.error('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden">
        {/* Header with Logo */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-6 text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
          
          <img 
            src="https://customer-assets.emergentagent.com/job_c3d6dd33-c332-4562-92cf-4b2464c4812d/artifacts/xe3ggepa_Sai%20Ananta%20Logo.png"
            alt="Sai Ananta"
            className="h-16 w-auto mx-auto mb-3"
          />
          
          <h2 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
            Get Pre Launch Deals
          </h2>
          <p className="text-blue-100 text-sm">Limited time exclusive offers</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-slate-700 font-medium">Full Name *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={`h-11 ${errors.name ? 'border-red-500' : 'border-slate-300'}`}
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-700 font-medium">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`h-11 ${errors.email ? 'border-red-500' : 'border-slate-300'}`}
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="mobile" className="text-slate-700 font-medium">Mobile Number *</Label>
            <div className="flex gap-2">
              <Select value={formData.countryCode} onValueChange={handleCountryCodeChange}>
                <SelectTrigger className="w-24 h-11">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+91">🇮🇳 +91</SelectItem>
                  <SelectItem value="+1">🇺🇸 +1</SelectItem>
                  <SelectItem value="+44">🇬🇧 +44</SelectItem>
                  <SelectItem value="+971">🇦🇪 +971</SelectItem>
                </SelectContent>
              </Select>
              <Input
                id="mobile"
                name="mobile"
                type="tel"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="10 digit number"
                maxLength="10"
                className={`flex-1 h-11 ${errors.mobile ? 'border-red-500' : 'border-slate-300'}`}
              />
            </div>
            {errors.mobile && <p className="text-red-500 text-xs">{errors.mobile}</p>}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white shadow-lg"
          >
            {isSubmitting ? 'Submitting...' : 'Get Pre Launch Deals'}
          </Button>

          {/* Call Now Section */}
          <div className="pt-4 border-t border-slate-200">
            <p className="text-center text-sm text-slate-600 mb-3">Or call us directly</p>
            <a
              href="tel:+917066331177"
              className="flex items-center justify-center gap-3 w-full py-3 rounded-xl border-2 border-blue-900 text-blue-900 hover:bg-blue-50 transition-colors font-semibold"
            >
              <Phone className="w-5 h-5" />
              <span>+91 70663 31177</span>
            </a>
          </div>

          <p className="text-xs text-slate-500 text-center">
            By submitting, you agree to receive updates about Sai Ananta
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EnquiryModal;
