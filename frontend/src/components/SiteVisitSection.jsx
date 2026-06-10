import React, { useState } from 'react';
import { Calendar, User, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner';
import { bookSiteVisit } from '../data/mock';

const SiteVisitSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await bookSiteVisit(formData);
      if (result.success) {
        toast.success(result.message);
        setFormData({ name: '', phone: '', email: '', date: '' });
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 text-white">
            <h2 className="text-5xl md:text-6xl font-serif mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Book Your Site Visit
            </h2>
            <div className="w-24 h-1 bg-white rounded-full mx-auto mb-6" />
            <p className="text-xl text-purple-100">
              Experience the blessings of Sai Ananta in person
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                    <User className="w-4 h-4 text-blue-700" />
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="h-12 border-blue-200 focus:border-purple-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-700" />
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone"
                    className="h-12 border-blue-200 focus:border-purple-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-700" />
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="h-12 border-blue-200 focus:border-purple-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-700" />
                    Preferred Visit Date *
                  </label>
                  <Input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="h-12 border-blue-200 focus:border-purple-500"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-700 to-sky-500 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all"
              >
                {isSubmitting ? 'Scheduling...' : 'Schedule Site Visit'}
              </Button>

              <p className="text-center text-sm text-slate-500">
                Our team will contact you within 24 hours to confirm your visit
              </p>
            </form>
          </div>

          {/* Quick Contact Info */}
          <div className="mt-12 text-center text-white">
            <p className="text-lg mb-4">Or call us directly at</p>
            <a 
              href="tel:+917066331177"
              className="text-3xl font-bold hover:text-purple-200 transition-colors"
            >
              +91 70663 31177
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteVisitSection;
