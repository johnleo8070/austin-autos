import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Car, Phone, Info, LayoutGrid } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/', icon: LayoutGrid },
  { name: 'Inventory', path: '/inventory', icon: Car },
  { name: 'About Us', path: '/about', icon: Info },
  { name: 'Contact Us', path: '/contact', icon: Phone },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled 
          ? 'bg-white/70 backdrop-blur-xl saturate-150 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] py-2 border-b border-white/20' 
          : 'bg-black/20 backdrop-blur-md py-4 border-b border-white/10'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-[#B22234] p-2 rounded-lg group-hover:bg-[#C41E3A] transition-colors">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "text-xl font-bold tracking-tight leading-none",
                scrolled ? "text-[#1A1A1A]" : "text-white drop-shadow-md"
              )}>
                AUSTIN AUTOS LTD
              </span>
              <span className={cn(
                "text-xs font-semibold tracking-[0.2em] uppercase",
                scrolled ? "text-[#B22234]" : "text-[#D4AF37]"
              )}>
                Auto Sales
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-[#B22234]',
                  location.pathname === link.path
                    ? 'text-[#B22234]'
                    : scrolled ? 'text-[#1A1A1A]' : 'text-white'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/inventory"
              className="bg-[#B22234] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#C41E3A] transition-all transform hover:scale-105"
            >
              Browse Cars
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                'p-2 rounded-md transition-colors',
                scrolled ? 'text-[#1A1A1A]' : 'text-white'
              )}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-white/70 backdrop-blur-2xl saturate-150 shadow-2xl transition-all duration-300 overflow-hidden',
          isOpen ? 'max-h-96 border-t border-white/20' : 'max-h-0'
        )}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                'flex items-center space-x-3 px-3 py-3 rounded-lg text-base font-medium transition-colors',
                location.pathname === link.path
                  ? 'bg-red-50 text-[#B22234]'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-[#B22234]'
              )}
            >
              <link.icon className="w-5 h-5" />
              <span>{link.name}</span>
            </Link>
          ))}
          <div className="pt-4 px-3">
            <Link
              to="/inventory"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-[#B22234] text-white py-3 rounded-lg font-bold shadow-lg shadow-red-200"
            >
              Browse Inventory
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
