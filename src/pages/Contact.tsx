import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck, TrendingUp, CheckCircle2, Facebook, Instagram, Youtube, Music2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    contactMethod: 'Email',
    vehicle: '',
    message: '',
    testDrive: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! Our team will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      contactMethod: 'Email',
      vehicle: '',
      message: '',
      testDrive: false
    });
  };

  return (
    <div className="pt-32 pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#B22234] font-black uppercase tracking-widest text-sm mb-3">Get In Touch</h2>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Contact <span className="text-[#B22234]">Us</span></h1>
          <p className="text-gray-500 font-medium text-lg">Austin Autos LTD is here to help you find your perfect vehicle in Nigeria.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
              <Mail className="w-6 h-6 text-[#B22234]" />
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#B22234] transition-all font-medium"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#B22234] transition-all font-medium"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Phone Number</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#B22234] transition-all font-medium"
                    placeholder="+234 802 975 8041"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Preferred Contact</label>
                  <select
                    value={formData.contactMethod}
                    onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                    className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#B22234] transition-all font-medium appearance-none"
                  >
                    <option>Email</option>
                    <option>Phone</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Interested Vehicle</label>
                <input
                  type="text"
                  value={formData.vehicle}
                  onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                  className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#B22234] transition-all font-medium"
                  placeholder="e.g. 2023 Toyota Camry"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#B22234] transition-all font-medium resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <div className="flex items-center gap-3 p-4 bg-red-50 rounded-2xl border border-red-100">
                <input
                  type="checkbox"
                  id="testDrive"
                  checked={formData.testDrive}
                  onChange={(e) => setFormData({ ...formData, testDrive: e.target.checked })}
                  className="w-5 h-5 rounded border-gray-300 text-[#B22234] focus:ring-[#B22234]"
                />
                <label htmlFor="testDrive" className="text-sm font-bold text-gray-700 cursor-pointer">
                  I'm interested in scheduling a test drive
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#B22234] text-white font-black py-5 rounded-2xl hover:bg-[#C41E3A] transition-all shadow-xl shadow-red-100 flex items-center justify-center gap-2 text-lg"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

          {/* Right: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
              <h4 className="text-xl font-black text-gray-900 mb-8">Contact Information</h4>
              <div className="space-y-6">
                <ContactDetail icon={MapPin} label="Address" value="1 Olumegbon Rd, Surulere, Lagos 101241, Lagos, Nigeria" />
                <ContactDetail icon={Phone} label="Phone" value="+234 802 975 8041" />
                <ContactDetail icon={Mail} label="Email" value="sales@austinautos.com" />
              </div>
              
              <div className="mt-10 pt-10 border-t border-gray-100">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-6">Follow Us</h4>
                <div className="flex gap-4">
                  <SocialIcon icon={Facebook} />
                  <SocialIcon icon={Instagram} />
                  <SocialIcon icon={Youtube} />
                  <SocialIcon icon={Music2} />
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1A] p-10 rounded-[2.5rem] text-white shadow-xl">
              <h4 className="text-xl font-black mb-6">Business Hours</h4>
              <div className="space-y-4 text-sm font-medium">
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Mon - Fri</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-2">
                  <span className="text-gray-400">Saturday</span>
                  <span>10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-[#B22234] font-bold">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[450px] relative border-8 border-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.303964512345!2d3.3598!3d6.5004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c0000000001%3A0x0!2zNsKwMzAnMDEuNCJOIDPCsDIxJzM1LjMiRQ!5e0!3m2!1sen!2sng!4v1621000000000!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute top-6 left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
            <p className="font-black text-gray-900">Austin Autos LTD</p>
            <p className="text-xs text-gray-500 font-bold">Lagos, Nigeria</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BenefitItem({ icon: Icon, text }: { icon: any, text: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-white/10 p-2 rounded-lg">
        <Icon className="w-5 h-5 text-[#D4AF37]" />
      </div>
      <span className="font-bold text-sm text-gray-200">{text}</span>
    </div>
  );
}

function ContactDetail({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-red-50 p-3 rounded-xl">
        <Icon className="w-5 h-5 text-[#B22234]" />
      </div>
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{label}</p>
        <p className="font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
}

function SocialIcon({ icon: Icon }: { icon: any }) {
  return (
    <a href="#" className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-[#B22234] hover:text-white transition-all transform hover:scale-110">
      <Icon className="w-6 h-6" />
    </a>
  );
}
