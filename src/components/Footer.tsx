import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin, Clock, Car } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1C252E] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="Austin Autos Logo"
                className="h-16 w-auto rounded-lg shadow-lg"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner in finding the perfect vehicle in Nigeria. We pride ourselves on transparency, quality, and exceptional customer service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#475C7A] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#475C7A] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#475C7A] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#475C7A] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-[#475C7A] pl-3">Quick Links</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/inventory" className="hover:text-white transition-colors">Our Inventory</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/inventory" className="hover:text-white transition-colors">Sell Your Car</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-[#475C7A] pl-3">Contact Us</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#475C7A] shrink-0" />
                <span>1 Olumegbon Rd, Surulere, Lagos 101241, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#475C7A] shrink-0" />
                <span>+234 802 975 8041</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#475C7A] shrink-0" />
                <span>sales@austinautos.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-[#475C7A] pl-3">Business Hours</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex justify-between">
                <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-[#475C7A]" /> Mon - Fri:</span>
                <span>9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-[#475C7A]" /> Saturday:</span>
                <span>10:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-[#475C7A]" /> Sunday:</span>
                <span className="text-[#475C7A] font-semibold">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Austin Autos. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
