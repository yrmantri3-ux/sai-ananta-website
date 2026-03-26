import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner';
import { submitEnquiry } from '../data/mock';

const EnquiryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    bhkPreference: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBhkChange = (value) => {
    setFormData({
      ...formData,
      bhkPreference: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitEnquiry(formData);
      if (result.success) {
        toast.success(result.message);
        setFormData({ name: '', mobile: '', email: '', bhkPreference: '' });
        onClose();
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
            Enquire About Sai Ananta
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-slate-700">Full Name *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="h-11 border-purple-200 focus:border-purple-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mobile" className="text-slate-700">Mobile Number *</Label>
            <Input
              id="mobile"
              name="mobile"
              type="tel"
              value={formData.mobile}
              onChange={handleChange}
              required
              placeholder="Enter your mobile"
              pattern="[0-9]{10}"
              className="h-11 border-purple-200 focus:border-purple-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-700">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="h-11 border-purple-200 focus:border-purple-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bhkPreference" className="text-slate-700">BHK Preference *</Label>
            <Select value={formData.bhkPreference} onValueChange={handleBhkChange} required>
              <SelectTrigger className="h-11 border-purple-200 focus:border-purple-500">
                <SelectValue placeholder="Select BHK type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2BHK">2 BHK</SelectItem>
                <SelectItem value="3BHK">3 BHK</SelectItem>
                <SelectItem value="both">Both 2 & 3 BHK</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 h-11 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="h-11 border-purple-200 hover:bg-purple-50"
            >
              Cancel
            </Button>
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
